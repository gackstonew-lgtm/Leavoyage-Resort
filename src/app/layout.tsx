import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import { RESORT_INFO } from '@/config/resortInfo';
import { OrderProvider } from '@/context/OrderContext';
import OrderDrawer from '@/components/menu/OrderDrawer';
import FloatingOrderBar from '@/components/menu/FloatingOrderBar';

export const metadata: Metadata = {
  title: 'LE-VOYAGE Resort, Home Away From Home',
  description: 'LE-VOYAGE Resort, Home Away From Home. Luxury suites, cottages, state-of-the-art conference facilities, fine dining, and swimming pool in Kitale.',
  keywords: [
    'LE-VOYAGE Resort',
    'LE-VOYAGE',
    'LE-VOYAGE Kitale',
    'Le Voyage Resort Kitale',
    'Hotels in Kitale',
    'Accommodation in Kitale',
    'Conference facilities in Kitale',
    'Wedding venue Kitale',
    'Resorts in Kitale',
    'Swimming pool Kitale',
    'Trans-Nzoia hospitality'
  ],
  openGraph: {
    title: 'LE-VOYAGE Resort, Home Away From Home',
    description: 'LE-VOYAGE Resort, Home Away From Home. Premier destination for accommodation, conferences, and dining.',
    url: 'https://levoyageresort.co.ke',
    siteName: 'LE-VOYAGE Resort',
    locale: 'en_KE',
    type: 'website',
  },
  icons: {
    icon: '/images/logo.jpeg',
    shortcut: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    'name': RESORT_INFO.name,
    'description': RESORT_INFO.description,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Kitale',
      'addressRegion': 'Trans-Nzoia',
      'addressCountry': 'KE',
      'streetAddress': RESORT_INFO.contact.address
    },
    'telephone': RESORT_INFO.contact.phone,
    'email': RESORT_INFO.contact.email,
    'priceRange': 'KES 7,500 - KES 18,000'
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for (var registration of registrations) {
                    registration.unregister();
                  }
                }).catch(function() {});
              }
            `,
          }}
        />
      </head>
      <body className="antialiased bg-white text-slate-900 flex flex-col min-h-screen">
        {/* Hidden Netlify Forms for build-time detection */}
        <form name="booking" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="booking" />
          <input name="bot-field" />
          <input name="guest_name" />
          <input name="email" />
          <input name="phone" />
          <input name="check_in" />
          <input name="check_out" />
          <input name="adults" />
          <input name="children" />
          <input name="rooms_count" />
          <input name="room_type" />
          <textarea name="special_requests"></textarea>
          <input name="reference_no" />
        </form>
        <form name="enquiry" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="enquiry" />
          <input name="bot-field" />
          <input name="name" />
          <input name="email" />
          <input name="phone" />
          <input name="subject" />
          <textarea name="message"></textarea>
        </form>
        <form name="conference" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="conference" />
          <input name="bot-field" />
          <input name="organization" />
          <input name="contact_name" />
          <input name="phone" />
          <input name="email" />
          <input name="event_type" />
          <input name="event_date" />
          <input name="attendees" />
          <textarea name="message"></textarea>
        </form>
        <OrderProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton variant="floating" />
          <OrderDrawer />
          <FloatingOrderBar />
        </OrderProvider>
      </body>
    </html>
  );
}
