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
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
          }}
          className="steps-grid"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                padding: "40px 32px",
                borderRight: index < 3 ? "1px solid rgba(179,136,255,0.1)" : "none",
                position: "relative",
              }}
              className="step-card"
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
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .step-card { border-right: none !important; border-bottom: 1px solid rgba(179,136,255,0.1); }
        }
        @media (max-width: 540px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};