import SubNavbar from 'components/SubNavbar';
import upgradeDiamondNetherite from '../../assets/images/IronFurnaces/upgrade-diamond-to-netherite.png';
import upgradeGoldDiamond from '../../assets/images/IronFurnaces/upgrade-gold-to-diamond.png';
import upgradeIronGold from '../../assets/images/IronFurnaces/upgrade-iron-to-gold.png';
import upgradeStoneIron from '../../assets/images/IronFurnaces/upgrade-stone-to-iron.png';

const IronFurnaces = () => {
return (
    <div class="container">
      <SubNavbar />
      <div class="content">
        <p>Page concernant <a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/iron-furnaces/">Iron Furnaces</a></p>
        <p>Values:</p>
          <p>Normal Furnace: 1 item every 10 seconds</p>
          <p>Iron Furnace: 1 item every 7.5 seconds</p>
          <p>Gold Furnace: 1 item every 5 seconds</p>
          <p>Diamond Furnace: 1 item every 2.5 seconds</p>
          <p>Netherite Furnace: 1 item every 0.5 seconds</p>
          <img src={upgradeStoneIron} alt="upgrade stone to iron" />
          <img src={upgradeIronGold} alt="upgrade iron to gold" />
          <img src={upgradeGoldDiamond} alt="upgrade gold to diamond" />
        <img src={upgradeDiamondNetherite} alt="upgrade diamond to netherite" />
      </div>
    </div>
  )
};
export default IronFurnaces;
