import SubNavbar from 'components/SubNavbar';
import craftInvisibleFrame from '../../assets/images/InvisibleFrames/invisible-frame.png';
import craftInvisibleGlowFrame from '../../assets/images/InvisibleFrames/invisible-glowing-frame.png';
import link from '../../assets/images/link.svg';
import invisibleframe from '../../assets/images/InvisibleFrames/invisibleframe.png';

const InvisibleFrames = () => {
return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/invisible-item-frames-4870396/">Invisible Frames<img className="link" src={link} alt="lien" /></a></h2>
      <img className="invisiframe-img" src={invisibleframe} alt="invisible frame" />
      <p>
        Vous aussi vous en avez assez de ce fond disgracieux dans vos cadre d’objets ?
        Enfilez une cape d’invisibilité à votre item frame ! Un simple craft et pouf, disparition.
        Retrouvez vous avec une décoration épurée et un plaisir à chaque regard.
      </p>
      <img src={craftInvisibleFrame} alt="invisible frame" />
      <img src={craftInvisibleGlowFrame} alt="invisible glowing frame" />
    </div>
  </div>
  )
};
export default InvisibleFrames;
