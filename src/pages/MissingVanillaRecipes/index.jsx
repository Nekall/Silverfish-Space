import SubNavbar from 'components/SubNavbar';
import amethyst from '../../assets/images/MissingVanillaRecipes/amethyst.png';
import brick from '../../assets/images/MissingVanillaRecipes/brick.png';
import brownBushroomBlock from '../../assets/images/MissingVanillaRecipes/brown-mushroom-block.png';
import brownMushroom from '../../assets/images/MissingVanillaRecipes/brown-mushroom.png';
import clay from '../../assets/images/MissingVanillaRecipes/clay.png';
import cobweb from '../../assets/images/MissingVanillaRecipes/cobweb.png';
import glowstone from '../../assets/images/MissingVanillaRecipes/glowstone.png';
import honeycomb from '../../assets/images/MissingVanillaRecipes/honeycomb.png';
import leather from '../../assets/images/MissingVanillaRecipes/leather.png';
import logChest from '../../assets/images/MissingVanillaRecipes/log-chest.png';
import logStick from '../../assets/images/MissingVanillaRecipes/log-stick.png';
import melonSlice from '../../assets/images/MissingVanillaRecipes/melon-slice.png';
import mushroomStemBrown from '../../assets/images/MissingVanillaRecipes/mushroom-stem-brown.png';
import mushroomStemRed from '../../assets/images/MissingVanillaRecipes/mushroom-stem-red.png';
import mushroomStem from '../../assets/images/MissingVanillaRecipes/mushroom-stem.png';
import netherBrick from '../../assets/images/MissingVanillaRecipes/nether-brick.png';
import netherWart from '../../assets/images/MissingVanillaRecipes/nether-wart.png';
import paper from '../../assets/images/MissingVanillaRecipes/paper.png';
import prismarine from '../../assets/images/MissingVanillaRecipes/prismarine.png';
import quartz from '../../assets/images/MissingVanillaRecipes/quartz.png';
import rawCopper from '../../assets/images/MissingVanillaRecipes/raw-copper.png';
import rawGold from '../../assets/images/MissingVanillaRecipes/raw-gold.png';
import rawIron from '../../assets/images/MissingVanillaRecipes/raw-iron.png';
import redMushroomBlock from '../../assets/images/MissingVanillaRecipes/red-mushroom-block.png';
import redMushroom from '../../assets/images/MissingVanillaRecipes/red-mushroom.png';
import redSandstone from '../../assets/images/MissingVanillaRecipes/red-sandstone.png';
import resetGlassPane from '../../assets/images/MissingVanillaRecipes/reset-glass-pane.png';
import resetGlass from '../../assets/images/MissingVanillaRecipes/reset-glass.png';
import resetTerracotta from '../../assets/images/MissingVanillaRecipes/reset-terracotta.png';
import resetWool from '../../assets/images/MissingVanillaRecipes/reset-wool.png';
import saddleToLeather from '../../assets/images/MissingVanillaRecipes/saddle-to-leather.png';
import saddle from '../../assets/images/MissingVanillaRecipes/saddle.png';
import sandstone from '../../assets/images/MissingVanillaRecipes/sandstone.png';
import simpleDispenser from '../../assets/images/MissingVanillaRecipes/simple-dispenser.png';
import simpleRepeater from '../../assets/images/MissingVanillaRecipes/simple-repeater.png';
import string from '../../assets/images/MissingVanillaRecipes/string.png';

import blackDye from '../../assets/images/MissingVanillaRecipes/black-dye.png';
import copperBlock from '../../assets/images/MissingVanillaRecipes/copper-block.png';
import ice from '../../assets/images/MissingVanillaRecipes/ice.png';
import packedIce from '../../assets/images/MissingVanillaRecipes/packed-ice.png';
import redDye from '../../assets/images/MissingVanillaRecipes/red-dye.png';
import rootedDirt from '../../assets/images/MissingVanillaRecipes/rooted-dirt.png';
import slabToBlock from '../../assets/images/MissingVanillaRecipes/slab-to-block.gif';
import stickyPiston from '../../assets/images/MissingVanillaRecipes/sticky-piston.png';
import yellowDye from '../../assets/images/MissingVanillaRecipes/yellow-dye.png';
import lead from '../../assets/images/MissingVanillaRecipes/lead.png';


const MissionVanillaRecipes = () => {
return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2>Missing Vanilla Recipes (fait par Sacha ♥)</h2>
      <p>Minecraft n’est pas logique, on y remédie.</p>
      <p>39 nouvelles recettes INÉDITES logiques et comme dirait un vieux sage “ Ça devrait être dans le jeu de base ”.</p>
      <hr/>
      <p className="title-news bold">Nouveaux crafts !</p>
      <img src={slabToBlock} alt="slab to block" />
      <img src={ice} alt="ice" />
      <img src={packedIce} alt="packed ice" />
      <img src={copperBlock} alt="copper block" />
      <img src={rootedDirt} alt="rooted dirt" />
      <img src={stickyPiston} alt="sticky piston" />
      <img src={blackDye} alt="black dye" />
      <img src={redDye} alt="red dye" />
      <img src={yellowDye} alt="yellow dye" />
      <img src={lead} alt="lead" />

      <p>Cuissons :</p>
      <img src={leather} alt="leather" />
      <img src={rawIron} alt="raw Iron" />
      <img src={rawCopper} alt="raw Copper" />
      <img src={rawGold} alt="raw Gold" /> <br />
      <p>Crafts simplifiés :</p>
      <img src={simpleDispenser} alt="simpleDispenser" />
      <img src={simpleRepeater} alt="simpleRepeater" />
      <img src={logChest} alt="log Chest" />
      <img src={logStick} alt="log Stick" />
      <p>Crafts supplémentaires :</p>
      <img src={saddle} alt="saddle" />
      <img src={paper} alt="paper" />
      <img src={cobweb} alt="cobweb" />
      <p>Décoloration :</p>
      <img src={resetGlassPane} alt="reset Glass Pane" />
      <img src={resetGlass} alt="reset Glass" />
      <img src={resetTerracotta} alt="reset Terracotta" />
      <img src={resetWool} alt="reset Wool" />
      <p>Transformations champignons :</p>
      <img src={redMushroom} alt="red Mushroom" />
      <img src={brownBushroomBlock} alt="brown Bushroom Block" />
      <img src={brownMushroom} alt="brownMushroom" />
      <img src={mushroomStemRed} alt="mushroom Stem Red" />
      <img src={mushroomStem} alt="mushroomStem" />
      <img src={mushroomStemBrown} alt="mushroom Stem Brown" />
      <img src={redMushroomBlock} alt="red Mushroom Block" />
      <p>Déconstructions de blocs :</p>
      <img src={redSandstone} alt="red Sandstone" />
      <img src={amethyst} alt="amethyst" />
      <img src={brick} alt="brick" />
      <img src={clay} alt="clay" />
      <img src={glowstone} alt="glowstone" />
      <img src={honeycomb} alt="honeycomb" />
      <img src={melonSlice} alt="melonSlice" />
      <img src={netherBrick} alt="nether Brick" />
      <img src={netherWart} alt="nether Wart" />
      <img src={prismarine} alt="prismarine" />
      <img src={quartz} alt="quartz" />
      <img src={saddleToLeather} alt="saddle To Leather" />
      <img src={sandstone} alt="sandstone" />
      <img src={string} alt="string" />
    </div>
  </div>
  )
};
export default MissionVanillaRecipes;
