import React, { useState } from "react";
import "./Gallery.css";

// Importer dynamiquement toutes les images du dossier galerie
const importAll = (context) => context.keys().map(context);
const images = importAll(require.context("../assets/galerie", false, /\.(png|jpe?g|svg)$/));

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextImage = () => {
    if (isAnimating) return; // Empêcher les clics multiples pendant l'animation
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);
    }, 500); // Durée de l'animation (500ms)
  };

  const prevImage = () => {
    if (isAnimating) return; // Empêcher les clics multiples pendant l'animation
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500); // Durée de l'animation (500ms)
  };

  // Calcul des index pour les images précédentes et suivantes
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className="gallery-container">
      <div className="carousel">
        <button onClick={prevImage} className="carousel-button prev">
          &lt;
        </button>

        <div className="carousel-inner">
          {/* Image précédente */}
          <img
            src={images[prevIndex]}
            alt={`Galerie ${prevIndex + 1}`}
            className="carousel-image prev-image"
          />

          {/* Image actuelle */}
          <img
            src={images[currentIndex]}
            alt={`Galerie ${currentIndex + 1}`}
            className="carousel-image current-image"
          />

          {/* Image suivante */}
          <img
            src={images[nextIndex]}
            alt={`Galerie ${nextIndex + 1}`}
            className="carousel-image next-image"
          />
        </div>

        <button onClick={nextImage} className="carousel-button next">
          &gt;
        </button>
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
