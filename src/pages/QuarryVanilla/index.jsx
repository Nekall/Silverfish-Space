import SubNavbar from 'components/SubNavbar';
import quarryBuilderCraft from '../../assets/images/QuarryVanilla/quarry-builder-craft.png';
import quarryBuilderInside from '../../assets/images/QuarryVanilla/quarry-builder-inside.png';
import upgrade5x5 from '../../assets/images/QuarryVanilla/upgrade-5x5.png';
import upgrade7x7 from '../../assets/images/QuarryVanilla/upgrade-7x7.png';
import upgrade9x9 from '../../assets/images/QuarryVanilla/upgrade-9x9.png';
import upgrade11x11 from '../../assets/images/QuarryVanilla/upgrade-11x11.png';
import wrench from '../../assets/images/QuarryVanilla/wrench.png';
import link from '../../assets/images/link.svg';

const QuarryVanilla = () => {
return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/vanilla-quarry/">Quarry Vanilla<img className="link" src={link} alt="lien" /></a></h2>
      <img src={quarryBuilderCraft} alt="quarryBuilderCraft" />
      <img src={quarryBuilderInside} alt="quarryBuilderInside" />
      <img src={upgrade5x5} alt="upgrade5x5" />
      <img src={upgrade7x7} alt="upgrade7x7" />
      <img src={upgrade9x9} alt="upgrade9x9" />
      <img src={upgrade11x11} alt="upgrade11x11" />
      <img src={wrench} alt="wrench" />

    </div>
  </div>
  )
};
export default QuarryVanilla;
