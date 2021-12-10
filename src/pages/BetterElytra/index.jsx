import SubNavbar from 'components/SubNavbar';
import diamondElytra from '../../assets/images/BetterElytra/diamond-elytra.png';
import netheriteElytra from '../../assets/images/BetterElytra/netherite-elytra.png';

const BetterElytra = () => {
return (
  <div class="container">
    <SubNavbar />
    <div class="content">
      <p>Page concernant <a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/new-and-improved-elytra/">Better Elytra</a></p>
      <img src={diamondElytra} alt="diamond elytra" />
      <img src={netheriteElytra} alt="netherite elytra" />
    </div>
  </div>
  )
};
export default BetterElytra;
