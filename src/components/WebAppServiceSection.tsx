const WA_NUMBER = "6282115413366";

export const WebAppServiceSection = () => {
  const services = [
    {
      tag: "[CRM]",
      title: "CRM & LOYALTY\nPLATFORM",
      desc: "Sistem membership, poin, reward, dan promo pelanggan yang terintegrasi langsung dengan sistem kasir (POS) untuk operasional bisnis yang lebih rapi.",
    },
    {
      tag: "[HR]",
      title: "ABSENSI KARYAWAN\nDIGITAL",
      desc: "Absensi berbasis GPS dan verifikasi selfie saat jam masuk & keluar, dengan pengaturan shift untuk multi cabang.",
    },
    {
      tag: "[WEB]",
      title: "COMPANY PROFILE\nWEBSITE",
      desc: "Website profil perusahaan yang modern, responsif, dan mudah dikelola untuk membangun kredibilitas bisnis Anda secara online.",
    },
    {
      tag: "[3D]",
      title: "UNDANGAN DIGITAL\nINTERAKTIF",
      desc: "Undangan digital dengan visual interaktif tiga dimensi, tampil lebih hidup dan berbeda dari undangan digital pada umumnya.",
    },
    {
      tag: "[EVT]",
      title: "EVENT MANAGEMENT\nSYSTEM",
      desc: "Sistem pengelolaan event, pendaftaran peserta / kontingen, jadwal pertandingan, hingga pembayaran dalam satu platform.",
    },
    {
      tag: "[BOT]",
      title: "CHATBOT AI\nBISNIS",
      desc: "Asisten chatbot berbasis AI yang terhubung ke WhatsApp dan Telegram untuk membantu operasional layanan pelanggan bisnis Anda.",
    },
  ];

  return (
    <section id="jasa-digital" style={{ padding: "72px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--accent-purple)",
            letterSpacing: 2,
            marginBottom: 16,
          }}
        >
          [ LAYANAN TAMBAHAN ]
        </p>

        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 900,
            fontSize: "clamp(28px, 5vw, 48px)",
            color: "var(--text-primary)",
            marginBottom: 16,
            maxWidth: 720,
            lineHeight: 1.2,
          }}
        >
          Butuh Aplikasi atau Website untuk Bisnis Anda?
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: 16,
            color: "var(--text-secondary)",
            marginBottom: 48,
            maxWidth: 620,
            lineHeight: 1.6,
          }}
        >
          Selain servis perangkat, kami juga menyediakan jasa pembuatan aplikasi &amp; website
          berbasis PWA dan web based untuk kebutuhan operasional bisnis — mulai dari skala
          UMKM hingga menengah.
        </p>

        <div
          className="webapp-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid rgba(179,136,255,0.2)",
            backgroundColor: "rgba(20,20,45,0.9)",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          {services.map((svc, index) => (
            <div
              key={index}
              className="webapp-card"
              style={{
                padding: 32,
                borderRight:
                  index % 3 !== 2
                    ? "1px solid rgba(179,136,255,0.15)"
                    : "none",
                borderBottom:
                  index < 3 ? "1px solid rgba(179,136,255,0.15)" : "none",
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
              <span className="webapp-tag">{svc.tag}</span>
              <h3 className="webapp-title">{svc.title}</h3>
              <p className="webapp-desc">{svc.desc}</p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--text-muted)",
            marginTop: 28,
            letterSpacing: 0.5,
            lineHeight: 1.8,
            maxWidth: 760,
          }}
        >
          // Setiap aplikasi dapat diintegrasikan dengan OTP WhatsApp &amp; Email (SMTP),
          dijalankan di server VPS dengan PM2, serta dilengkapi automasi cron job sesuai
          kebutuhan bisnis Anda.
        </p>

        <div style={{ marginTop: 40 }}>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              "Halo GLK, saya tertarik dengan jasa pembuatan aplikasi / website untuk bisnis saya."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="webapp-cta"
          >
            Konsultasikan Kebutuhan Aplikasi Anda
          </a>
        </div>
      </div>

      <style>{`
        .webapp-tag {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--accent-cyan);
          letter-spacing: 1px;
        }

        .webapp-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 16px;
          color: var(--text-primary);
          white-space: pre-line;
          line-height: 1.3;
          margin: 0;
        }

        .webapp-desc {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        .webapp-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 28px;

          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;

          color: #fff;
          text-decoration: none;

          background: linear-gradient(135deg, #7b2fbe 0%, #b388ff 100%);
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        @media (hover: hover) and (pointer: fine) {
          .webapp-cta:hover {
            transform: translateY(-2px);
          }
        }

        /* TABLET */
        @media (max-width: 900px) {
          .webapp-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .webapp-card {
            border-right: none !important;
            border-bottom: 1px solid rgba(179,136,255,0.15);
          }
        }

        /* MOBILE */
        @media (max-width: 540px) {
          .webapp-grid {
            grid-template-columns: 1fr !important;
            gap: 16px;
            border: none !important;
            background: none !important;
          }

          .webapp-card {
            border: 1px solid rgba(179,136,255,0.2) !important;
            border-radius: 16px;
            padding: 24px !important;
            background: rgba(255,255,255,0.02);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            border-left: 3px solid var(--accent-purple);
          }

          .webapp-card:active {
            transform: scale(0.97);
          }

          .webapp-title {
            font-size: 15px;
          }

          .webapp-cta {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};