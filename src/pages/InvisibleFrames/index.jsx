import SubNavbar from 'components/SubNavbar';
import craftInvisibleFrame from '../../assets/images/InvisibleFrames/invisible-frame.png';
import craftInvisibleGlowFrame from '../../assets/images/InvisibleFrames/invisible-glowing-frame.png';
import link from '../../assets/images/link.svg';
import invisibleframe from '../../assets/images/InvisibleFrames/invisibleframe.png';
import invisibleframes from '../../assets/images/InvisibleFrames/invisibleframes.gif';

const InvisibleFrames = () => {
return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/invisible-item-frames-4870396/">Invisible Frames<img className="link" src={link} alt="lien" /></a></h2>
      <img className="dp-img" src={invisibleframe} alt="invisible frame" />
      <p>
        Toi aussi tu en as assez de ce fond disgracieux dans tes cadres d’objets ?
      </p>
      <p>
        Enfiles une cape d’invisibilité à ton cadre d’objet ! Un simple craft et pouf, disparition.
      </p>
      <p>
        Retrouves toi avec une décoration épurée et un plaisir à chaque regard.
      </p>
      <img src={craftInvisibleFrame} alt="invisible frame" />
      <img src={craftInvisibleGlowFrame} alt="invisible glowing frame" />
      <img className="dp-img" src={invisibleframes} alt="explication en gif" />
    </div>
  </div>
  )
};
export default InvisibleFrames;
