import { NavLink } from 'react-router-dom';

const HomeBanner = () => (
  <div className="home-banner">
    <h1>Silverfish Infesting Space</h1>
    <p className="sub-title">Serveur 1.18 vanilla - Edition DataPack</p>
    <NavLink className="details-btn" to="/datapacks">Wiki Datapack＞</NavLink>
  </div>
);

export default HomeBanner;
