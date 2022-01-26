import SubNavbar from "components/SubNavbar";
import link from "../../assets/images/link.svg";
import advancements from "../../assets/images/BlazeandCavesAdvancements/advancements.png";
import advancementsPanel from "../../assets/images/BlazeandCavesAdvancements/advancements-panel.png";

const BlazeAndCavesAdvancements = () => (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/blazeandcave-s-advancements-pack-1-12/">BlazeAndCave's Advancements<img className="link" src={link} alt="lien" /></a></h2>
      <img className="dp-img" src={advancements} alt="hauts faits" />
      <p>
        Tu manques de challenge dans le ludiciel Minecraft ? Blaze and cave’s pack ajoute plus de 900 advancements afin d’endiabler ton aventure lors ce merveilleux périple.
      </p>
      <img className="dp-img" src={advancementsPanel} alt="panneau des hauts faits" />
    </div>
  </div>
  );
export default BlazeAndCavesAdvancements;
