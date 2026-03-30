export const ServiceOverviewSection = () => {
  const services = [
    {
      tag: "[HW]",
      title: "SERVIS\nHARDWARE",
      desc: "Laptop mati, layar rusak, keyboard error, overheating, ganti thermal paste, upgrade RAM & SSD.",
      badge: "HARDWARE",
    },
    {
      tag: "[SW]",
      title: "INSTALASI\nSOFTWARE",
      desc: "Install ulang Windows/Linux, setting driver, aktivasi Office, hapus virus & malware, optimasi sistem.",
      badge: "BISA REMOTE",
    },
    {
      tag: "[PC]",
      title: "RAKIT PC",
      desc: "Konsultasi build PC sesuai budget & kebutuhan. Gaming, editing, atau workstation — kami bantu pilih komponen terbaik.",
      badge: "CUSTOM BUILD",
    },
    {
      tag: "[HV]",
      title: "HOME VISIT",
      desc: "Teknisi datang ke lokasi Anda di area Bandung & sekitarnya. Tidak perlu bongkar-pasang sendiri.",
      badge: "AREA BANDUNG, CIMAHI\nDAN SEKITARNYA",
    },
  ];

  return (
    <section id="layanan" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 900,
            fontSize: "clamp(32px, 5vw, 52px)",
            color: "var(--text-primary)",
            marginBottom: 16,
          }}
        >
          Apa yang Bisa Kami Bantu?
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: 16,
            color: "var(--text-primary)",
            marginBottom: 48,
            maxWidth: 500,
            lineHeight: 1.6,
          }}
        >
          Semua permasalahan hardware & software, ditangani oleh teknisi berpengalaman.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid rgba(179,136,255,0.2)",
            backgroundColor: "rgba(20,20,45,0.9)",
            borderRadius: 8,
            overflow: "hidden",
          }}
          className="services-grid"
        >
          {services.map((svc, index) => (
            <div
                key={index}
                style={{
                    padding: 32,
                    borderRight: index < 3 ? "1px solid rgba(179,136,255,0.15)" : "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    transition: "all 0.2s",
                    border: "1px solid transparent",
                    margin: -1,
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(123,47,190,0.2)";
                    (e.currentTarget as HTMLElement).style.border = "1px solid rgba(179,136,255,0.6)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLElement).style.border = "1px solid transparent";
                }}
                >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--accent-cyan)",
                  letterSpacing: 1,
                }}
              >
                {svc.tag}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "var(--text-primary)",
                  whiteSpace: "pre-line",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  flex: 1,
                  margin: 0,
                }}
              >
                {svc.desc}
              </p>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--text-secondary)",
                  border: "1px solid rgba(179,136,255,0.2)",
                  padding: "4px 10px",
                  display: "inline-block",
                  whiteSpace: "pre-line",
                  lineHeight: 1.5,
                  alignSelf: "flex-start",
                  letterSpacing: 0.5,
                }}
              >
                {svc.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid > div { border-right: none !important; border-bottom: 1px solid rgba(179,136,255,0.15); }
        }
        @media (max-width: 540px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};