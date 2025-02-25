import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Import des icônes
import "./Contact.css"; // Fichier CSS pour la section Contact

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-text">
          Pour une demande de devis, merci de me contacter par mail.
        </p>
        <a href="mailto:segui_laura@yahoo.fr" className="contact-email">
          segui_laura@yahoo.fr
        </a>
        <p className="contact-text">
          Et pour plus d'images, rendez-vous sur les réseaux.
        </p>
        <div className="social-links">
          <a
            href="https://www.facebook.com/people/Fragon-Restauration/100089927876879/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Facebook"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/__fragon_restauration/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <FaInstagram className="social-icon" />
          </a>
        </div>
        <p className="contact-text">Merci de votre visite.</p>
        <p className="contact-text">A bientôt</p>
        <p className="footer-text">
          © 2025 Fragon Restauration.
        </p>
      </div>
    </section>
  );
}