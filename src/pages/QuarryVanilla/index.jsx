import SubNavbar from 'components/SubNavbar';
import quarryBuilderCraft from '../../assets/images/QuarryVanilla/quarry-builder-craft.png';
import quarryBuilderInside from '../../assets/images/QuarryVanilla/quarry-builder-inside.png';
import upgrade5x5 from '../../assets/images/QuarryVanilla/upgrade-5x5.png';
import upgrade7x7 from '../../assets/images/QuarryVanilla/upgrade-7x7.png';
import upgrade9x9 from '../../assets/images/QuarryVanilla/upgrade-9x9.png';
import upgrade11x11 from '../../assets/images/QuarryVanilla/upgrade-11x11.png';
import wrench from '../../assets/images/QuarryVanilla/wrench.png';
import quarry from '../../assets/images/QuarryVanilla/quarry.gif';
import link from '../../assets/images/link.svg';

const QuarryVanilla = () => {
return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/vanilla-quarry/">Quarry Vanilla<img className="link" src={link} alt="lien" /></a></h2>
      <p>Fan d’industrial craft, non ce n’est pas le filler mais bien évidemment la quarry. La mise en place est légèrement différente mais le fonctionnement reste le même. Tu peux ajouter des upgrades afin d’agrandir sa taille de minage.</p>
      <img className="dp-img" src={quarry} alt="quarry en action" />
      <p>Craft de base :</p>
      <img src={quarryBuilderCraft} alt="quarryBuilderCraft" />
      <img src={wrench} alt="wrench" />
      <p>Poses le quarry builder, rempli le des items suivant et fait un sneak+clique avec la wrench :</p>
      <p>(Attention, il faut le nombre exact d'items de la capture d'écran suivante)</p>
      <img className="dp-img" src={quarryBuilderInside} alt="quarryBuilderInside" />
      <p>Tadam !</p>
      <p>Craft des upgrade : </p>
      <p>(A mettre dans un dropper et clique droit avec la wrench)</p>
      <img src={upgrade5x5} alt="upgrade5x5" />
      <img src={upgrade7x7} alt="upgrade7x7" />
      <img src={upgrade9x9} alt="upgrade9x9" />
      <img src={upgrade11x11} alt="upgrade11x11" />
      <p>(5x5)―(7x7)―(9x9)―(11x11)</p>
    </div>
  </div>
  )
};
export default QuarryVanilla;
