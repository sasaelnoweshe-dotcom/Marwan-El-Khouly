import React, { useState } from "react";
import "./Nav.css";

const Nav = ({ links }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container">
        <button
          className="navbar-toggler bg-light"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-center${open ? " show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link text-white fw-semibold mx-3 my-2 px-3 py-1" href={link.href}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;