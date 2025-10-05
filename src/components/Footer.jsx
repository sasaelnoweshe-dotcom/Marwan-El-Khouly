import React from "react";
import "./Footer.css";

const links = [
  { title: "الرئيسية", href: "#main" },
  { title: "من انا", href: "#me" },
  { title: "اعمالي", href: "#works" },
  { title: "المطورين", href: "#devs" },
  { title: "تواصل معي", href: "#contact" }
];

const Footer = () => (
  <footer className="footer">
    <nav className="footer-nav">
      {links.map(link => (
        <a
        className="links"
          key={link.href}
          href={link.href}
        >
          {link.title}
        </a>
      ))}
    </nav>
    <div className="footer-copy">
      <span>جميع الحقوق محفوظة © مروان الخولي 2025</span>
      <span>تم تطوير هذا الموقع المطورين - م/مصطفى جنيدي - م/مصطفى طلعت </span>
    </div>
  </footer>
);

export default Footer;
