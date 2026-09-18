import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WA_NUMBER = "6282115413366";

const links = [
  { label: "LAYANAN", id: "layanan" },
  { label: "CARA KERJA", id: "cara-kerja" },
  { label: "HARGA", id: "harga" },
  { label: "FAQ", id: "faq" },
];

export const MainNavigationSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);
  };

  return (
    <nav className="main-navigation" ref={navRef}>
      <div className="nav-container">
        <button
          type="button"
          className="nav-logo"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });

            setMenuOpen(false);
          }}
          aria-label="Kembali ke bagian atas halaman"
        >
          GLK<span>.</span>
        </button>

        <div className="desktop-nav-links">
          {links.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-whatsapp"
          >
            <span className="desktop-wa">
              WhatsApp Sekarang
            </span>

            <span className="mobile-wa">
              WhatsApp
            </span>
          </a>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={
              menuOpen
                ? "Tutup menu navigasi"
                : "Buka menu navigasi"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
          >
            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-navigation ${
          menuOpen ? "mobile-navigation-open" : ""
        }`}
      >
        <div className="mobile-navigation-inner">
          {links.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .main-navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;

          border-bottom:
            1px solid rgba(179,136,255,0.15);

          background:
            rgba(10,10,20,0.86);

          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .nav-container {
          max-width: 1280px;
          height: 64px;
          margin: 0 auto;
          padding: 0 24px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .nav-logo {
          appearance: none;
          border: 0;
          background: none;
          padding: 0;

          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 20px;
          letter-spacing: 2px;
          color: var(--text-primary);
          cursor: pointer;
        }

        .nav-logo span {
          color: var(--accent-cyan);
        }

        .desktop-nav-links {
          display: flex;
          align-items: center;
          gap: 38px;
        }

        .desktop-nav-links button,
        .mobile-navigation button {
          border: 0;
          background: none;
          cursor: pointer;

          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 2px;

          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .desktop-nav-links button:hover {
          color: var(--text-primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-whatsapp {
          min-height: 38px;
          padding: 0 18px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          border: 1px solid var(--accent-cyan);

          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 1.6px;

          color: var(--accent-cyan);
          text-decoration: none;
          white-space: nowrap;

          transition:
            background-color 0.2s ease,
            color 0.2s ease;
        }

        .nav-whatsapp:hover {
          background:
            rgba(64,196,255,0.08);
        }

        .mobile-menu-button {
          display: none;

          width: 40px;
          height: 40px;

          border:
            1px solid rgba(179,136,255,0.25);

          background: transparent;
          color: var(--text-primary);

          align-items: center;
          justify-content: center;

          cursor: pointer;
        }

        .mobile-wa {
          display: none;
        }

        .mobile-navigation {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 0 18px;
          }

          .desktop-nav-links {
            display: none;
          }

          .mobile-menu-button {
            display: flex;
          }

          .desktop-wa {
            display: none;
          }

          .mobile-wa {
            display: inline;
          }

          .nav-whatsapp {
            min-height: 40px;
            padding: 0 12px;
            font-size: 9px;
          }

          .mobile-navigation {
            display: grid;
            grid-template-rows: 0fr;

            max-width: 1280px;
            margin: 0 auto;

            overflow: hidden;

            transition: grid-template-rows 0.25s ease;
          }

          .mobile-navigation-open {
            grid-template-rows: 1fr;
          }

          .mobile-navigation-inner {
            min-height: 0;
            overflow: hidden;
            padding: 6px 18px 18px;
          }

          .mobile-navigation button {
            width: 100%;
            min-height: 46px;

            text-align: left;

            border-bottom:
              1px solid rgba(179,136,255,0.1);
          }
        }

        @media (max-width: 370px) {
          .nav-whatsapp {
            min-height: 36px;
            padding: 0 8px;
            font-size: 8px;
          }
        }
      `}</style>
    </nav>
  );
};