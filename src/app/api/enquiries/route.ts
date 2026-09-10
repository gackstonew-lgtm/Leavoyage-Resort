import { NextResponse } from 'next/server';
import { createEnquiry } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, type } = body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ success: false, message: 'Please enter your full name.' }, { status: 400 });
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json({ success: false, message: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json({ success: false, message: 'Please provide a detailed message.' }, { status: 400 });
    }

    const enquiryResult = await createEnquiry({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      subject: subject ? subject.trim() : 'General Enquiry',
      message: message.trim(),
      type: type || 'general',
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out to LE-VOYAGE! Your enquiry is ready for transmission.',
      mailto_url: enquiryResult.mailto_url,
      whatsapp_url: enquiryResult.whatsapp_url,
    });
  } catch (error) {
    console.error('Error processing general enquiry:', error);
    return NextResponse.json(
      { success: false, message: 'Could not send enquiry. Please contact us via phone or WhatsApp.' },
      { status: 500 }
    );
  }
}
