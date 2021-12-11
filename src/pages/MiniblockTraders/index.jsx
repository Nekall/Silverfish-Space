import SubNavbar from 'components/SubNavbar';
import link from '../../assets/images/link.svg';

const MiniblockTraders = () => {
return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/miniblock-traders/">Miniblock Traders<img className="link" src={link} alt="lien" /></a></h2>
    </div>
  </div>
  )
};
export default MiniblockTraders;
