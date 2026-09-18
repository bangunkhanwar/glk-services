export const ClientTrustSection = () => {
  const stats = [
    {
      value: "REMOTE",
      label: "UltraViewer / TeamViewer",
    },
    {
      value: "ONSITE",
      label: "Bandung, Cimahi & Sekitarnya",
    },
    {
      value: "HW + SW",
      label: "Hardware & Software",
    },
    {
      value: "<30 MENIT",
      label: "Target Respon Chat",
    },
  ];

  return (
    <section className="border-y border-purple-300/15 bg-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`
              flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 py-8 px-4
              text-center md:text-left
              
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
              className="font-black text-[18px] md:text-[21px]"
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
              className="text-[11px] leading-[1.4] tracking-[0.5px] text-center max-w-[140px]"
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