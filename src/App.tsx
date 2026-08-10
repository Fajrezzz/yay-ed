import { useState, useEffect } from 'react';

const photos = [
  {
    url: '/image/romantic1.jpg',
    caption: 'kesukaan yay ed 🌅',
  },
  {
    url: '/image/romantic2.jpg',
    caption: 'Mawar merah untuk janda yay ed🌹',
  },
  {
    url: '/image/romantic3.jpg',
    caption: 'yay ed emang the best ✨',
  },
];

const videoUrl =
  'https://player.cloudinary.com/embed/?cloud_name=dxkbvpaa1&public_id=VID_20260810_170105_vmcwn4';

function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((i) => (
        <div
          key={i}
          className="absolute animate-float text-pink-300/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 24 + 12}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 5 + 4}s`,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <FloatingHearts />

      {/* ================= HERO ================= */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div
          className={`transition-all duration-1000 ${
            showContent
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-6 text-6xl md:text-8xl">💕</div>

          <h1 className="mb-4 font-serif text-5xl font-bold tracking-tight text-rose-700 md:text-7xl">
            Yay Ed
          </h1>

          <p className="mb-2 text-lg text-rose-500/80 md:text-xl">
            Sebuah halaman kecil untuk momen spesial yay ed
          </p>

          <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-rose-400 to-transparent" />

          <p className="mt-6 text-sm italic text-rose-400">
            &ldquo;Setiap detik bersama janda adalah puisi yang tak pernah
            berakhir.&rdquo;
          </p>
        </div>

        <div className="absolute bottom-10 animate-bounce text-rose-400">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* ================= PHOTO GALLERY ================= */}
      <section className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-5xl">

          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-rose-700 md:text-4xl">
            Momen Kita 💐
          </h2>

          <p className="mb-12 text-center text-rose-400">
            Foto-foto yang menyimpan cerita cinta
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setActivePhoto(index)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-lg shadow-rose-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-200">

                  {/* FOTO 9:16 */}
                  <div className="aspect-[9/16] overflow-hidden rounded-xl">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <p className="mt-3 text-center text-sm font-medium text-rose-600">
                    {photo.caption}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {activePhoto !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative w-full max-w-md animate-in fade-in zoom-in"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setActivePhoto(null)}
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-rose-600 shadow-lg transition-transform hover:scale-110"
            >
              ✕
            </button>

            {/* LIGHTBOX 9:16 */}
            <div className="aspect-[9/16] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={photos[activePhoto].url}
                alt={photos[activePhoto].caption}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-4 text-center text-lg font-medium text-white">
              {photos[activePhoto].caption}
            </p>

          </div>
        </div>
      )}

      {/* ================= VIDEO ================= */}
      <section className="relative z-10 bg-gradient-to-b from-rose-50 to-pink-100 px-4 py-20">
        <div className="mx-auto max-w-4xl">

          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-rose-700 md:text-4xl">
            Video Kita 🎬
          </h2>

          <p className="mb-10 text-center text-rose-400">
            Rekaman momen indah yang tak terlupakan
          </p>

          {/* VIDEO 9:16 */}
          <div className="mx-auto max-w-md overflow-hidden rounded-3xl bg-white p-3 shadow-2xl shadow-rose-200">

            <div className="aspect-[9/16] overflow-hidden rounded-2xl">

              <iframe
                src={videoUrl}
                className="h-full w-full border-0"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
                title="Video Yay Ed"
              />

            </div>

          </div>
        </div>
      </section>

      {/* ================= LOVE LETTER ================= */}
      <section className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">

          <div className="rounded-3xl bg-white/80 p-8 shadow-xl shadow-rose-100 backdrop-blur-sm md:p-12">

            <div className="mb-4 text-4xl">💌</div>

            <h2 className="mb-6 font-serif text-2xl font-bold text-rose-700">
              Untukmu, Ed
            </h2>

            <p className="leading-relaxed text-rose-600/80">
              orang bilang fuad sj (spesialis janda) 
            </p>

            <p className="mt-6 font-serif text-3xl font-bold text-rose-600">
              mantap yay ed
            </p>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 border-t border-rose-200/50 bg-white/50 py-8 text-center backdrop-blur-sm">
        <p className="text-sm text-rose-400">
          Made with 💕 for Yay Ed &mdash; 2026
        </p>
      </footer>

      {/* ================= ANIMATION ================= */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.4;
          }

          50% {
            transform: translateY(-30px) rotate(15deg);
            opacity: 0.8;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

    </div>
  );
}
