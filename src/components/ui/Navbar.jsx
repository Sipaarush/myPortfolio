"use client";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">∿ PKS.dev</div>

      <div className="links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#research">Research</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="status">
        <span className="dot"></span>
        Available
      </div>
    </nav>
  );
}