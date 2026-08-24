'use client';

import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/config/resortInfo';

interface WhatsAppButtonProps {
  message?: string;
  variant?: 'floating' | 'inline';
  label?: string;
}

export default function WhatsAppButton({
  message = 'Hello Le Voyage Resort, I would like to make an enquiry.',
  variant = 'floating',
  label = 'Chat on WhatsApp',
}: WhatsAppButtonProps) {
  const link = getWhatsAppLink(message);

  if (variant === 'inline') {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs px-4 py-2.5 rounded-lg shadow transition"
      >
        <MessageCircle className="w-4 h-4" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition duration-300 flex items-center justify-center border-2 border-white group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold px-0 group-hover:px-2">
        WhatsApp Resort Desk
      </span>
    </a>
  );
}
