import React from 'react';
import Link from 'next/link';
import { Instagram, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/data/content';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#0F2F02] text-white pt-16 pb-8'>
      <div className='container-custom'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          {/* Brand & Description */}
          <div className='lg:col-span-2 space-y-4'>
            <Link
              href='/'
              className='inline-block'>
              <span className='text-2xl font-bold text-white tracking-tight'>
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className='text-gray-300 leading-relaxed max-w-sm'>
              {SITE_CONFIG.description}
              <br />
              Mitra terpercaya untuk kebutuhan pokok harian dan usaha Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-bold text-[#93B532]'>Menu</h4>
            <ul className='space-y-2'>
              {['Home', 'Tentang Kami', 'Produk', 'Kontak'].map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === 'Home'
                        ? '/'
                        : `#${item.toLowerCase().replace(' ', '-')}`
                    }
                    className='text-gray-300 hover:text-[#93B532] transition-colors'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h4 className='text-lg font-bold text-[#93B532]'>Hubungi Kami</h4>
            <ul className='space-y-4'>
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 text-gray-300 hover:text-[#93B532] transition-colors'>
                  <Phone
                    className='shrink-0 text-[#93B532]'
                    size={20}
                  />
                  <span>WhatsApp Admin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='pt-8 border-t border-green-900 text-center'>
          <p className='text-sm text-gray-400'>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
