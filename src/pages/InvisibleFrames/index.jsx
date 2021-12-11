import SubNavbar from 'components/SubNavbar';
import invisbleFrame from '../../assets/images/InvisibleFrames/invisible-frame.png';
import invisbleGlowFrame from '../../assets/images/InvisibleFrames/invisible-glowing-frame.png';
import link from '../../assets/images/link.svg';

const InvisibleFrames = () => {
return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/invisible-item-frames-4870396/">Invisible Frames<img className="link" src={link} alt="lien" /></a></h2>
      <img src={invisbleFrame} alt="invisible frame" />
      <img src={invisbleGlowFrame} alt="invisible glowing frame" />
    </div>
  </div>
  )
};
export default InvisibleFrames;
