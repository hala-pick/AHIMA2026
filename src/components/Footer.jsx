import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <img src="/logo-full-white.svg" alt="ReviewMate" className="site-footer__logo" />

        <nav className="site-footer__links" aria-label="Footer">
          <a href="#features">What's New</a>
          <a href="#demo">Schedule a Demo</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="site-footer__copy">
          &copy; {new Date().getFullYear()} Pickerson Solutions. ReviewMate is a
          trademark of Pickerson Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
