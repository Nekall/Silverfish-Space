import SubNavbar from 'components/SubNavbar';
import link from '../../assets/images/link.svg';

const BlazeAndCavesAdvancements = () => {

return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/blazeandcave-s-advancements-pack-1-12/">BlazeAndCave's Advancements<img className="link" src={link} alt="lien" /></a></h2>
    </div>
  </div>
  )
};
export default BlazeAndCavesAdvancements;
