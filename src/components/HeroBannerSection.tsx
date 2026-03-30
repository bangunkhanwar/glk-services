const WA_NUMBER = "6285943016048";

export const HeroBannerSection = () => {
  const scrollToForm = () => {
    document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 64,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow effects */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 600,
          height: 600,
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(26,35,126,0.35) 0%, rgba(26,35,126,0) 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "5%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(123,47,190,0.15) 0%, rgba(123,47,190,0) 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "80px 24px",
          width: "100%",
        }}
      >
        {/* Main heading */}
        <div style={{ maxWidth: 900 }}>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 900,
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1.05,
              color: "var(--text-primary)",
              marginBottom: 0,
            }}
          >
            PC & Laptop
            <br />
            Bermasalah?
          </h1>
          <h2
            className="gradient-text"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 900,
              fontSize: "clamp(36px, 6vw, 72px)",
              lineHeight: 1.1,
              marginBottom: 32,
              whiteSpace: "nowrap",
            }}
          >
            Serahkan pada kami
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              color: "var(--text-secondary)",
              marginBottom: 8,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "var(--text-primary)" }}>
              laptop mati total ?
            </strong>{" "}
            atau{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              Rakit PC impian ?
            </strong>{" "}
            – Kami siap bantu
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "var(--text-secondary)",
              marginBottom: 40,
            }}
          >
            Servis profesional, Harga jelas, Bisa dipanggil ke Rumah bahkan
            Online
          </p>

          {/* CTA Buttons */}
          <div
            style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 40 }}
          >
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 28px",
                background: "linear-gradient(135deg, #7b2fbe 0%, #b388ff 100%)",
                color: "#fff",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                textDecoration: "none",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.9";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* WhatsApp icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat WhatsApp
            </a>
            <button
              onClick={scrollToForm}
              style={{
                padding: "14px 28px",
                background: "transparent",
                color: "var(--text-primary)",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                border: "1px solid rgba(179,136,255,0.4)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--accent-purple)";
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(179,136,255,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(179,136,255,0.4)";
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
              }}
            >
              Isi Form
            </button>
          </div>

          {/* Tag line */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--text-muted)",
              letterSpacing: 1,
            }}
          >
            <span style={{ color: "var(--accent-purple)" }}>Konsultasi Gratis</span>{" "}
            // Tidak ada biaya. Cukup ceritakan langsung masalahnya.
          </p>
        </div>
      </div>
    </section>
  );
};