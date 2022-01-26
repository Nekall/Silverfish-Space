import SubNavbar from "components/SubNavbar";
import link from "../../assets/images/link.svg";
import miniblocks from "../../assets/images/MiniBlocksTraders/miniblocks.png";

const MiniblockTraders = () => (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/miniblock-traders/">Miniblock Traders<img className="link" src={link} alt="lien" /></a></h2>
      <img className="dp-img" src={miniblocks} alt="miniblocs" />
      <p>
        Envie d’avoir des possibilités de décoration en plus ? C’est maintenant possible grâce à Miniblock traders, 25 nouveaux traders et plus de 500 mini–blocs différents.
      </p>
      <p>
        Pour obtenir ces villageois spéciaux il suffit de lancer au pied d’un villageois classique un des items de conversion ci-dessous :
      </p>
      <div className="listing">
        <table>
          <tbody>
              <tr>
                  <td className="bold">Pomologist</td>
                  <td>Enchanted Red Delicious (1/4096 from oak leaves)</td>
              </tr>
              <tr>
                  <td className="bold">Olericulturist</td>
                  <td>Overgrown Carrot (1/512 from harvesting carrots)</td>
              </tr>
              <tr>
                  <td className="bold">Horticulturist</td>
                  <td>Fragrant Flower (1/2 from Pillager Outpost chests)</td>
              </tr>
              <tr>
                  <td className="bold">Arboriculturalist</td>
                  <td>Cultivated Sapling (1/4096 from spruce leaves)</td>
              </tr>
              <tr>
                  <td className="bold">Mineralogist</td>
                  <td>24-Karat Gold (1/4 from Spawner Dungeon chests)</td>
              </tr>
              <tr>
                  <td className="bold">Petrologist</td>
                  <td>Unusually Dense Rock (1/12 from Abandoned Mineshaft chests)</td>
              </tr>
              <tr>
                  <td className="bold">Netherographer</td>
                  <td>Sparkling Blaze Powder (1/4 from Ruined Portal chests)</td>
              </tr>
              <tr>
                  <td className="bold">Oceanographer</td>
                  <td>Ancient Shell (1/3 from Big Underwater Ruin chests)</td>
              </tr>
              <tr>
                  <td className="bold">Eremologist</td>
                  <td>Budding Cactus (1/12 from Desert Pyramid chests)</td>
              </tr>
              <tr>
                  <td className="bold">Furnisher</td>
                  <td>Endless Bookshelf (1/3 from Stronghold Library chests)</td>
              </tr>
              <tr>
                  <td className="bold">Steampunker</td>
                  <td>Forgotten Scrap Metal (1/24 chance when fishing up a Treasure)</td>
              </tr>
              <tr>
                  <td className="bold">Engineer</td>
                  <td>Radiating Redstone (1/256 from mining redstone ore)</td>
              </tr>
              <tr>
                  <td className="bold">Alchemist</td>
                  <td>Crystal Phial (1/24 chance when fishing up a Treasure)</td>
              </tr>
              <tr>
                  <td className="bold">Sculptor</td>
                  <td>Sculpting Clay (1/256 from harvesting clay)</td>
              </tr>
              <tr>
                  <td className="bold">Tailor</td>
                  <td>Fine Thread (1/2 from Village Shepherd chests)</td>
              </tr>
              <tr>
                  <td className="bold">Beekeeper</td>
                  <td>Prismatic Honeycomb (100% from Jungle Temple chests)</td>
              </tr>
              <tr>
                  <td className="bold">Blacksmith</td>
                  <td>Mastercrafted Iron (1/2 from Village Armorer chests)</td>
              </tr>
              <tr>
                  <td className="bold">Ritualist</td>
                  <td>Book of Rituals (1/3 from Stronghold Library chests)</td>
              </tr>
              <tr>
                  <td className="bold">Baker</td>
                  <td>Shimmering Wheat (1/512 from harvesting Wheat)</td>
              </tr>
              <tr>
                  <td className="bold">Chef</td>
                  <td>Wagyu Beef (1/2 from Village Butcher chests)</td>
              </tr>
              <tr>
                  <td className="bold">Bartender</td>
                  <td>Mixology Station (1/24 chance when fishing up a Treasure)</td>
              </tr>
              <tr>
                  <td className="bold">Astronomer</td>
                  <td>Galilean Spyglass (100% from Igloo chests)</td>
              </tr>
              <tr>
                  <td className="bold">Plushie Maniac</td>
                  <td>Soaked Villager Plushie (1/24 chance when fishing up a Treasure)</td>
              </tr>
              <tr>
                  <td className="bold">Gamemaster</td>
                  <td>Drenched Score Sheet (1/24 chance when fishing up a Treasure)</td>
              </tr>
              <tr>
                  <td className="bold">Recycler</td>
                  <td>Rotting Recycling Bin (1/24 chance when fishing up a Treasure)</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
export default MiniblockTraders;
