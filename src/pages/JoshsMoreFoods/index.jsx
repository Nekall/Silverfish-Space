import SubNavbar from "components/SubNavbar";
import cookingBook from "../../assets/images/JoshsMoreFoods/cooking-book.png";
import link from "../../assets/images/link.svg";
import morefood from "../../assets/images/JoshsMoreFoods/morefood.png";

const JoshsMoreFoods = () => (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/josh-s-more-foods-20-new-recipes/">Josh's More Foods<img className="link" src={link} alt="lien" /></a></h2>
      <img className="dp-img" src={morefood} alt="more food" />
      <p>Avec plus de 20 nouvelles recettes, Josh’s more foods vous permettra de diversifier votre alimentation afin d’être en bonne santé. Pour commencer votre voyage culinaire, il faudra fabriquer l’ancien ouvrage du légendaire chef Echtebecht et découvrir les recettes qui s’y cachent.</p>
      <img src={cookingBook} alt="cooking book" />
      <ul className="food-tabs">
        <div>
          <p className="bold underline">Plats salés :</p>
          <li>Riz</li>
          <li>Sushi</li>
          <li>Riz frit</li>
          <li>Bol de riz</li>
          <li>Fish and chips</li>
        </div>
        <div>
          <p className="bold underline">Salades :</p>
          <li>Coleslaw</li>
          <li>Salade végétale</li>
          <li>Salade de pomme de terre</li>
        </div>
        <div>
          <p className="bold underline">Pains :</p>
          <li>Pain à la bettrave</li>
          <li>Pain à la carotte</li>
          <li>Pain à la pomme de terre</li>
        </div>
        <div>
          <p className="bold underline">Tartes :</p>
          <li>Tarte aux pommes</li>
          <li>Tarte à la carotte</li>
          <li>Tarte aux baies sauvages</li>
        </div>
        <div>
          <p className="bold underline">Cookies :</p>
          <li>Cookie au miel</li>
          <li>Cookie au sucre</li>
          <li>Cookie aux baies sauvages</li>
        </div>
        <div>
            <p className="bold underline">Desserts :</p>
            <li>Flan</li>
            <li>Glace à la pomme</li>
            <li>Glace au chocolat</li>
            <li>Roulé à la cannelle</li>
            <li>Glace à la pastèque</li>
            <li>Glace à la citrouille</li>
        </div>
      </ul>
    </div>
    </div>
  );
export default JoshsMoreFoods;
