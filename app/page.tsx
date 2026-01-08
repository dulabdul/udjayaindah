import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { ProductList } from '@/components/sections/ProductList';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { SITE_CONFIG } from '@/data/content';

export default function Home() {
  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WholesaleStore',
    name: SITE_CONFIG.name,
    image: 'https://www.udjayaindah.net/logo.png',
    description: SITE_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Cigondewah Kaler No.50A',
      addressLocality: 'Bandung',
      addressRegion: 'Jawa Barat',
      postalCode: '40215',
      addressCountry: 'ID',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '08:00',
      closes: '17:00',
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Stats />
      <About />
      <WhyChooseUs />
      <CtaBanner />
      <ProductList />
      <Testimonials />
      <Contact />
    </>
  );
}
