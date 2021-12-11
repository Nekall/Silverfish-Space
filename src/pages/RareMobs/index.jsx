import SubNavbar from 'components/SubNavbar';
import link from '../../assets/images/link.svg';

const RareMobs = () => {
return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/rare-mobs-5186029/">Rare Mobs<img className="link" src={link} alt="lien" /></a></h2>
    </div>
  </div>
  )
};
export default RareMobs;
