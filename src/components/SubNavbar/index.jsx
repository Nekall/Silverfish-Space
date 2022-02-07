import { NavLink } from 'react-router-dom';
import podium from 'assets/images/podium.svg';

const SubNavbar = () => (
  <>
    <div className="btn-podium">
      <NavLink activeClassName="active" to="/top-advancements"><img className="podium" src={podium} alt="podium achievements" /></NavLink>
    </div>
    <div className="subnavbar" >
      <NavLink activeClassName="active" className="intro" to="/datapacks">Introduction</NavLink>
      <NavLink activeClassName="active" to="/datapacks/better-elytra">Better Elytra</NavLink>
      <NavLink activeClassName="active" to="/datapacks/blaze-and-caves-advancements">BlazeAndCaves Advancements</NavLink>
      <NavLink activeClassName="active" to="/datapacks/bonsai-pots">Bonsai Pots</NavLink>
      <NavLink activeClassName="active" to="/datapacks/invisible-frames">Invisible Frames</NavLink>
      <NavLink activeClassName="active" to="/datapacks/iron-furnaces">Iron Furnaces</NavLink>
      <NavLink activeClassName="active" to="/datapacks/joshs-more-foods">Josh's More Foods</NavLink>
      <NavLink activeClassName="active" to="/datapacks/miniblock-traders">Miniblock Traders</NavLink>
      <NavLink activeClassName="active" to="/datapacks/missing-vanilla-recipes">Missing Vanilla Recipes</NavLink>
      <NavLink activeClassName="active" to="/datapacks/netherite-bow">Netherite Bow</NavLink>
      <NavLink activeClassName="active" to="/datapacks/quarry-vanilla">Quarry Vanilla</NavLink>
      <NavLink activeClassName="active" to="/datapacks/vanilla-tweaks">Vanilla Tweaks</NavLink>
    </div>
  </>
);

export default SubNavbar;
