import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Spiritual Healing & Guidance | Doctor Azaanga',
    template: `%s | Doctor Azaanga`,
  },
  description: 'Find peace and clarity with Doctor Azaanga, a trusted spiritual healer, herbalist, and astrologist. Offering love spells, spiritual cleansing, and guidance for life’s challenges in Mubende, Uganda.',
  keywords: ['spiritual healing', 'herbalist', 'witch doctor', 'astrologist', 'love spells', 'spiritual cleansing', 'Mubende', 'Uganda', 'Doctor Azaanga'],
  openGraph: {
    title: 'Spiritual Healing & Guidance | Doctor Azaanga',
    description: 'Find peace and clarity with Doctor Azaanga, a trusted spiritual healer, herbalist, and astrologist in Mubende, Uganda.',
    url: 'https://www.doctorazaanga.com', // Replace with your actual domain
    siteName: 'Doctor Azaanga',
    images: [
      {
        url: 'https://github.com/doctorazaanga-dev/pics/blob/main/azaanga.jpg?raw=true', // Main OG image
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spiritual Healing & Guidance | Doctor Azaanga',
    description: 'Find peace and clarity with Doctor Azaanga, a trusted spiritual healer, herbalist, and astrologist in Mubende, Uganda.',
    images: ['https://github.com/doctorazaanga-dev/pics/blob/main/azaanga.jpg?raw=true'], // Twitter card image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TF92KLWC');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TF92KLWC"
            height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
