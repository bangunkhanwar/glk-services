import { lazy, Suspense } from "react";

const HeroTechScene = lazy(() => import("./HeroTechScene"));
const WA_NUMBER = "6282115413366";

export const HeroBannerSection = () => {
  const scrollToForm = () => {
    document
      .getElementById("kontak")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-banner">
      <div className="hero-glow hero-glow-right" />
      <div className="hero-glow hero-glow-left" />

      <div className="hero-container">
        <div className="hero-heading">
          <p className="hero-eyebrow">
            PC & LAPTOP SERVICE // REMOTE IT SUPPORT // APLIKASI & WEBSITE
          </p>

          <h1>
            PC & Laptop
            <br />
            Bermasalah?
          </h1>

          <h2 className="gradient-text">
            Serahkan pada kami
          </h2>
        </div>

        <div className="hero-scene-wrap">
          <Suspense
            fallback={
              <div
                className="hero-scene-loading"
                aria-hidden="true"
              />
            }
          >
            <HeroTechScene />
          </Suspense>
        </div>

        <div className="hero-details">
          <p className="hero-main-copy">
            Servis hardware, software, upgrade, hingga{" "}
            <strong>remote IT support</strong>.
          </p>

          <p className="hero-sub-copy">
            Kendala software dapat ditangani jarak jauh melalui
            UltraViewer atau TeamViewer. Untuk kebutuhan hardware,
            tersedia layanan home visit Bandung, Cimahi & sekitarnya.
          </p>

          <div className="hero-actions">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                "Halo GLK, saya ingin konsultasi mengenai PC / laptop saya."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-primary"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>

              Chat WhatsApp
            </a>

            <button
              type="button"
              onClick={scrollToForm}
              className="hero-secondary"
            >
              Isi Form
            </button>
          </div>

          <p className="hero-tagline">
            <span>Konsultasi Gratis</span>
            {" // "}
            Ceritakan kendala terlebih dahulu sebelum pengerjaan.
          </p>
        </div>
      </div>

      <style>{`
        .hero-banner {
          min-height: 100vh;
          padding-top: 64px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 72px 24px 64px;

          display: grid;
          grid-template-columns:
            minmax(0, 1.05fr)
            minmax(380px, 0.95fr);

          grid-template-areas:
            "heading scene"
            "details scene";

          column-gap: 42px;
          align-items: center;
        }

        .hero-heading {
          grid-area: heading;
          position: relative;
          z-index: 2;
        }

        .hero-heading h1 {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: clamp(42px, 5.4vw, 70px);
          line-height: 1.05;
          color: var(--text-primary);
          margin: 0;
        }

        .hero-heading h2 {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: clamp(38px, 5.1vw, 68px);
          line-height: 1.1;
          margin: 12px 0 28px;
        }

        .hero-eyebrow {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 2px;
          color: var(--accent-cyan);
          margin: 0 0 18px;
        }

        .hero-details {
          grid-area: details;
          max-width: 640px;
          position: relative;
          z-index: 2;
        }

        .hero-main-copy {
          font-family: var(--font-body);
          font-size: 18px;
          line-height: 1.6;
          color: var(--text-primary);
          margin: 0 0 6px;
        }

        .hero-sub-copy {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.65;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 0 30px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .hero-primary,
        .hero-secondary {
          min-height: 50px;
          padding: 0 26px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;

          cursor: pointer;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            background 0.2s ease,
            opacity 0.2s ease;
        }

        .hero-primary {
          border: none;
          color: #fff;
          background:
            linear-gradient(
              135deg,
              #7b2fbe 0%,
              #b388ff 100%
            );
        }

        .hero-secondary {
          color: var(--text-primary);
          background: transparent;
          border: 1px solid rgba(179,136,255,0.4);
        }

        @media (hover: hover) and (pointer: fine) {
          .hero-primary:hover {
            transform: translateY(-2px);
          }

          .hero-secondary:hover {
            border-color: var(--accent-purple);
            background: rgba(179,136,255,0.06);
          }
        }

        .hero-tagline {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-muted);
          letter-spacing: 0.8px;
          margin: 0;
        }

        .hero-tagline span {
          color: var(--accent-purple);
        }

        .hero-scene-wrap {
          grid-area: scene;
          width: 100%;
          min-width: 0;
          height: 500px;
          position: relative;
          z-index: 1;
        }

        .hero-tech-scene {
          width: 100%;
          height: 100%;
          min-width: 0;
        }

        .hero-scene-loading {
          width: 100%;
          height: 100%;
          background:
            radial-gradient(
              circle at center,
              rgba(64,196,255,0.06),
              transparent 65%
            );
        }

        .hero-tech-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 1px;
          color: var(--text-muted);
        }

        .hero-tech-fallback span {
          padding: 6px 10px;
          border: 1px solid rgba(179,136,255,0.2);
        }

        .hero-glow {
          position: absolute;
          pointer-events: none;
        }

        .hero-glow-right {
          width: 650px;
          height: 650px;
          right: 2%;
          top: 15%;
          background:
            radial-gradient(
              circle,
              rgba(30,55,150,0.18),
              transparent 68%
            );
        }

        .hero-glow-left {
          width: 420px;
          height: 420px;
          left: 0;
          top: 38%;
          background:
            radial-gradient(
              circle,
              rgba(123,47,190,0.12),
              transparent 70%
            );
        }

        @media (max-width: 900px) {
          .hero-banner {
            min-height: auto;
          }

          .hero-container {
            padding: 64px 20px 72px;

            grid-template-columns: 1fr;

            grid-template-areas:
              "heading"
              "scene"
              "details";

            gap: 0;
          }

          .hero-heading h2 {
            margin-bottom: 4px;
          }

          .hero-scene-wrap {
            height: 310px;
            margin: 10px 0 22px;
          }

          .hero-details {
            max-width: 680px;
          }
        }

        @media (max-width: 540px) {
          .hero-container {
            padding:
              32px
              18px
              32px;
          }

          .hero-heading h1 {
            font-size: clamp(26px, 8.5vw, 36px);
          }

          .hero-heading h2 {
            font-size: clamp(24px, 8vw, 34px);
            margin-bottom: 10px;
          }

          .hero-eyebrow {
            line-height: 1.6;
            margin-bottom: 10px;
          }

          .hero-scene-wrap {
            height: 170px;
            margin: 0 0 10px;
          }

          .hero-main-copy {
            font-size: 16px;
            margin-bottom: 4px;
          }

          .hero-sub-copy {
            font-size: 14px;
            margin-bottom: 16px;
          }

          .hero-actions {
            gap: 10px;
            margin-bottom: 18px;
          }

          .hero-primary,
          .hero-secondary {
            flex: 1 1 145px;
            padding: 0 16px;
            font-size: 11px;
          }

          .hero-tagline {
            line-height: 1.7;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-primary,
          .hero-secondary {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};