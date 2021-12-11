import SubNavbar from 'components/SubNavbar';
import diamondElytra from '../../assets/images/BetterElytra/diamond-elytra.png';
import netheriteElytra from '../../assets/images/BetterElytra/netherite-elytra.png';
import link from '../../assets/images/link.svg';

const BetterElytra = () => {
return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/new-and-improved-elytra/">Better Elytra<img className="link" src={link} alt="lien" /></a></h2>
      <p>
        Better Elytra vous permet de combiner un Elytra avec un plastron.
        Normalement, vous ne pouvez pas porter de plastron si vous utilisez des Elytra.
        Cela signifie que vous devrez sacrifier la pièce d'armure la plus solide pour porter des Elytra,
        ce qui vous rendra beaucoup plus vulnérable aux dommages. Avec ce datapack,
        vous pouvez combiner votre Elytra avec un plastron et vous pouvez même l'enchanter pour plus de protection !
      </p>
      <p className="bold">Better Elytra ne fonctionne qu'avec le plastron de diamand et de netherite.</p>
      <img src={diamondElytra} alt="diamond elytra" />
      <img src={netheriteElytra} alt="netherite elytra" />
    </div>
  </div>
  )
};
export default BetterElytra;
