import React from 'react';
import { CheckCircle } from 'lucide-react';
import { ABOUT_CONTENT } from '@/data/content';
import Image from 'next/image';

export const About = () => {
  return (
    <section
      id='about'
      className='py-20 bg-white'>
      <div className='container-custom'>
        <div className='max-w-4xl mx-auto text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
            {ABOUT_CONTENT.title}
          </h2>
          <div className='w-20 h-1.5 bg-[#93B532] mx-auto rounded-full'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg'>
            <div className='absolute inset-0 flex items-center justify-center text-gray-400'>
              <Image
                src={'/images/about.jpg'}
                fill
                className='object-cover'
                alt='About Us UD Jaya'
              />
            </div>
          </div>

          <div className='space-y-6'>
            <h3 className='text-2xl font-bold text-[#0F2F02]'>
              {ABOUT_CONTENT.companyName} <br />
              <span className='text-[#93B532]'>{ABOUT_CONTENT.subtitle}</span>
            </h3>

            <div className='space-y-4 text-gray-600 leading-relaxed'>
              {ABOUT_CONTENT.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6'>
              {ABOUT_CONTENT.features.map((feature) => (
                <li
                  key={feature}
                  className='flex items-center gap-2 font-medium text-gray-900'>
                  <CheckCircle
                    className='text-[#93B532]'
                    size={20}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
