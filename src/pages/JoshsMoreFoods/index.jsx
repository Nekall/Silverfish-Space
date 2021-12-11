import SubNavbar from 'components/SubNavbar';
import cookingBook from '../../assets/images/JoshsMoreFoods/cooking-book.png';
import link from '../../assets/images/link.svg';

const JoshsMoreFoods = () => {
return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/josh-s-more-foods-20-new-recipes/">Josh's More Foods<img className="link" src={link} alt="lien" /></a></h2>
      <img src={cookingBook} alt="cooking book" />
    </div>
    </div>
  )
};
export default JoshsMoreFoods;
