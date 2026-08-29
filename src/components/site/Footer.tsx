import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/70">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center bg-accent font-display text-sm font-bold text-accent-foreground">
              NB
            </span>
            <span className="font-display text-base font-bold text-primary-foreground">
              Nexbridge Engineering
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Electrical and mechanical engineering solutions, industrial equipment sourcing and
            technical sales for industrial customers across Africa.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest text-primary-foreground">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/industries" className="hover:text-accent">Industries</Link></li>
            <li><Link to="/equipment-sourcing" className="hover:text-accent">Equipment &amp; Sourcing</Link></li>
            <li><Link to="/technical-sales" className="hover:text-accent">Technical Sales</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest text-primary-foreground">
            More
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-5 text-xs">
          © {new Date().getFullYear()} Nexbridge Engineering. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
