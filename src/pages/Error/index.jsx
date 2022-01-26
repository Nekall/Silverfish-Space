import boat from "../../assets/images/error-boat.png";
import { NavLink } from "react-router-dom";

const Error = () => (
    <div className="error">
      <img className="boat floating" src={boat} alt="bateau de l'end" />
      <p className="e404">Erreur 404</p>
      <p>Tu t'es perdu ? </p>
      <p><NavLink to="/">Retourner sur la page d'accueil</NavLink></p>
    </div>
  );
export default Error;
