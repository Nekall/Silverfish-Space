import SubNavbar from 'components/SubNavbar';
import link from '../../assets/images/link.svg';
import raremobs from '../../assets/images/RareMobs/raremobs.png';
import drowned from '../../assets/images/RareMobs/drowned.webp';
import husk from '../../assets/images/RareMobs/husk.webp';
import skeleton from '../../assets/images/RareMobs/skeleton.webp';
import witherskeleton from '../../assets/images/RareMobs/witherskeleton.webp';
import zombies from '../../assets/images/RareMobs/zombies.webp';

const RareMobs = () => {
return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/rare-mobs-5186029/">Rare Mobs<img className="link" src={link} alt="lien" /></a></h2>
      <img className="raremobs-img" src={raremobs} alt="raremobs" />
      <p>Rare mobs ajoute une variance aux monstres présents de base dans le jeu. Toutes les 30 secondes un monstre aléatoire apparaît dans un rayon de 64 blocs autour d’un joueur. Alors à vos épées, aventurier·ère, un dur combat vous attend !</p>
      <img src={drowned} alt="drowned" />
      <img src={husk} alt="husk" />
      <img src={skeleton} alt="skeleton" />
      <img src={witherskeleton} alt="witherskeleton" />
      <img src={zombies} alt="zombies" />
    </div>
  </div>
  )
};
export default RareMobs;
