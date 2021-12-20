import SubNavbar from 'components/SubNavbar';
import link from '../../assets/images/link.svg';
import raremobs from '../../assets/images/RareMobs/raremobs.png';
import ImageGallery from 'react-image-gallery';

const RareMobs = () => {

  const images = [
    {
      original: 'https://silverfish.infesting.space/static/media/drowned.8f3294d9fc064699fe0a.webp',
      thumbnail: 'https://silverfish.infesting.space/static/media/drowned.8f3294d9fc064699fe0a.webp',
    },
    {
      original: 'https://silverfish.infesting.space/static/media/zombies.2470ff53709b4f866756.webp',
      thumbnail: 'https://silverfish.infesting.space/static/media/zombies.2470ff53709b4f866756.webp',
    },
    {
      original: 'https://silverfish.infesting.space/static/media/husk.a1881f646a64b6a93359.webp',
      thumbnail: 'https://silverfish.infesting.space/static/media/husk.a1881f646a64b6a93359.webp',
    },
    {
      original: 'https://silverfish.infesting.space/static/media/zombies.2470ff53709b4f866756.webp',
      thumbnail: 'https://silverfish.infesting.space/static/media/zombies.2470ff53709b4f866756.webp',
    },
    {
      original: 'https://silverfish.infesting.space/static/media/witherskeleton.aaa1f6e6212164566948.webp',
      thumbnail: 'https://silverfish.infesting.space/static/media/witherskeleton.aaa1f6e6212164566948.webp',
    },
    {
      original: 'https://silverfish.infesting.space/static/media/skeleton.8204fe89c2ca9c9c55b2.webp',
      thumbnail: 'https://silverfish.infesting.space/static/media/skeleton.8204fe89c2ca9c9c55b2.webp',
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
