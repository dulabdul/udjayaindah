import React from 'react';
import { Star } from 'lucide-react';

// Data dummy sesuai permintaan (Nama lokal Indonesia)
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ibu Sri Wahyuni',
    role: 'Pemilik Warung Sembako',
    content:
      'Sejak ambil barang di UD Jaya Indah, keuntungan warung saya naik karena harga modalnya murah banget. Pengiriman juga cepet sampai depan warung.',
    avatar: 'S',
  },
  {
    id: 2,
    name: 'Pak Budi Santoso',
    role: 'Agen Reseller',
    content:
      'Pelayanannya ramah dan responsif. Stok barang selalu aman, jadi saya nggak pusing kalau ada pesanan dadakan. Recommended banget!',
    avatar: 'B',
  },
  {
    id: 3,
    name: 'Ibu Hartini',
    role: 'Ibu Rumah Tangga',
    content:
      'Belanja kebutuhan bulanan jadi lebih hemat. Minyak dan beras kualitasnya bagus, nggak kalah sama supermarket tapi harga jauh lebih miring.',
    avatar: 'H',
  },
];

export const Testimonials = () => {
  return (
    <section className='py-20 bg-white border-t border-gray-100'>
      <div className='container-custom'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
            Apa Kata Mereka?
          </h2>
          <p className='text-gray-600'>
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className='bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow'>
              {/* Stars */}
              <div className='flex gap-1 mb-6 text-yellow-400'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill='currentColor'
                  />
                ))}
              </div>

              <p className='text-gray-700 italic mb-6 leading-relaxed'>
                {testi.content}
              </p>

              <div className='flex items-center gap-4'>
                {/* Avatar Placeholder */}
                <div className='w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg'>
                  {testi.avatar}
                </div>
                <div>
                  <h4 className='font-bold text-gray-900'>{testi.name}</h4>
                  <p className='text-sm text-primary font-medium'>
                    {testi.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
