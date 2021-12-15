import { NavLink } from 'react-router-dom';
import videoBanner from "../../assets/videos/Mc-video-banner.webm";
import book from "../../assets/images/book.png";
import enchantedBook from "../../assets/images/enchantedbook.webp";

const HomeBanner = () => {
  return(
    <div className="home-banner">

      <div className="fullscreen-bg">
          <video muted autoPlay id="#bg-video">
              <source src={videoBanner} type="video/webm" />
          </video>
      </div>

      <h1>Silverfish Infesting Space</h1>
      <p className="sub-title">Serveur 1.18 vanilla - Edition DataPack</p>

      <NavLink onMouseOver={e => e.target.children[0].src = enchantedBook} onMouseOut={e => e.target.children[0].src = book} className="details-btn" to="/datapacks">Wiki Datapack
        <img className="book" src={book} alt="livre basique de minecraft" />
      </NavLink>

    </div>
)};

export default HomeBanner;
