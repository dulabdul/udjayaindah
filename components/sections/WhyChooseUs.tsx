import React from 'react';
import { Truck, Smartphone, PackageCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/data/content';

export const WhyChooseUs = () => {
  const icons = [PackageCheck, Smartphone, Truck];

  return (
    <section className='py-20 bg-white'>
      <div className='container-custom'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold text-secondary mb-4'>
            Mengapa Memilih Kami?
          </h2>
          <div className='w-20 h-1.5 bg-primary mx-auto rounded-full'></div>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = icons[idx] || PackageCheck;
            return (
              <div
                key={idx}
                className='p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 group text-center'>
                <div className='w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform'>
                  <Icon
                    className='text-primary'
                    size={32}
                  />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {item.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
