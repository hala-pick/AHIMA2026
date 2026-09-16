import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "./Header.css";

const NAV_LINKS = [
  { href: "#features", label: "What's New" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__bar">
        <div className="container site-header__inner">
          <a href="#top" className="site-header__brand" onClick={handleNavClick}>
            <img src="/logo-full.svg" alt="ReviewMate" />
          </a>

          <nav className="site-header__nav site-header__nav--desktop" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#demo" className="btn btn-primary site-header__cta">
            Schedule a Demo
          </a>

          <button
            type="button"
            className="site-header__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`site-header__mobile ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#demo" className="btn btn-primary btn-block" onClick={handleNavClick}>
          Schedule a Demo
        </a>
      </div>
    </header>
  );
}
