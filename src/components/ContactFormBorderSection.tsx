import { useState } from "react";

const WA_NUMBER = "6285943016048";

export const ContactFormBorderSection = () => {
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    deskripsi: "",
    lokasi: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const msg = `Halo GLK! Saya ingin konsultasi.

Nama: ${formData.nama}
No. WhatsApp: ${formData.whatsapp}
Lokasi: ${formData.lokasi}

Deskripsi Masalah:
${formData.deskripsi}`;

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(179,136,255,0.2)",
    padding: "14px 16px",
    fontFamily: "var(--font-body)",
    fontSize: 15,
    color: "var(--text-primary)",
    outline: "none",
    transition: "border-color 0.2s",
    borderRadius: 0,
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    color: "var(--accent-purple)",
    letterSpacing: 1,
    marginBottom: 8,
    display: "block",
  };

  const bullets = [
    "Gratis Konsultasi",
    "Kami respons dalam <30 Menit",
    "Estimasi harga diberikan sebelum pengerjaan",
    "Garansi",
  ];

  return (
    <section id="kontak" style={{ padding: "60px 0 100px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            border: "1px solid rgba(179,136,255,0.2)",
            backgroundColor: "rgba(255,255,255,0.02)",
            padding: "56px",
            position: "relative",
          }}
          className="contact-inner"
        >
          {/* Top gradient border */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 1,
              right: 1,
              height: 3,
              background: "linear-gradient(90deg, #7b2fbe 0%, #b388ff 50%, #40c4ff 100%)",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Left side */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--accent-purple)",
                  letterSpacing: 2,
                  marginBottom: 16,
                }}
              >
                [ FREE CONSULTATION ]
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 3vw, 40px)",
                  color: "var(--text-primary)",
                  lineHeight: 1.2,
                  marginBottom: 20,
                }}
              >
                Ceritakan
                <br />
                Masalah mu.
              </h2>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "6px 14px",
                  backgroundColor: "rgba(64,196,255,0.1)",
                  border: "1px solid rgba(64,196,255,0.3)",
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--accent-cyan)",
                    letterSpacing: 1,
                  }}
                >
                  100% GRATIS // DAN MUDAH
                </span>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {bullets.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span style={{ color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", fontSize: 12 }}>✓</span>
                    <span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-mono)", fontSize: 12 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side - Form */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={labelStyle}>&gt; NAMA LENGKAP</label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama Anda..."
                  value={formData.nama}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--accent-purple)")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(179,136,255,0.2)")}
                />
              </div>
              <div>
                <label style={labelStyle}>&gt; NOMOR WHATSAPP</label>
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="08xxxxxxxxxx"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--accent-purple)")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(179,136,255,0.2)")}
                />
              </div>
              <div>
                <label style={labelStyle}>&gt; DESKRIPSI MASALAH</label>
                <textarea
                  name="deskripsi"
                  placeholder="Ceritakan gejala yang terjadi pada perangkat Anda (contoh: 'laptop tidak mau nyala sejak kemarin, layar gelap tapi kipas bunyi')..."
                  value={formData.deskripsi}
                  onChange={handleChange}
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--accent-purple)")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(179,136,255,0.2)")}
                />
              </div>
              <div>
                <label style={labelStyle}>&gt; LOKASI / KECAMATAN</label>
                <input
                  type="text"
                  name="lokasi"
                  placeholder="Kecamatan / Kelurahan Anda..."
                  value={formData.lokasi}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--accent-purple)")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(179,136,255,0.2)")}
                />
              </div>

              <button
                onClick={handleSubmit}
                style={{
                  width: "100%",
                  padding: "16px",
                  background: "linear-gradient(135deg, #7b2fbe 0%, #b388ff 100%)",
                  border: "none",
                  color: "#fff",
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  letterSpacing: 2,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  transition: "opacity 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.9";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                KIRIM FORM
              </button>

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--text-muted)",
                  textAlign: "center",
                  letterSpacing: 0.5,
                }}
              >
                // Tim kami akan menghubungi via WhatsApp dalam &lt;30 Menit
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-inner { padding: 32px 24px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};