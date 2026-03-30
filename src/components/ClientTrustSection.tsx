export const ClientTrustSection = () => {
  const stats = [
    { value: "50+", label: "Pelanggan Puas" },
    { value: "<30M", label: "Waktu Respon" },
    { value: "100%", label: "Garansi" },
    { value: "20+", label: "Home Visit Remote" },
  ];

  return (
    <section className="border-y border-purple-300/15 bg-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`
              flex items-center justify-center gap-3 py-8 px-4
              
              border-purple-300/10
              
              ${index % 2 === 0 ? "border-r" : ""}
              ${index < 2 ? "border-b" : ""}
              
              md:border-b-0
              md:border-r
              md:last:border-r-0
            `}
          >
            {/* VALUE */}
            <span
              className="font-black text-[26px] md:text-[28px]"
              style={{
                fontFamily: "var(--font-heading)",
                background:
                  "linear-gradient(135deg, var(--accent-purple), var(--accent-cyan))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {item.value}
            </span>

            {/* LABEL */}
            <span
              className="text-[11px] leading-[1.4] tracking-[0.5px] w-20"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-secondary)",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};