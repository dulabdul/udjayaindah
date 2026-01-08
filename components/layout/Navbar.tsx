'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '@/data/content';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Produk', href: '#products' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-white py-5'
      )}>
      <div className='container-custom flex items-center justify-between'>
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center gap-2 group'>
          {/* Simple SVG Logo */}
          <div className='w-8 h-8 bg-[#93B532] rounded-lg flex items-center justify-center text-white font-bold text-xl'>
            J
          </div>
          <span className='text-xl font-bold text-gray-900 group-hover:text-[#93B532] transition-colors'>
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8'>
          <ul className='flex items-center gap-6'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className='text-sm font-medium text-gray-600 hover:text-[#93B532] transition-colors'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            variant='whatsapp'
            size='sm'
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target='_blank'>
            Chat WhatsApp
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className='md:hidden p-2 text-gray-600'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white border-t p-4 shadow-lg flex flex-col gap-4'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-base font-medium text-gray-700 py-2 border-b border-gray-100'
              onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Button
            variant='whatsapp'
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            fullWidth>
            Chat WhatsApp
          </Button>
        </div>
      )}
    </nav>
  );
};
