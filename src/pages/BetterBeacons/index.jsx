import SubNavbar from 'components/SubNavbar';
import baseBlocks from '../../assets/images/BetterBeacons/base-blocks-for-range.png';

const BetterBeacons = () => {
return (
  <div class="container">
    <SubNavbar />
    <div class="content">
      <p>Page concernant <a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/better-beacons-a-point-to-using-better-materials/">Better Beacons</a></p>
      <img src={baseBlocks} alt="base blocks for range" />
    </div>
  </div>
  )
};
export default BetterBeacons;
