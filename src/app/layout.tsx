
import type { Metadata } from 'next';
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-provider";
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import { LenisSmoothScroll } from '@/components/ui/lenis-smooth-scroll';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Nabi Crescent Matriculation School | Avadi — Est. 1991',
  description: 'Nabi Crescent Matriculation School in Avadi has delivered disciplined, values-based education from LKG through Class 10 since 1991.',
  keywords: ['Nabi Crescent Matriculation School', 'Avadi school since 1991', 'matriculation school Avadi'],
  alternates: {
    canonical: 'https://nabicrescentmatric.edu.in',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness', 'School'],
  name: 'Nabi Crescent Matriculation School',
  url: 'https://nabicrescentmatric.edu.in',
  telephone: '+914443780320',
  email: 'nabicrescentmatric.avadi@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nabi Crescent Campus, Avadi',
    addressLocality: 'Avadi',
    addressRegion: 'Tamil Nadu',
    postalCode: '600054',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.11626,
    longitude: 80.10805,
  },
  hasMap: 'https://maps.google.com/?q=13.11626,80.10805',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-[#FCFAF2] text-[#52605A] antialiased min-h-screen">
        <SmoothScrollProvider>
        <LenisSmoothScroll>
          {children}
          <WhatsAppFloat />
        </LenisSmoothScroll>
              </SmoothScrollProvider>
</body>
    </html>
  );
}