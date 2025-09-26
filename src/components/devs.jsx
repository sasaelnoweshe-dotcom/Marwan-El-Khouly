import React from "react";
import "./devs.css";
import talaat from "../assets/photos/Talaat.jpg";
import genedy from "../assets/photos/Genedy.jpg";
import { faFacebookF, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const devsData = [
  {
    name: "مصطفى طلعت",
    img: talaat,
    role: "Frontend (React)  ",
    socials: [
      { icon: faFacebookF, link: "https://www.facebook.com/mstfy.ahmd.tl.t.2025?rdid=yGhdjCae1ZqSWQLn&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19toGvrQBk%2F" },
      { icon: faInstagram, link: "https://www.instagram.com/mustafa_.ahmed8/" },
      { icon: faLinkedin, link: "https://www.linkedin.com/in/%D9%85%D8%B5%D8%B7%D9%81%D9%89-%D8%A7%D8%AD%D9%85%D8%AF-%D8%B7%D9%84%D8%B9%D8%AA-57a09b2a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    ],
  },
  {
    name: "مصطفى جنيدي",
    img: genedy,
    role: "Frontend (React) & GD",
    socials: [
      { icon: faFacebookF, link: "https://www.facebook.com/MG.SHEYO" },
      { icon: faInstagram, link: "https://www.instagram.com/soy_sheryo/" },
      { icon: faLinkedin, link: "https://www.linkedin.com/in/mostafa-el-nowishi-17a1962a4/" },
    ],
  },
];

const Devs = () => {
  return (
    <section className="devs-section py-5 " id="devs">
      <h2 className="text-center mb-4 fw-bold text-dark">المطورين</h2>
      <div className="devs-row-small d-flex align-items-center justify-content-center gap-4 flex-wrap">
        {devsData.map((dev, idx) => (
          <div className="dev-mini-card text-center p-5" key={idx}>
            <img src={dev.img} alt={dev.name} className="dev-mini-img mb-2" />
            <h6 className="mb-1 text-dark fw-bold">{dev.name}</h6>
            <span className="dev-role">{dev.role}</span>
            <div className="dev-socials mt-2 d-flex justify-content-center gap-2">
              {dev.socials.map((soc, i) => (
                <a
                  key={i}
                  href={soc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dev-social-link"
                >
                  <FontAwesomeIcon icon={soc.icon} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Devs;