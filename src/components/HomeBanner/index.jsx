import { NavLink } from 'react-router-dom';
import videoBanner from "../../assets/videos/Mc-video-banner.webm";

const HomeBanner = () => (
  <div className="home-banner">

    <div className="fullscreen-bg">
        <video muted autoPlay id="#bg-video">
            <source src={videoBanner} type="video/webm" />
        </video>
    </div>

    <h1>Silverfish Infesting Space</h1>
    <p className="sub-title">Serveur 1.18 vanilla - Edition DataPack</p>
    <NavLink className="details-btn" to="/datapacks">Wiki Datapack＞</NavLink>

  </div>
);

export default HomeBanner;
