const WA_NUMBER = "6282115413366";

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
      btnStyle: "outline-purple",
    },
    {
      tag: "servis",
      price: "Rp50.000+",
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
      btnStyle: "solid-cyan",
    },
    {
      tag: "rakit bundle / upgrade",
      price: "Rp150.000+",
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
      btnStyle: "outline-white",
    },
  ];

  return (
    <section id="harga" className="py-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2
          className="font-black mb-3"
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            color: "var(--text-primary)",
            fontFamily: "var(--font-heading)",
          }}
        >
          Estimasi Harga Servis
        </h2>

        <p
          className="text-sm mb-14"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          Pilih paket yang sesuai dengan kebutuhan perangkat Anda.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col p-8 rounded-2xl overflow-hidden
                border transition-all duration-300
                ${
                  plan.highlighted
                    ? "lg:scale-105 border-cyan-400 shadow-cyan-400/20"
                    : "border-white/10 hover:border-cyan-400/40"
                }
              `}
              style={{
                background:
                  "linear-gradient(180deg, rgba(13,13,31,0.95), rgba(13,13,31,0.85))",
              }}
            >

              {/* Badge */}
             {plan.badge && (
              <div className="mb-4 flex justify-center">
                <div className="relative">
                  
                  {/* Glow */}
                  <div className="absolute inset-0 bg-cyan-400/30 blur-md rounded-full"></div>

                  {/* Badge */}
                  <div className="
                    relative px-4 py-1 text-[10px] font-bold tracking-[1.5px]
                    rounded-full whitespace-nowrap
                    bg-gradient-to-r from-cyan-400 to-cyan-300
                    text-[#0a0a14] shadow-md
                  ">
                    {plan.badge}
                  </div>

                </div>
              </div>
            )}

              {/* Tag */}
              <p
                className="text-xs mb-2 tracking-wider"
                style={{
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {plan.tag}
              </p>

              {/* Price */}
              <h3
                className="font-black leading-[1.15] mb-1"
                style={{
                  fontSize: "clamp(28px, 3.2vw, 44px)",
                  color: plan.priceColor,
                  textShadow: plan.highlighted
                    ? "0 0 20px rgba(34,211,238,0.4)"
                    : "none",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {plan.price}
              </h3>

              {/* Note */}
              <p
                className="text-[11px] mb-8 tracking-wider"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {plan.note}
              </p>

              {/* Features */}
              <ul className="flex flex-col flex-1 mb-8">
                {plan.features.map((feat, fi) => (
                  <li
                    key={fi}
                    className="flex items-center gap-3 py-3 text-xs text-gray-300 border-b border-white/5 hover:border-cyan-400/30 transition"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span className="text-cyan-400 text-sm">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                  plan.waMsg
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  relative text-center py-4 text-xs tracking-wider font-semibold
                  transition-all duration-300 overflow-hidden rounded-lg
                  ${
                    plan.btnStyle === "solid-cyan"
                      ? "bg-cyan-400 text-[#0a0a14] hover:shadow-lg hover:shadow-cyan-400/40"
                      : "border border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400"
                  }
                `}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span className="relative z-10">{plan.cta}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          className="text-[11px] text-center mt-10 tracking-wider"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          // Harga final dikonfirmasi setelah diagnosis — tidak ada biaya tersembunyi
        </p>
      </div>
    </section>
  );
};