import { Link } from 'react-router-dom';
//import silverfip from 'assets/images/---.svg';

const Navbar = () => (
  <nav className="navbar" >
    <h1>Silverfish Infesting Space</h1>
    <Link to="/">Accueil</Link>
    <Link to="/datapacks">Datapacks Wikis</Link>
  </nav>
);

export default Navbar;
