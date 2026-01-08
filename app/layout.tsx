import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/data/content';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/ui/FloatingActions';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// KONFIGURASI METADATA LENGKAP
export const metadata: Metadata = {
  // 1. Metadata Base: Wajib untuk resolve absolute URL (opengraph image, dll)
  // Ganti dengan domain produksi Anda nantinya.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || 'https://www.udjayaindah.net'
  ),

  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,

  // 2. Open Graph Setup (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: 'https://www.udjayaindah.net',
    siteName: SITE_CONFIG.name,
    locale: 'id_ID',
    type: 'website',
    // Next.js akan otomatis memasukkan opengraph-image.tsx disini
    // tidak perlu didefinisikan manual di images: [] jika file ada
  },

  // 3. Twitter Card Setup (X / Twitter)
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    // Next.js juga otomatis menggunakan opengraph-image.tsx sebagai fallback
    // jika twitter-image.tsx tidak ada
  },

  // 4. Canonical URL
  alternates: {
    canonical: '/',
  },

  // 5. Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='id'
      className='scroll-smooth'>
      <body className={inter.className}>
        <Navbar />
        <main className='min-h-screen'>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
