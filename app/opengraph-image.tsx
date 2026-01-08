import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'UD Jaya Indah - Pusat Grosir Sembako Termurah';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Kita load font Inter dari Google Fonts agar tampilan teks konsisten
  // Jika gagal, dia akan fallback ke sans-serif bawaan sistem
  const interSemiBold = await fetch(
    new URL(
      'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZs.woff',
      import.meta.url
    )
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0F2F02', // Secondary Color
          backgroundImage:
            'radial-gradient(circle at 25px 25px, #1a4d03 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a4d03 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          fontFamily: '"Inter"',
        }}>
        {/* Decorative Circle Background */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            backgroundColor: '#93B532', // Primary Color
            opacity: 0.2,
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-50px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            backgroundColor: '#93B532',
            opacity: 0.1,
            filter: 'blur(60px)',
          }}
        />

        {/* Content Wrapper */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            padding: '40px 80px',
            textAlign: 'center',
          }}>
          {/* Logo Wrapper */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#93B532',
              borderRadius: '16px',
              width: '80px',
              height: '80px',
              marginBottom: '24px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
            }}>
            <span style={{ fontSize: '48px', color: 'white', fontWeight: 800 }}>
              J
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              display: 'flex',
              fontSize: '64px',
              fontWeight: 800,
              letterSpacing: '-0.05em',
              color: 'white',
              marginBottom: '16px',
              lineHeight: 1,
            }}>
            UD Jaya Indah
          </div>

          {/* Subtitle / Tagline */}
          <div
            style={{
              display: 'flex',
              fontSize: '32px',
              fontWeight: 500,
              color: '#e5e7eb',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}>
            Pusat Grosir Sembako Termurah & Terlengkap
          </div>

          {/* URL Label */}
          <div
            style={{
              display: 'flex',
              marginTop: '40px',
              padding: '12px 24px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '50px',
              border: '1px solid rgba(255,255,255,0.2)',
            }}>
            <span
              style={{ fontSize: '24px', color: '#93B532', fontWeight: 600 }}>
              udjayaindah.net
            </span>
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: interSemiBold,
          style: 'normal',
          weight: 600,
        },
      ],
    }
  );
}
