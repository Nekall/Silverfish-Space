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
    </div>
  </div>
  )
};
export default BetterBeacons;
