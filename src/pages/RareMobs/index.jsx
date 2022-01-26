import SubNavbar from "components/SubNavbar";
import link from "../../assets/images/link.svg";
import raremobs from "../../assets/images/RareMobs/raremobs.png";
import ImageGallery from "react-image-gallery";

const RareMobs = () => {

  const images = [
    {
      original: 'https://raw.githubusercontent.com/Nekall/Silverfish-Space/main/src/assets/images/RareMobs/drowned.webp',
      thumbnail: 'https://raw.githubusercontent.com/Nekall/Silverfish-Space/main/src/assets/images/RareMobs/drowned.webp',
    },
    {
      original: 'https://raw.githubusercontent.com/Nekall/Silverfish-Space/main/src/assets/images/RareMobs/husk.webp',
      thumbnail: 'https://raw.githubusercontent.com/Nekall/Silverfish-Space/main/src/assets/images/RareMobs/husk.webp',
    },
    {
      original: 'https://raw.githubusercontent.com/Nekall/Silverfish-Space/main/src/assets/images/RareMobs/skeleton.webp',
      thumbnail: 'https://raw.githubusercontent.com/Nekall/Silverfish-Space/main/src/assets/images/RareMobs/skeleton.webp',
    },
    {
      original: 'https://raw.githubusercontent.com/Nekall/Silverfish-Space/main/src/assets/images/RareMobs/witherskeleton.webp',
      thumbnail: 'https://raw.githubusercontent.com/Nekall/Silverfish-Space/main/src/assets/images/RareMobs/witherskeleton.webp',
    },
    {
      original: 'https://raw.githubusercontent.com/Nekall/Silverfish-Space/main/src/assets/images/RareMobs/zombies.webp',
      thumbnail: 'https://raw.githubusercontent.com/Nekall/Silverfish-Space/main/src/assets/images/RareMobs/zombies.webp',
    },
  ];

return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/rare-mobs-5186029/">Rare Mobs<img className="link" src={link} alt="lien" /></a></h2>
      <img className="dp-img" src={raremobs} alt="raremobs" />
      <p>Rare mobs ajoute une variance aux monstres présents de base dans le jeu. Toutes les 30 secondes un monstre aléatoire apparaît dans un rayon de 64 blocs autour d’un joueur. Alors à vos épées, aventurier·ère, un dur combat vous attend !</p>
      <ImageGallery items={images} />
    </div>
  </div>
  )
};
export default RareMobs;
