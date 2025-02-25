import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { InfoSections } from "./components/InfoSections";
import { Gallery } from "./components/Gallery"; // Import du composant Gallery
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="pt-16">
        <section id="hero"><Hero /></section>
        <section id="gallery"><Gallery /></section> {/* Utilisation du composant Gallery */}
        <section id="info"><InfoSections /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}