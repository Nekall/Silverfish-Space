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
      <p>Avec plus de 20 nouvelles recettes, Josh’s more foods vous permettra de diversifier votre alimentation afin d’être en bonne santé. Pour commencer votre voyage culinaire, il faudra fabriquer l’ancien ouvrage du légendaire chef Echtebecht et découvrir les recettes qui s’y cachent.</p>
    </div>
    </div>
  )
};
export default JoshsMoreFoods;
