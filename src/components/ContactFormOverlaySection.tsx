export const ContactFormOverlaySection = () => {
  const steps = [
    {
      num: "01",
      title: "KONSULTASI GRATIS",
      desc: "Ceritakan masalah Anda via form atau WhatsApp. Tidak ada biaya apapun pada proses ini.",
    },
    {
      num: "02",
      title: "DIAGNOSIS &\nESTIMASI",
      desc: "Tim kami menganalisis dan memberikan estimasi biaya + waktu sebelum anda memutuskan lanjut atau tidak.",
    },
    {
      num: "03",
      title: "PENANGANAN",
      desc: "Servis dilakukan — remote via TeamViewer/AnyDesk, atau teknisi datang ke lokasi Anda.",
    },
    {
      num: "04",
      title: "SELESAI +\nGARANSI",
      desc: "Perangkat kembali normal. Setiap servis disertai garansi — jika ada masalah yang sama, kami tangani ulang.",
    },
  ];

  return (
    <section id="cara-kerja" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 900,
            fontSize: "clamp(28px, 5vw, 48px)",
            color: "var(--text-primary)",
            marginBottom: 12,
          }}
        >
          Bagaimana Cara Kerjanya?
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            color: "var(--text-secondary)",
            marginBottom: 64,
          }}
        >
          4 langkah mudah dari cerita masalah hingga perangkat Anda kembali normal.
        </p>

        <div
          className="steps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card"
              style={{
                padding: "40px 32px",
                borderRight:
                  index < 3 ? "1px solid rgba(179,136,255,0.1)" : "none",
                position: "relative",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 900,
                  fontSize: 80,
                  color: "rgba(179,136,255,0.12)",
                  lineHeight: 1,
                  marginBottom: 16,
                  userSelect: "none",
                }}
              >
                {step.num}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "var(--text-primary)",
                  whiteSpace: "pre-line",
                  marginBottom: 16,
                  lineHeight: 1.4,
                  letterSpacing: 1,
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* TABLET */
        @media (max-width: 900px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .step-card {
            border-right: none !important;
            border-bottom: 1px solid rgba(179,136,255,0.1);
          }
        }

        /* MOBILE UPGRADE (INI KUNCI UTAMA) */
        @media (max-width: 540px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
            gap: 16px;
          }

          .step-card {
            border: 1px solid rgba(179,136,255,0.15) !important;
            border-radius: 16px;
            padding: 24px !important;
            background: rgba(255,255,255,0.02);
            
            /* efek card */
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);

            /* aksen kiri */
            border-left: 3px solid var(--accent-purple);

            /* animasi halus */
            transform: translateY(0);
          }

          .step-card:active {
            transform: scale(0.98);
          }

          .step-card div:first-child {
            font-size: 56px !important;
            color: rgba(179,136,255,0.2) !important;
          }
        }
      `}</style>
    </section>
  );
};