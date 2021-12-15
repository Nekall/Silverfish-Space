import SubNavbar from 'components/SubNavbar';
import cookingBook from '../../assets/images/JoshsMoreFoods/cooking-book.png';
import link from '../../assets/images/link.svg';
import morefood from '../../assets/images/JoshsMoreFoods/morefood.png';

const JoshsMoreFoods = () => {
return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/josh-s-more-foods-20-new-recipes/">Josh's More Foods<img className="link" src={link} alt="lien" /></a></h2>
      <img className="morefood-img" src={morefood} alt="more food" />
      <p>Avec plus de 20 nouvelles recettes, Josh’s more foods vous permettra de diversifier votre alimentation afin d’être en bonne santé. Pour commencer votre voyage culinaire, il faudra fabriquer l’ancien ouvrage du légendaire chef Echtebecht et découvrir les recettes qui s’y cachent.</p>
      <img src={cookingBook} alt="cooking book" />
    </div>
    </div>
  )
};
export default JoshsMoreFoods;
