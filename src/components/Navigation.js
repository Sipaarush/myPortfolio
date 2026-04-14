// src/components/Navigation.js
export default function Navigation() {
  return (
    <nav>
      
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#research">Research</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-status">
        <div className="nav-dot" />
        Available
      </div>
    </nav>
  );
}
