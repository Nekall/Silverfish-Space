import { NavLink } from "react-router-dom";

const Error = () => (
    <div className="__error">
      <p className="e404">Erreur 404</p>
      <p>Tu t'es perdu ? </p>
      <p><NavLink to="/">Retourner sur la page d'accueil</NavLink></p>
    </div>
  );
export default Error;
