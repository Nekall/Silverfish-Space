import { NavLink } from "react-router-dom";

const Error = () => (
  <div className="__error">
    <div className="__container">
      <p className="__e404">Erreur 404</p>
      <p>Tu t'es perdu ? </p>
      <p className="__link"><NavLink to="/">Retourner sur la page d'accueil</NavLink></p>
    </div>
  </div>
);
export default Error;
