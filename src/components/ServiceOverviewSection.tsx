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
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid rgba(179,136,255,0.2)",
            backgroundColor: "rgba(20,20,45,0.9)",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          {services.map((svc, index) => (
            <div
              key={index}
              className="service-card"
              style={{
                padding: 32,
                borderRight:
                  index < 3
                    ? "1px solid rgba(179,136,255,0.15)"
                    : "none",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                transition: "all 0.25s ease",
                border: "1px solid transparent",
                margin: -1,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "rgba(123,47,190,0.2)";
                el.style.border = "1px solid rgba(179,136,255,0.6)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "transparent";
                el.style.border = "1px solid transparent";
              }}
            >
              <span className="svc-tag">{svc.tag}</span>

              <h3 className="svc-title">{svc.title}</h3>

              <p className="svc-desc">{svc.desc}</p>

              <span className="svc-badge">{svc.badge}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .svc-tag {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--accent-cyan);
          letter-spacing: 1px;
        }

        .svc-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 18px;
          color: var(--text-primary);
          white-space: pre-line;
          line-height: 1.3;
          margin: 0;
        }

        .svc-desc {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
          flex: 1;
          margin: 0;
        }

        .svc-badge {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-secondary);
          border: 1px solid rgba(179,136,255,0.2);
          padding: 4px 10px;
          display: inline-block;
          white-space: pre-line;
          line-height: 1.5;
          align-self: flex-start;
          letter-spacing: 0.5px;
        }

        /* TABLET */
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .service-card {
            border-right: none !important;
            border-bottom: 1px solid rgba(179,136,255,0.15);
          }
        }

        /* 🔥 MOBILE UPGRADE */
        @media (max-width: 540px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 16px;
            border: none !important;
            background: none !important;
          }

          .service-card {
            border: 1px solid rgba(179,136,255,0.2) !important;
            border-radius: 16px;
            padding: 24px !important;
            background: rgba(255,255,255,0.02);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);

            /* aksen */
            border-left: 3px solid var(--accent-purple);

            /* animasi */
            transform: translateY(0);
          }

          .service-card:active {
            transform: scale(0.97);
          }

          .svc-title {
            font-size: 16px;
          }

          .svc-tag {
            font-size: 11px;
          }

          .svc-badge {
            margin-top: 8px;
          }
        }
      `}</style>
    </section>
  );
};