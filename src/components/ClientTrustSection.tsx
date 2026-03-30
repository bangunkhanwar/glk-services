export const ClientTrustSection = () => {
  const stats = [
    { value: "50+", label: "Pelanggan Puas" },
    { value: "<30M", label: "Waktu Respon" },
    { value: "100%", label: "Garansi" },
    { value: "20+", label: "Home Visit Remote" },
  ];

  return (
    <section
      style={{
        borderTop: "1px solid rgba(179,136,255,0.15)",
        borderBottom: "1px solid rgba(179,136,255,0.15)",
        backgroundColor: "rgba(255,255,255,0.03)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
        }}
        className="trust-grid"
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "28px 0",
              display: "flex",
              alignItems: "center",
              gap: 10,
              borderRight:
                index < 3 ? "1px solid rgba(179,136,255,0.1)" : "none",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                fontSize: 28,
                background:
                  "linear-gradient(135deg, var(--accent-purple), var(--accent-cyan))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {item.value}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--text-secondary)",
                letterSpacing: 0.5,
                lineHeight: 1.4,
                maxWidth: 70,
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};