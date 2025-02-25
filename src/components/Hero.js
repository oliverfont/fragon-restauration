import React from "react";
import "./Hero.css";
import logo2 from "../assets/logo/logo2.jpg";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Import des icônes

export function Hero() {
  return (
    <div className="hero">
      <div className="logos">
        <img className="logo2" src={logo2} alt="Logo" />
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
      </div>
      <div className="separator"></div>
    </div>
  );
}