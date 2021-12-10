import SubNavbar from 'components/SubNavbar';
import invisbleFrame from '../../assets/images/InvisibleFrames/invisible-frame.png';
import invisbleGlowFrame from '../../assets/images/InvisibleFrames/invisible-glowing-frame.png';

const InvisibleFrames = () => {
return (
  <div class="container">
    <SubNavbar />
    <div class="content">
      <p>Page concernant <a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/invisible-item-frames-4870396/">Invisible Frames</a></p>
      <img src={invisbleFrame} alt="invisible frame" />
      <img src={invisbleGlowFrame} alt="invisible glowing frame" />
    </div>
  </div>
  )
};
export default InvisibleFrames;
