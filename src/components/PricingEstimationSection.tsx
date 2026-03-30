const WA_NUMBER = "6285943016048";

export const PricingEstimationSection = () => {
  const plans = [
    {
      tag: "basic check-up",
      price: "FREE",
      note: "*konsultasi awal",
      features: [
        "diagnosa via chat WA",
        "estimasi biaya jujur",
        "saran upgrade terbaik",
      ],
      cta: "mulai chat gratis",
      waMsg: "Halo GLK, saya mau konsultasi gratis dulu.",
      highlighted: false,
      priceColor: "var(--text-primary)",
      bgColor: "rgba(13,13,31,0.95)",
      borderColor: "rgba(179,136,255,0.2)",
      btnStyle: "outline-purple",
    },
    {
      tag: "servis",
      price: "50rb+",
      note: "*tergantung kerusakan",
      features: [
        "semua jenis kerusakan",
        "sparepart original/OEM",
        "garansi 30 hari",
        "update progress real-time",
      ],
      cta: "servis sekarang",
      waMsg: "Halo GLK, saya mau servis perangkat saya.",
      highlighted: true,
      badge: "DIREKOMENDASIKAN",
      priceColor: "var(--accent-cyan)",
      bgColor: "rgba(13,13,31,0.95)",
      borderColor: "var(--accent-cyan)",
      btnStyle: "solid-cyan",
    },
    {
      tag: "rakit bundle / upgrade",
      price: "150rb+",
      note: "*tergantung komponen",
      features: [
        "RAM + SSD upgrade",
        "thermal paste & cleaning",
        "benchmark before/after",
        "garansi komponen",
      ],
      cta: "minta estimasi",
      waMsg: "Halo GLK, saya mau rakit PC / upgrade komponen.",
      highlighted: false,
      priceColor: "var(--text-primary)",
      bgColor: "rgba(13,13,31,0.95)",
      borderColor: "rgba(179,136,255,0.2)",
      btnStyle: "outline-white",
    },
  ];

  return (
    <section id="harga" style={{ padding: "100px 0" }}>
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
          Estimasi Harga Servis
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            color: "var(--text-secondary)",
            marginBottom: 56,
          }}
        >
          Pilih paket yang sesuai dengan kebutuhan perangkat Anda.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            alignItems: "stretch",
          }}
          className="pricing-grid"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{
                border: `1px solid ${plan.borderColor}`,
                backgroundColor: plan.bgColor,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "var(--accent-cyan)",
                    padding: "4px 16px",
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "#0a0a14",
                    fontWeight: 700,
                    letterSpacing: 1,
                    whiteSpace: "nowrap",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--text-secondary)",
                  marginBottom: 8,
                  letterSpacing: 0.5,
                }}
              >
                {plan.tag}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 900,
                  fontSize: "clamp(36px, 4vw, 56px)",
                  color: plan.priceColor,
                  marginBottom: 4,
                  lineHeight: 1,
                }}
              >
                {plan.price}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--text-muted)",
                  marginBottom: 32,
                  letterSpacing: 0.5,
                }}
              >
                {plan.note}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 32px 0",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                {plan.features.map((feat, fi) => (
                  <li
                    key={fi}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--text-secondary)",
                      padding: "14px 0",
                      borderBottom: "1px solid rgba(179,136,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span style={{ color: "var(--accent-cyan)", fontSize: 14 }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(plan.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "16px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: 1,
                  textDecoration: "none",
                  transition: "all 0.2s",
                  ...(plan.btnStyle === "solid-cyan" && {
                    backgroundColor: "var(--accent-cyan)",
                    color: "#0a0a14",
                    border: "none",
                    fontWeight: 700,
                  }),
                  ...(plan.btnStyle === "outline-purple" && {
                    backgroundColor: "transparent",
                    color: "var(--text-primary)",
                    border: "1px solid rgba(179,136,255,0.4)",
                  }),
                  ...(plan.btnStyle === "outline-white" && {
                    backgroundColor: "transparent",
                    color: "var(--text-primary)",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }),
                }}
                onMouseEnter={(e) => {
                  if (plan.btnStyle === "solid-cyan") {
                    (e.currentTarget as HTMLElement).style.opacity = "0.85";
                  } else {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-cyan)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent-cyan)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.btnStyle === "solid-cyan") {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                  } else if (plan.btnStyle === "outline-purple") {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,136,255,0.4)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                  } else {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                  }
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--text-muted)",
            textAlign: "center",
            marginTop: 32,
            letterSpacing: 0.5,
          }}
        >
          // Harga final dikonfirmasi setelah diagnosis — tidak ada biaya tersembunyi
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};