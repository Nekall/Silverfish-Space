import SubNavbar from 'components/SubNavbar';
import link from '../../assets/images/link.svg';

const RareMobs = () => {
return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/rare-mobs-5186029/">Rare Mobs<img className="link" src={link} alt="lien" /></a></h2>
      <p>Rare mobs ajoute une variance aux monstres présents de base dans le jeu. Toutes les 30 secondes un monstre aléatoire apparaît dans un rayon de 64 blocs autour d’un joueur. Alors à vos épées, aventurier·ère, un dur combat vous attend !</p>
    </div>
  </div>
  )
};
export default RareMobs;
