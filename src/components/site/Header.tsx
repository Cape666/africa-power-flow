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
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center bg-accent font-display text-sm font-bold text-accent-foreground">
            NB
          </span>
          <span className="font-display text-base font-bold tracking-tight text-primary-foreground">
            Nexbridge Engineering
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
          className="lg:hidden"
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
