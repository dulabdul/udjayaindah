import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://udjayaindah.net';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Frekuensi update konten (misal: harga berubah mingguan)
      priority: 1,               // Prioritas tertinggi untuk Homepage
    },
    // Jika nanti Anda menambah halaman lain (misal: /blog), tambahkan di sini
  ];
}