import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing & Rates | LE-VOYAGE Resort Kitale',
  description: 'View accommodation, conference, event venue and resort facility rates at LE-VOYAGE Resort in Kitale. Transparent official pricing for rooms, halls, grounds, and dining.',
  keywords: [
    'LE-VOYAGE Resort pricing',
    'LE-VOYAGE rates Kitale',
    'Kitale hotel prices',
    'Conference hall rates Kitale',
    'Wedding grounds hire Kitale',
    'Accommodation prices Kitale',
    'LE-VOYAGE Resort venue hire'
  ],
  openGraph: {
    title: 'Pricing & Rates | LE-VOYAGE Resort Kitale',
    description: 'View accommodation, conference, event venue and resort facility rates at LE-VOYAGE Resort in Kitale.',
    url: 'https://levoyageresort.co.ke/pricing',
    siteName: 'LE-VOYAGE Resort',
    locale: 'en_KE',
    type: 'website',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
