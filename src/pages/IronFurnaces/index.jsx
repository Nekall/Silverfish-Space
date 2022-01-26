import SubNavbar from "components/SubNavbar";
import upgradeDiamondNetherite from "../../assets/images/IronFurnaces/upgrade-diamond-to-netherite.png";
import upgradeGoldDiamond from "../../assets/images/IronFurnaces/upgrade-gold-to-diamond.png";
import upgradeIronGold from "../../assets/images/IronFurnaces/upgrade-iron-to-gold.png";
import upgradeStoneIron from "../../assets/images/IronFurnaces/upgrade-stone-to-iron.png";
import link from "../../assets/images/link.svg";
import ironfurnace from "../../assets/images/IronFurnaces/ironfurnace.png";

const IronFurnaces = () => (
    <div className="container">
      <SubNavbar />
      <div className="content">
        <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/iron-furnaces/">Iron Furnaces<img className="link" src={link} alt="lien" /></a></h2>
        <img className="dp-img" src={ironfurnace} alt="iron furnace" />
        <p>
          IronFurnace ajoute 4 nouveaux types de fours.
          Plusieurs niveaux d'amélioration entre Fer, Or, Diamant et enfin Netherite pour une vitesse supplémentaire.
        </p>
        <h3>Utilisation :</h3>
        <p>Il suffit de crafter l'upgrade et de faire un sneak + clique droit sur un four du niveau précédent.</p>
        <p>―</p>
        <p>Four Classique: 1 item en 10 secondes.</p>
        <img src={upgradeStoneIron} alt="upgrade stone to iron" />
        <p>Four en Fer: 1 item en 7.5 secondes.</p>
        <img src={upgradeIronGold} alt="upgrade iron to gold" />
        <p>Four en Or: 1 item en 5 secondes.</p>
        <img src={upgradeGoldDiamond} alt="upgrade gold to diamond" />
        <p>Four en diamant: 1 item en 2.5 secondes.</p>
        <img src={upgradeDiamondNetherite} alt="upgrade diamond to netherite" />
        <p>Four en Netherite: 1 item en 0.5 secondes.</p>
      </div>
    </div>
  );
export default IronFurnaces;
