import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink text-sage">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center bg-accent font-display text-sm font-bold text-accent-foreground">
              NB
            </span>
            <span className="font-display text-base font-bold text-primary-foreground">
              Kilimanjaro Engineering
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Electrical, mechanical and industrial equipment sourcing and technical sales for
            industrial customers across Africa.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest text-primary-foreground">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="text-soft hover:text-primary-foreground">Services</Link></li>
            <li><Link to="/industries" className="text-soft hover:text-primary-foreground">Industries</Link></li>
            <li><Link to="/equipment-sourcing" className="text-soft hover:text-primary-foreground">Equipment &amp; Sourcing</Link></li>
            <li><Link to="/technical-sales" className="text-soft hover:text-primary-foreground">Technical Sales</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest text-primary-foreground">
            More
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="text-soft hover:text-primary-foreground">About</Link></li>
            <li><Link to="/blog" className="text-soft hover:text-primary-foreground">Blog</Link></li>
            <li><Link to="/contact" className="text-soft hover:text-primary-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-5 text-xs text-sage">
          © {new Date().getFullYear()} Kilimanjaro Engineering. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
