import { useState } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { InfoSections } from "./components/InfoSections";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-white shadow-md p-4 flex justify-between fixed w-full top-0 z-50">
        <h1 className="text-xl font-bold">Fragon Restauration</h1>
        <div>
          <a className="mx-2" href="#hero">Accueil</a>
          <a className="mx-2" href="#about">À Propos</a>
          <a className="mx-2" href="#info">Informations</a>
          <a className="mx-2" href="#gallery">Galerie</a>
          <a className="mx-2" href="#contact">Contact</a>
        </div>
      </nav>
      <div className="pt-16">
        <section id="hero"><Hero /></section>
        <section id="gallery"><Gallery /></section>
        <section id="about"><About /></section>
        <section id="info"><InfoSections /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}
