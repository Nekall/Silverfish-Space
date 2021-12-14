import SubNavbar from 'components/SubNavbar';
import link from '../../assets/images/link.svg';
import advancements from '../../assets/images/BlazeandCavesAdvancements/advancements.png';
import advancementsPanel from '../../assets/images/BlazeandCavesAdvancements/advancements-panel.png';

const BlazeAndCavesAdvancements = () => {

return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/blazeandcave-s-advancements-pack-1-12/">BlazeAndCave's Advancements<img className="link" src={link} alt="lien" /></a></h2>
      <img src={advancements} alt="hauts faits" />
      <p>
        Vous manquez de challenge dans le ludiciel Minecraft ? Blaze and cave’s pack ajoute plus de 900 advancements afin d’endiabler vos aventures lors ce merveilleux périple.
      </p>
      <img src={advancementsPanel} alt="panneau des hauts faits" />
    </div>
  </div>
  )
};
export default BlazeAndCavesAdvancements;
