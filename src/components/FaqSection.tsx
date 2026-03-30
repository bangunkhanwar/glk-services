import { useState } from "react";

const faqs = [
  {
    q: "Berapa lama waktu servisnya?",
    a: "Tergantung jenis kerusakannya. Servis ringan kayak install ulang atau bersihin debu biasanya selesai dalam 1 hari. Upgrade SSD/RAM biasanya 2–3 jam. Kita selalu kasih estimasi waktu di awal dan update terus via WA.",
  },
  {
    q: "Gimana kalau laptop nggak bisa diperbaiki?",
    a: "Kami akan memberitahu dengan jujur kondisi perangkat Anda. Tidak ada biaya diagnosis jika perangkat tidak bisa diperbaiki. Kami juga bisa bantu konsultasi opsi terbaik seperti upgrade atau penggantian komponen.",
  },
  {
    q: "Apakah data saya aman?",
    a: "Keamanan data Anda adalah prioritas kami. Kami tidak akan mengakses, menyalin, atau menghapus data Anda tanpa izin. Untuk servis yang berisiko pada data, kami akan meminta persetujuan dan merekomendasikan backup terlebih dahulu.",
  },
  {
    q: "Bisa home visit ke luar Bandung?",
    a: "Saat ini layanan home visit tersedia di area Bandung, Cimahi, dan sekitarnya. Untuk area luar Bandung, kami menyediakan layanan remote via TeamViewer atau AnyDesk.",
  },
  {
    q: "Sparepart yang dipakai original?",
    a: "Kami menggunakan sparepart original atau OEM berkualitas. Kami akan memberikan informasi lengkap mengenai sparepart yang akan digunakan beserta harganya sebelum pengerjaan dimulai.",
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" style={{ padding: "100px 0" }}>
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

        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid rgba(179,136,255,0.15)",
              }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "24px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "clamp(13px, 2vw, 15px)",
                    color: "var(--text-primary)",
                    letterSpacing: 0.5,
                  }}
                >
                  {faq.q}
                </span>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    backgroundColor:
                      openIndex === index
                        ? "var(--accent-purple)"
                        : "rgba(123,47,190,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background 0.2s",
                  }}
                >
                  <span
                    style={{
                      color: "#fff",
                      fontSize: 18,
                      lineHeight: 1,
                      fontWeight: 300,
                      transform: openIndex === index ? "rotate(45deg)" : "none",
                      transition: "transform 0.2s",
                      display: "block",
                    }}
                  >
                    +
                  </span>
                </div>
              </button>

              {openIndex === index && (
                <div
                  style={{
                    paddingBottom: 24,
                    paddingRight: 48,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      color: "var(--text-secondary)",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};