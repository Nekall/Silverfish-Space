import SubNavbar from 'components/SubNavbar';
import baseBlocks from '../../assets/images/BetterBeacons/base-blocks-for-range.png';
import link from '../../assets/images/link.svg';

const BetterBeacons = () => {
return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/better-beacons-a-point-to-using-better-materials/">Better Beacons<img className="link" src={link} alt="lien" /></a></h2>
      <img src={baseBlocks} alt="base blocks for range" />
      <p>Vous avez toujours cherché l’utilité d’utiliser des matériaux différents comme base pour votre beacon pour que les effets soient les mêmes ? Ne cherchez plus, ce datapack est fait pour vous. La rareté du block utilisé comme base modifie maintenant la portée de votre beacon.
ps: Si vous utilisez un mix de différent block vous pouvez utiliser la commande /trigger radius_check au sommet de votre beacon pour voir sa portée effective.
      </p>
    </div>
  </div>
  )
};
export default BetterBeacons;
