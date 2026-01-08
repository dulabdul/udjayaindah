import React from 'react';
import { CTA_BANNER, SITE_CONFIG } from '@/data/content';
import { Button } from '@/components/ui/Button';

export const CtaBanner = () => {
  return (
    <section className='relative py-24 overflow-hidden'>
      {/* Background Image Placeholder using Tailwind Color/Gradient */}
      <div className='absolute inset-0 bg-secondary'>
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-secondary to-[#1a4d03] opacity-90 z-10' />

        {/* Decorative Image Placeholder (Blurry) */}
        <div className="absolute inset-0 opacity-20 bg-[url('/images/placeholder-warehouse.jpg')] bg-cover bg-center grayscale mix-blend-overlay" />
      </div>

      <div className='container-custom relative z-20 text-center text-white'>
        <span className='inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary text-sm font-semibold mb-6'>
          {SITE_CONFIG.name}
        </span>

        <h2 className='text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto'>
          {CTA_BANNER.headline}
        </h2>

        <p className='text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed'>
          {CTA_BANNER.description}
        </p>

        <Button
          href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
          variant='primary'
          size='lg'
          className='shadow-xl shadow-primary/20 text-lg px-10'>
          {CTA_BANNER.buttonText}
        </Button>
      </div>
    </section>
  );
};
