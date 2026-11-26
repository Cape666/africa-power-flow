import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/equipment-sourcing", label: "Equipment & Sourcing" },
  { to: "/technical-sales", label: "Technical Sales" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600&display=swap");

        .header-logo-preview {
          display: inline-grid;
          grid-template-columns: 1fr 48px 1fr;
          align-items: center;
          column-gap: 16px;
          width: 246px;
          height: 48px;
          color: #dbc287;
          font-family: "Barlow Condensed", sans-serif;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 2px;
          white-space: nowrap;
          transform: translateX(clamp(-18px, calc(100vw - 368px), 0px));
        }

        .header-logo-preview__word:first-child {
          justify-self: end;
        }

        .header-logo-preview__symbol {
          display: block;
          width: 48px;
          height: auto;
          fill: currentColor;
        }
      `}</style>
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="header-logo-preview" role="img" aria-label="Kilimanjaro Engineering">
            <span className="header-logo-preview__word">KILIMANJARO</span>
            <svg
              className="header-logo-preview__symbol"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="819 37 405 330"
              aria-hidden="true"
            >
              <polygon points="827.95 143.07 959.99 367.16 968.17 216.42 827.95 143.07" />
              <polygon points="976.67 220.19 968.17 363.79 1145.34 235.56 976.67 220.19" />
              <polygon points="1215.32 209.67 1152.22 237.99 1001.76 346.39 1215.32 209.67" />
              <polygon points="843.59 137.07 958.47 99.85 968.17 207.04 843.59 137.07" />
              <polygon points="853.7 125.14 920.24 63.25 957.05 91.36 853.7 125.14" />
              <polygon points="819.72 89.14 827.95 137.4 901.03 68.51 819.72 89.14" />
              <polygon points="965.48 94.19 975.3 203.44 1056.76 119.61 965.48 94.19" />
              <polygon points="1063.09 125.14 980.31 209.67 1150.73 226.66 1063.09 125.14" />
              <polygon points="1072.8 122.03 1145.34 207.04 1137.52 117.72 1072.8 122.03" />
              <polygon points="1146.42 129.04 1156.67 226.66 1223.81 192.69 1146.42 129.04" />
              <polygon points="1152.08 96.15 1143.99 115.02 1213.84 172.19 1152.08 96.15" />
              <polygon points="851.41 71.07 923.68 55.16 940.06 37.19 851.41 71.07" />
              <polygon points="947.68 38.71 929.07 57.85 962.78 83.74 1056.76 110.44 1134.56 110.44 1142.91 89.67 1091.68 59.47 1018.6 42.21 947.68 38.71" />
            </svg>
            <span className="header-logo-preview__word">ENGINEERING</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="border-b-2 border-transparent py-1 text-sm font-medium text-soft transition-colors hover:border-soft/50"
              activeProps={{ className: "!border-accent" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-gold px-4 py-2 font-display text-xs font-bold uppercase tracking-widest "
          >
            Request a Quote
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="ml-1 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-primary-foreground/10 lg:hidden">
          <div className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-l-2 border-transparent py-2.5 pl-3 text-sm font-medium text-soft"
                activeProps={{ className: "!border-accent" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 btn-gold px-4 py-2.5 text-center font-display text-xs font-bold uppercase tracking-widest"
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
