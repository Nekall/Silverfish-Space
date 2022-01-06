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
    <div className="content listing">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/netherite-bow/">Netherite Bow<img className="link" src={link} alt="lien" /></a></h2>
      <p>
      N’avez vous jamais remarqué que vous pouviez améliorer vos armes & outils mais pas votre arc ? Sacrilège ! Voilà de quoi réaligner vos chakras et réparer cette injustice !
      Avec Netherite Bow, vous allez pouvoir acquérir un arc en netherite agrémenté de quelques effets pas piqué des hannetons.
      </p>
      ―
      <p>Pour utiliser ce datapack il te faudra la 'Forge d'Obsidienne' :</p>
      <p>(4x Polished Deepslate Stairs, 1x Magma block, 1x Dispenser & une bouteille de souffle du dragon.)</p>
      <img className="forge" src={obsidianForge} alt="obsidian Forge" /> <br/>
      <p>Matériaux de craft :</p>
      <p>(Pas besoins de la forge)</p>
      <img src={diamondStick} alt="diamond Stick" />
      <img src={goldenString} alt="golden String" /><br/>
      <p>Craft & améliorations de l'Arc :</p>
      <img src={diamondBow} alt="diamond Bow" />
      <img src={netheriteBow} alt="netherite Bow" />
      <img src={soulStealerUpgrade} alt="soul Stealer Upgrade" />
      <img src={telekinesisUpgrade} alt="telekinesis Upgrade" />
      <img src={teleportUpgrade} alt="teleport Upgrade" />
      <img src={thunderUpgrade} alt="thunder Upgrade" />


      <p>Capacités</p>
    <table>
      <tbody>
        <tr>
          <td className="bold">Feu </td><td> Allume le feu là où la flèche atterrit.</td>
        </tr>
        <tr>
          <td className="bold">Givre </td><td> Gèle les ennemis et l'eau là où la flèche atterrit.</td>
        </tr>
        <tr>
          <td className="bold">Poison </td><td> Empoisonne les ennemis près de l'endroit où la flèche atterrit.</td>
        </tr>
        <tr>
          <td className="bold">Nuage de fumée </td><td> Crée un nuage de fumée là où la flèche atterrit, donnant de la lenteur III et de la cécité III pendant 5 secondes aux ennemis proches.</td>
        </tr>
        <tr>
          <td className="bold">Spectre </td><td> Vous donne l'invisibilité III pendant 8 secondes.</td>
        </tr>
      </tbody>
    </table>

    <p>Capacités à débloquer</p>
    <table>
      <tbody>
        <tr>
          <td className="bold">Téléportation </td><td> Vous téléporte à l'endroit où la flèche atterrit (distance maximale : 200 blocs).</td>
        </tr>
        <tr>
          <td className="bold">Télékinésie </td><td> Fait léviter tous les monstres dans la zone où la flèche atterrit pendant 5 secondes.</td>
        </tr>
        <tr>
          <td className="bold">Tonnerre </td><td> Invoque des éclairs autour de vous et là où la flèche atterrit.</td>
        </tr>
        <tr>
          <td className="bold">Voleur d'âme </td><td> Donne un effet de flétrissement aux monstres proches de la zone où la flèche atterrit pendant 5 secondes.</td>
        </tr>
      </tbody>
    </table>

		<p>Sélectionner une aptitude</p>
		<p>
		Placez d'abord l'arc Netherite dans votre main gauche. Une interface graphique apparaît au-dessus de votre barre de raccourcis. Faites défiler votre barre de raccourcis pour sélectionner une capacité et appuyez sur votre touche pour vous accroupir pour confirmer votre choix.
		</p>
		<p>Comment utiliser une capacité</p>
    <table>
      <tbody>
        <tr>
          <td className="bold">Feu </td><td>S'accroupir pour obtenir une résistance au feu II pendant 10 secondes. Tirer pour mettre le feu à l'endroit où la flèche atterrit.</td>
        </tr>
        <tr>
          <td className="bold">Givre </td><td>Tirez pour bloquer les monstres proches de l'endroit où la flèche atterrit et geler l'eau à proximité. Déplacez-vous sur la glace ou la neige pour obtenir la vitesse II pendant 10 secondes.</td>
        </tr>
        <tr>
          <td className="bold">Poison </td><td>Tirer pour donner du poison I à tous les monstres proches de l'endroit où la flèche atterrit.</td>
        </tr>
        <tr>
          <td className="bold">Nuage de fumée </td><td>Tirer pour créer un nuage de fumée qui donne de la lenteur III et de la cécité III pendant 5 secondes à tous les monstres proches de l'endroit où la flèche atterrit.</td>
        </tr>
        <tr>
          <td className="bold">Spectre </td><td>S'accroupir pour devenir invisible pendant 8 secondes. Tirer pour créer le même effet que Nuage de fumée.</td>
        </tr>
        <tr>
          <td className="bold">Téléportation </td><td>Tirer une flèche puis s'accroupir pour vous téléporter à l'endroit où la flèche a atterri (portée maximale : 200 blocs).</td>
        </tr>
        <tr>
          <td className="bold">Télékinésie </td><td>Tirer une flèche pour donner lévitation II pendant 5 secondes à toutes les entités proches de l'endroit où la flèche atterrit, et s'accroupir pour obtenir chute lente pendant 10 secondes.</td>
        </tr>
        <tr>
          <td className="bold">Tonnerre </td><td>S'accroupir pour invoquer des éclairs près de vous. Tirer pour invoquer un éclair là où la flèche atterrit.</td>
        </tr>
        <tr>
          <td className="bold">Voleur d'âme </td><td> Tirer une flèche pour donner de l'effet wither à tous les monstres près de l'endroit où la flèche a atterri.</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
  )
};
export default NetheriteBow;
