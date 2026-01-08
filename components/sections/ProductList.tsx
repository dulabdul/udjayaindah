'use client';

import React, { useState } from 'react';
import Image from 'next/image'; // Import Image
import { Star, Eye } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/data/content';

export const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <section
      id='products'
      className='py-20 bg-gray-50'>
      <div className='container-custom'>
        <div className='text-center mb-16 space-y-4'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900'>
            Pilihan Produk Kami
          </h2>
          <p className='max-w-2xl mx-auto text-gray-600'>
            Kami menyediakan sembako murah untuk kebutuhan toko, warung, UMKM,
            hingga reseller.
          </p>
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col h-full'>
              {/* Card Image Real Implementation */}
              <div className='relative h-56 bg-white overflow-hidden shrink-0 border-b border-gray-100'>
                {/* Menggunakan Next.js Image Component */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className='object-contain p-4 group-hover:scale-105 transition-transform duration-500'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                />
              </div>

              {/* Card Content */}
              <div className='p-6 flex flex-col flex-grow'>
                <div className='flex justify-between items-start mb-2'>
                  <span className='text-xs font-semibold text-[#93B532] bg-green-50 px-2 py-1 rounded'>
                    {product.category}
                  </span>
                  <div className='flex items-center gap-1 text-yellow-400'>
                    <Star
                      size={16}
                      fill='currentColor'
                    />
                    <span className='text-xs font-medium text-gray-500'>
                      {product.rating}
                    </span>
                  </div>
                </div>

                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  {product.name}
                </h3>
                <p className='text-sm text-gray-600 line-clamp-2 mb-6 flex-grow'>
                  {product.description}
                </p>

                <div className='flex flex-col gap-3 mt-auto'>
                  <Button
                    onClick={() => openModal(product)}
                    variant='outline'
                    size='sm'
                    fullWidth
                    className='gap-2'>
                    <Eye size={16} /> Lihat Daftar Harga
                  </Button>
                  <Button
                    href={`https://wa.me/${
                      SITE_CONFIG.whatsapp
                    }?text=Halo,%20saya%20tertarik%20pesan%20${encodeURIComponent(
                      product.name
                    )}`}
                    variant='whatsapp'
                    size='sm'
                    fullWidth>
                    Pesan Sekarang
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price List Modal */}
      <Modal
        isOpen={!!selectedProduct}
        onClose={closeModal}
        title={`Daftar Harga - ${selectedProduct?.name}`}>
        {selectedProduct && (
          <div className='flex flex-col h-full'>
            <div className='p-4 bg-green-50 rounded-lg border border-green-100 mb-6 shrink-0'>
              <p className='text-sm text-gray-700'>
                {selectedProduct.description}
              </p>
            </div>

            <div className='space-y-8 pb-4'>
              {selectedProduct.priceList.map((group, idx) => (
                <div key={idx}>
                  <h4 className='font-bold text-[#0F2F02] mb-3 text-lg border-l-4 border-[#93B532] pl-3'>
                    {group.groupName}
                  </h4>

                  <ul className='border-t border-gray-200'>
                    {group.items.map((item, i) => (
                      <li
                        key={i}
                        className='flex justify-between items-start py-3 border-b border-gray-200 hover:bg-gray-50 transition-colors px-2'>
                        <span className='text-gray-700 font-medium text-sm sm:text-base w-[65%] pr-4 leading-relaxed'>
                          {item.name}
                        </span>

                        <span className='text-[#93B532] font-bold text-sm sm:text-base text-right w-[35%] whitespace-nowrap'>
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className='pt-4 mt-6 border-t border-gray-200 bg-white sticky bottom-0 z-10'>
              <Button
                href={`https://wa.me/${
                  SITE_CONFIG.whatsapp
                }?text=Halo,%20saya%20ingin%20pesan%20produk%20dari%20daftar%20harga%20${encodeURIComponent(
                  selectedProduct.name
                )}`}
                variant='whatsapp'
                fullWidth>
                Pesan via WhatsApp
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
