import React from "react";
import "./Footer.css";

const links = [
  { title: "الرئيسية", href: "main" },
  { title: "من انا", href: "#me" },
  { title: "اعمالي", href: "#works" },
  { title: "المطورين", href: "#devs" },
  { title: "تواصل معي", href: "#contact" }
];

const Footer = () => (
  <footer style={{
    background: "#23243a",
    color: "#ffd700",
    padding: "2em 0 1em 0",
    textAlign: "center",
    marginTop: "2em",
    borderTop: "2px solid #ffd700"
  }}>
    <nav style={{ marginBottom: "1em" }}>
      {links.map(link => (
        <a
          key={link.href}
          href={link.href}
          style={{
            margin: "0 1em",
            color: "#ffd700",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "1.1em",
            transition: "color 0.3s"
          }}
        >
          {link.title}
        </a>
      ))}
    </nav>
    <div style={{ marginBottom: "1em", color: "#f5f5f5", fontSize: "0.95em" , width:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", }}>
      <span>جميع الحقوق محفوظة © مروان الخولي 2025</span>
      <span>تم تطوير هذا الموقع المطورين - م/مصطفى جنيدي - م/مصطفى طلعت </span>
    </div>
  </footer>
);

export default Footer;