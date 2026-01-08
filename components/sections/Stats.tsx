import React from 'react';

const stats = [
  { label: 'Pelanggan Puas', value: '5,000+' },
  { label: 'Toko Mitra', value: '150+' },
  { label: 'Kota Jangkauan', value: '25+' },
  { label: 'Produk Terjual', value: '1M+' },
];

export const Stats = () => {
  return (
    <section className='py-12 bg-[#0F2F02] text-white'>
      <div className='container-custom'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-green-800/50'>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className='p-4'>
              <p className='text-3xl md:text-4xl font-bold text-[#93B532] mb-2'>
                {stat.value}
              </p>
              <p className='text-sm md:text-base text-gray-300 font-medium'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
