import SubNavbar from 'components/SubNavbar';
import diamondBow from '../../assets/images/NetheriteBow/diamond-bow.png';
import diamondStick from '../../assets/images/NetheriteBow/diamond-stick.png';
import goldenString from '../../assets/images/NetheriteBow/golden-string.png';
import netheriteBow from '../../assets/images/NetheriteBow/netherite-bow.png';
import obsidianForge from '../../assets/images/NetheriteBow/obsidian-forge.png';
import soulStealerUpgrade from '../../assets/images/NetheriteBow/soul-stealer-upgrade.png';
import telekinesisUpgrade from '../../assets/images/NetheriteBow/telekinesis-upgrade.png';
import teleportUpgrade from '../../assets/images/NetheriteBow/teleport-upgrade.png';
import thunderUpgrade from '../../assets/images/NetheriteBow/thunder-upgrade.png';

const NetheriteBow = () => {
return (
  <div class="container">
    <SubNavbar />
    <div class="content">
      <p>Page concernant <a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/netherite-bow/">Netherite Bow</a></p>
      <img src={obsidianForge} alt="obsidian Forge" /> <br/>
      <p>La forge</p>
      <img src={diamondStick} alt="diamond Stick" />
      <img src={goldenString} alt="golden String" /><br/>
      <img src={diamondBow} alt="diamond Bow" />
      <img src={netheriteBow} alt="netherite Bow" />
      <img src={soulStealerUpgrade} alt="soul Stealer Upgrade" />
      <img src={telekinesisUpgrade} alt="telekinesis Upgrade" />
      <img src={teleportUpgrade} alt="teleport Upgrade" />
      <img src={thunderUpgrade} alt="thunder Upgrade" />
    </div>
  </div>
  )
};
export default NetheriteBow;
