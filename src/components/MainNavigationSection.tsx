const WA_NUMBER = "6285943016048";

export const MainNavigationSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(179,136,255,0.15)",
        backgroundColor: "rgba(10,10,20,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 900,
            fontSize: 20,
            color: "var(--text-primary)",
            letterSpacing: 2,
            cursor: "pointer",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          GLK<span style={{ color: "var(--accent-cyan)" }}>.</span>
        </div>

        {/* Nav Links - hidden on mobile */}
        <div
          style={{
            display: "flex",
            gap: 40,
            alignItems: "center",
          }}
          className="nav-links"
        >
          {[
            { label: "LAYANAN", id: "layanan" },
            { label: "CARA KERJA", id: "cara-kerja" },
            { label: "HARGA", id: "harga" },
            { label: "TESTIMONI", id: "faq" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: 2,
                color: "var(--text-secondary)",
                transition: "color 0.2s",
                padding: 0,
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-secondary)")
              }
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href={`https://wa.me/${WA_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: 2,
            color: "var(--accent-cyan)",
            border: "1px solid var(--accent-cyan)",
            padding: "8px 20px",
            textDecoration: "none",
            transition: "all 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor =
              "rgba(64,196,255,0.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor =
              "transparent";
          }}
        >
          WhatsApp Sekarang
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
};