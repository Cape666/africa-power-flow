import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink text-sage">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span
              className="header-logo-preview"
              role="img"
              aria-label="Kilimanjaro Engineering"
              style={{ transform: "none" }}
            >
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
