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
import link from '../../assets/images/link.svg';

const NetheriteBow = () => {
return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/netherite-bow/">Netherite Bow<img className="link" src={link} alt="lien" /></a></h2>
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
      <p>
        N’avez vous jamais remarqué que vous pouviez améliorer vos armes & outils mais pas votre arc ? Sacrilège ! Voilà de quoi réaligner vos chakras et réparer cette injustice !
        Avec Netherite Bow, vous allez pouvoir acquérir un arc en netherite agrémenté de quelques effets pas piqué des hannetons.
      </p>
    </div>
  </div>
  )
};
export default NetheriteBow;
