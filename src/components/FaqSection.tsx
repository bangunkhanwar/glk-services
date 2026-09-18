import { useState } from "react";

const faqs = [
  {
    q: "Berapa lama waktu servisnya?",
    a: "Waktu pengerjaan tergantung jenis kendala. Instalasi software atau pekerjaan ringan umumnya dapat diselesaikan lebih cepat, sedangkan kerusakan hardware membutuhkan diagnosis terlebih dahulu. Estimasi waktu akan diinformasikan sebelum pengerjaan.",
  },
  {
    q: "Bagaimana jika perangkat tidak bisa diperbaiki?",
    a: "Kami akan menjelaskan kondisi perangkat dan pilihan yang tersedia. Jika diperlukan, kami juga dapat memberikan rekomendasi upgrade, penggantian komponen, atau solusi alternatif yang lebih efisien.",
  },
  {
    q: "Apakah data saya aman?",
    a: "Kami tidak mengakses, menyalin, atau menghapus data tanpa izin. Untuk pekerjaan yang berpotensi memengaruhi data, kami akan menginformasikan risikonya dan menyarankan backup terlebih dahulu.",
  },
  {
    q: "Kendala apa saja yang bisa ditangani secara remote?",
    a: "Remote support dapat digunakan untuk berbagai kendala software seperti instalasi aplikasi, Microsoft Office, konfigurasi driver, aktivasi dengan lisensi resmi, troubleshooting, dan optimasi sistem. Remote dilakukan melalui UltraViewer atau TeamViewer.",
  },
  {
    q: "Bisa home visit ke luar Bandung?",
    a: "Home visit difokuskan untuk Bandung, Cimahi, dan area sekitarnya. Untuk lokasi lain, silakan konsultasikan terlebih dahulu melalui WhatsApp. Kendala software tertentu tetap dapat ditangani secara remote.",
  },
  {
    q: "Apakah sparepart diinformasikan terlebih dahulu?",
    a: "Ya. Jika diperlukan penggantian komponen, jenis komponen dan estimasi biayanya akan diinformasikan terlebih dahulu sebelum pengerjaan dilanjutkan.",
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <section id="faq" style={{ padding: "72px 0" }}>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 900,
            fontSize: "clamp(28px, 5vw, 52px)",
            color: "var(--text-primary)",
            textAlign: "center",
            marginBottom: 56,
          }}
        >
          Pertanyaan Umum
        </h2>

        <div className="faq-container">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="faq-button"
                >
                  <span className="faq-question">{faq.q}</span>

                  <div className="faq-icon">
                    <span className="plus">{isOpen ? "×" : "+"}</span>
                  </div>
                </button>

                <div className={`faq-answer ${isOpen ? "show" : ""}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-item {
          border-bottom: 1px solid rgba(179,136,255,0.15);
          transition: all 0.3s ease;
        }

        .faq-button {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          padding: 24px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          text-align: left;
        }

        .faq-question {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(13px, 2vw, 15px);
          color: var(--text-primary);
          letter-spacing: 0.5px;
        }

        .faq-icon {
          width: 32px;
          height: 32px;
          background: rgba(123,47,190,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .faq-item.open .faq-icon {
          background: var(--accent-purple);
        }

        .plus {
          color: #fff;
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .faq-item.open .plus {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .faq-answer.show {
          max-height: 300px;
          padding-bottom: 24px;
        }

        .faq-answer p {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.8;
          margin: 0;
        }

        /* 🔥 MOBILE UPGRADE */
        @media (max-width: 540px) {
          .faq-container {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .faq-item {
            border: 1px solid rgba(179,136,255,0.2);
            border-radius: 14px;
            padding: 0 16px;
            background: rgba(255,255,255,0.02);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }

          .faq-button {
            padding: 18px 0;
          }

          .faq-item.open {
            border-color: var(--accent-purple);
            background: rgba(179,136,255,0.05);
          }

          .faq-answer.show {
            padding-bottom: 16px;
          }
        }
      `}</style>
    </section>
  );
};