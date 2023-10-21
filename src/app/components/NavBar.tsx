"use client";

import "./NavBar.css";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  let [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        Vici Online
      </Link>
      <a className="nav-toggle" onClick={handleNavToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <ul className={`nav-links ${navOpen && "active"}`}>
        <li>
          <Link href="/download" className="nav-link download">
            Download
          </Link>
        </li>
        <li>
          <Link href="/forums" className="nav-link forums">
            Forums
          </Link>
        </li>
        <li>
          <Link href="/help" className="nav-link help">
            Help
          </Link>
        </li>
        <li>
          <Link href="/docs" className="nav-link docs">
            Documentation
          </Link>
        </li>
      </ul>
    </nav>
  );
}
