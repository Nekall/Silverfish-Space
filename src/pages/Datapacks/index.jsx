import SubNavbar from 'components/SubNavbar';

const Datapacks = () => {
  return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2>Bienvenue pour cette saison datapack edition.</h2>
      <p>Pour la première fois nous faisons un serveur minecraft vanilla agrémenté d'une vingtaine de datapacks.</p>
      <p>En plus, quelques Easter eggs se sont glissés sur le serveur ! ;)</p>
      <p>Tous les mobs drops leurs têtes (via un pourcentage de chance), pourquoi pas les collectionner ?! ;D</p>
      <p>Les endermans ne volent pas de blocs, en revanche attention aux creepers.</p>
      <p>―</p>
      <p>Le ressource pack est <span className="bold">OBLIGATOIRE</span>, autrement tu n'auras pas les textures de certains blocs ajoutés par les datapacks.</p>
      <p>Ce sera du coup, forcement moins bien.</p>
      <p>―</p>
      <h3 className="bold">Mais c'est quoi un datapack ?</h3>
      <p>
        Le système de datapack permet aux joueurs de personnaliser davantage leur expérience dans Minecraft. Les datapacks peuvent être utilisés pour remplacer ou ajouter de nouveaux progrès, dimensions, fonctions, recettes, structures, tags, paramètres de génération de monde et biomes sans aucune modification du code.
      </p>
      <hr/>
      <p>Redémarrage et sauvegarde chaque jour à 4h du matin.</p>
    </div>
  </div>
  )
};
export default Datapacks;
