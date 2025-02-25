import React from "react";
import "./InfoSections.css";
import restanquette from "../assets/galerie/375478118_842074017192247_2641068999419564747_n.jpg";
import BC from "../assets/galerie/462568963_568465922218166_1226470459481549078_n.jpg";
import renov from "../assets/galerie/462554007_559860509962456_8986377188663558214_n.jpg";
import facade from "../assets/galerie/406376042_1523384205064269_5474453599598797666_n.jpg";
import matiere from "../assets/galerie/330685320_736741191169502_1548214762379230386_n.jpg";

export function InfoSections() {
  return (
    <section id="info" className="info-section">
      <div className="info-container">
        {/* Colonne de gauche */}
        <div className="info-column">
          <h2 className="info-title">Artisane</h2>
          <h3 className="info-subtitle">Laura Segui</h3>
          <p className="info-text">
            D'abord diplômée d'une école d'arts appliqués à Montpellier, j'ai
            appris à maîtriser le dessin, la peinture analytique et les outils de
            précision. En entrant en formation en 2017 pour obtenir une
            qualification d'ouvrière, j'ai décidé d'apporter une dimension
            artistique à mon travail.
          </p>
          <p className="info-text">
            Afin de me nourrir d'expériences et de techniques, j'ai travaillé à
            travers la France dans de nombreuses régions.
          </p>
          <p className="info-text">
            Aujourd'hui installée en Périgord Limousin, j'aspire à développer mon
            activité localement.
          </p>
          <p className="info-text en">
            <em>First graduated from an artistic school in Montpellier,
            I learned to master drawing, analytical painting, and precision tools.
            Beginning training in 2017 to obtain a worker qualification, I decided
            to bring an artistic dimension to my work. In order to gain experience
            and techniques, I have worked around my country. Now based in Périgord
            Limousin, I aspire to grow my business locally.</em>
          </p>
          <img
            src={restanquette}
            alt="Confection d'une restanque en pierre sèche dans les Corbières en 2018"
            className="info-image"
          />
          <p className="info-caption">
            Confection d'une restanque en pierre sèche dans les Corbières en 2018
          </p>

          <h2 className="info-title">Matière</h2>
          <p className="info-text">
            Spécialisée dans les enduits, j'aime appréhender la matière sous
            plusieurs angles. Avec une préférence pour les matériaux nobles comme
            la chaux, la terre et le plâtre, je peux vous proposer une alternative
            écologique dans vos projets de construction et rénovation. Dans des cas
            plus spécifiques comme les salles de bain ou cuisines, il m'arrive
            d'appliquer des bétons cirés ou de poser des carrelages.
          </p>
          <p className="info-text en">
            <em>Specializing in coatings, I like to approach the
            material from many angles. With a preference for noble materials such
            as lime, clay, and plaster, I can offer you an ecological way in your
            new build and renovation projects. In more specific cases such as
            bathrooms or kitchens, sometimes I apply polished concrete or lay
            tiles.</em>
          </p>
          <img
            src={BC}
            alt="Détail de matière : les bétons cirés prêts à l'emploi de chez Mercadier"
            className="info-image"
          />
          <p className="info-caption">
            Détail de matière : les bétons cirés prêts à l'emploi de chez Mercadier
          </p>
        </div>

        {/* Colonne de droite */}
        <div className="info-column">
          <img
            src={renov}
            alt="Rénovation d'une chambre : enduit à la chaux"
            className="info-image"
          />
          <p className="info-caption">
            Rénovation d'une chambre : enduit à la chaux
          </p>

          <h2 className="info-title">Rénover</h2>
          <p className="info-text">
            Rénover, c'est tenter de décrypter l'histoire du bâti. Ensuite, afin
            d'apporter la meilleure réponse possible, encore une fois, le choix des
            matériaux est important. Mon objectif : permettre à mes clients
            d'habiter des maisons saines et harmonieuses, dans la mesure du
            possible dont les murs peuvent respirer.
          </p>
          <p className="info-text en">
            <em>Renovating is trying to decipher the history of the
            building. Then, to provide the best answer, once again, the
            choice of materials is important. My goal: to allow my clients to live
            in healthy and harmonious homes, where the walls can breathe as much as
            possible.</em>
          </p>

          <img
            src={facade}
            alt="Réfection d'une façade à la chaux en territoire Cévenol en chantier collectif"
            className="info-image"
          />
          <p className="info-caption">
            Réfection d'une façade à la chaux en territoire Cévenol en chantier
            collectif
          </p>

          <h2 className="info-title">Femmes*</h2>
          <p className="info-text">
            Aujourd'hui, 1,5% de femmes ouvrières dans le secteur du BTP. Mes
            collègues et moi œuvrons à ce que ces chiffres évoluent. Nous souhaitons
            que les femmes* de demain puissent être accueillies dignement. Femmes*
            et autres minorités de genre, bienvenue !
          </p>
          <p className="info-text en">
            <em>Today, 1.5% of women workers in the construction sector.
            My colleagues and I are working to change these figures. We hope that
            the women* of tomorrow can be welcomed with dignity. Women* and other
            gender minorities, welcome!</em>
          </p>

          <img
            src={matiere}
            alt="Détail de matière : terre crue talochée tout droit sortie de la carrière"
            className="info-image"
          />
          <p className="info-caption">
            Détail de matière : terre crue talochée tout droit sortie de la
            carrière
          </p>
        </div>
      </div>
    </section>
  );
}