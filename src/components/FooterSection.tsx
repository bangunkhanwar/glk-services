const WA_NUMBER = "6282115413366";

export const FooterSection = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-purple-300/10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div
              className="text-xl font-black tracking-[2px] mb-3"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              GLK
              <span
                style={{
                  color: "var(--accent-cyan)",
                }}
              >
                .
              </span>
            </div>

            <p
              className="text-sm leading-6 max-w-sm"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              PC & Laptop Service, Remote IT Support,
              Home Visit, Rakit dan Upgrade PC.
            </p>
          </div>

          <div>
            <p
              className="text-[10px] tracking-[2px] mb-4"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
              }}
            >
              NAVIGASI
            </p>

            <div className="flex flex-col items-start gap-3">
              {[
                ["Layanan", "layanan"],
                ["Cara Kerja", "cara-kerja"],
                ["Harga", "harga"],
                ["FAQ", "faq"],
                ["Kontak", "kontak"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollTo(id)}
                  className="text-sm bg-transparent border-0 p-0 cursor-pointer hover:text-cyan-400 transition-colors"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p
              className="text-[10px] tracking-[2px] mb-4"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
              }}
            >
              HUBUNGI GLK
            </p>

            <p
              className="text-sm mb-4"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Home Visit: Bandung, Cimahi & sekitarnya
              <br />
              Remote: UltraViewer / TeamViewer
            </p>

            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center border border-cyan-400 px-4 text-xs tracking-wider no-underline hover:bg-cyan-400/10 transition-colors"
              style={{
                color: "var(--accent-cyan)",
                fontFamily: "var(--font-heading)",
              }}
            >
              WhatsApp GLK
            </a>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t border-white/5 text-[10px] tracking-wider"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          © {year} GLK Service. All rights reserved.
        </div>
      </div>
    </footer>
  );
};