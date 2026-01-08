import React from 'react';
import Image from 'next/image';

export const Hero = () => {
  return (
    // Padding atas disesuaikan agar pas dengan navbar
    <section className='pt-24 pb-8 md:pt-32 md:pb-12 bg-white'>
      <div className='container-custom'>
        {/*
          Container Banner:
          - Dihapus: aspect ratio paksa (aspect-[4/3] dll).
          - Diganti: w-full h-auto agar tinggi wadah mengikuti tinggi gambar.
          - Styling: rounded & shadow untuk estetika.
        */}
        <div className='relative w-full h-auto bg-gray-100 rounded-2xl overflow-hidden shadow-md border border-gray-100'>
          {/* --- IMPLEMENTASI GAMBAR ASLI (Uncomment dan sesuaikan) ---

          PETUNJUK:
          1. Hapus div placeholder di atas.
          2. Uncomment komponen <Image /> di bawah ini.
          3. Ganti '/images/nama-file-banner-anda.jpg' dengan path gambar Anda.
          4. PENTING: Masukkan width dan height ASLI dari gambar tersebut.
             Ini wajib agar browser tahu rasio gambar dan tidak ada yang terpotong.
          */}

          <Image
            src='/images/hero.jpg' // <-- Ganti dengan path gambar Anda di folder public
            alt='UD Jaya Indah - Pusat Sembako Termurah'
            width={1200} // <-- Ganti dengan LEBAR ASLI gambar (px)
            height={600} // <-- Ganti dengan TINGGI ASLI gambar (px)
            className='w-full h-auto' // <-- KUNCI: Agar gambar responsif dan utuh
            priority={true} // <-- Load prioritas tinggi untuk LCP
          />
        </div>
      </div>
    </section>
  );
};
