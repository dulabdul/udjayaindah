import React from 'react';

export const Intro = () => {
  return (
    // Background kuning cerah sesuai referensi
    <section className='py-16 md:py-20 mt-12 md:mt-16 bg-[#0F2F02]'>
      <div className='container-custom'>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 items-start'>
          {/* Sisi Kiri: Headline Besar */}
          <div className='flex-1'>
            <h2 className='text-3xl md:text-3xl lg:text-5xl font-bold text-[#93B532] leading-tight'>
              Grosir Sembako Termurah & Terlengkap, Siap Kirim ke Seluruh
              Indonesia!
            </h2>
          </div>

          {/* Sisi Kanan: Garis & Deskripsi */}
          <div className='flex-1 lg:pt-2'>
            {/* Garis Hitam Kecil */}
            <div className='w-16 h-0.5 bg-[#93B532] mb-6'></div>

            {/* Teks Deskripsi */}
            <p className='text-white text-[14px] lg:text-lg leading-relaxed font-medium'>
              Dapatkan harga grosir terbaik untuk gula pasir, minyak goreng,
              beras, mie instan, teh, kopi, LPG, dan berbagai kebutuhan sembako
              lainnya. Pesan mudah, stok selalu ready, dan pengiriman cepat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
