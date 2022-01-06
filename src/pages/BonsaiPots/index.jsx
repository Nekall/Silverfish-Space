import SubNavbar from 'components/SubNavbar';
import acaciaBonsaiPot from '../../assets/images/BonsaiPots/acacia-bonsai-pot.png';
import azaleaBonsaiPot from '../../assets/images/BonsaiPots/azalea-bonsai-pot.png';
import bambooBonsaiPot from '../../assets/images/BonsaiPots/bamboo-bonsai-pot.png';
import birchBonsaiPot from '../../assets/images/BonsaiPots/birch-bonsai-pot.png';
import brownMushroomBonsaiPot from '../../assets/images/BonsaiPots/brown-mushroom-bonsai-pot.png';
import cactusBonsaiPot from '../../assets/images/BonsaiPots/cactus-bonsai-pot.png';
import crimsonFungusPot from '../../assets/images/BonsaiPots/crimson-fungus-pot.png';
import darkOakBonsaiPot from '../../assets/images/BonsaiPots/dark-oak-bonsai-pot.png';
import deadBushBonsaiPot from '../../assets/images/BonsaiPots/dead-bush-bonsai-pot.png';
import jungleBonsaiPot from '../../assets/images/BonsaiPots/jungle-bonsai-pot.png';
import oakBonsaiPot from '../../assets/images/BonsaiPots/oak-bonsai-pot.png';
import redMushroomBonsaiPot from '../../assets/images/BonsaiPots/red-mushroom-bonsai-pot.png';
import spruceBonsaiPot from '../../assets/images/BonsaiPots/spruce-bonsai-pot.png';
import warpedFungusPot from '../../assets/images/BonsaiPots/warped-fungus-pot.png';
import bonsaipot from '../../assets/images/BonsaiPots/bonsaipot.png';
import link from '../../assets/images/link.svg';


const BonsaiPots = () => {
return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/bonsai-pots-for-1-17-and-above/">Bonsai Pots<img className="link" src={link} alt="lien" /></a></h2>
      <img src={bonsaipot} className="dp-img" alt="bonsai pot" />
      <p>Amoureux du moddé avec l’envie de procrastiner, Bonsaï pots ajoute des fermes à bois automatiques qui t'éviteront de passer 6h à ramasser du bois, il suffit simplement de crafter ce pot mystérieux, de le poser sur un coffre et laisser la magie opérer.</p>
      <img src={acaciaBonsaiPot} alt="acacia Bonsai Pot" />
      <img src={azaleaBonsaiPot} alt="azalea Bonsai Pot" />
      <img src={bambooBonsaiPot} alt="bamboo Bonsai Pot" />
      <img src={birchBonsaiPot} alt="birch Bonsai Pot" />
      <img src={brownMushroomBonsaiPot} alt="brown Mushroom Bonsai Pot" />
      <img src={cactusBonsaiPot} alt="cactus Bonsai Pot" />
      <img src={darkOakBonsaiPot} alt="dark Oak Bonsai Pot" />
      <img src={deadBushBonsaiPot} alt="dead Bush Bonsai Pot" />
      <img src={jungleBonsaiPot} alt="jungle Bonsai Pot" />
      <img src={oakBonsaiPot} alt="oakBonsaiPot" />
      <img src={redMushroomBonsaiPot} alt="redMushroomBonsaiPot" />
      <img src={spruceBonsaiPot} alt="spruceBonsaiPot" />
      <img src={warpedFungusPot} alt="warpedFungusPot" />
      <img src={crimsonFungusPot} alt="crimson Fungus Pot" />
    </div>
  </div>
  )
};
export default BonsaiPots;
