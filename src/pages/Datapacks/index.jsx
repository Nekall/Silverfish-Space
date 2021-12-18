import SubNavbar from 'components/SubNavbar';

const Datapacks = () => {
  return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2>Bienvenue pour cette saison datapack edition.</h2>
      <p>Pour la première fois nous faisons un serveur minecraft vanilla agrémenté de quelques datapacks, 17 pour être précis.</p>
      <p>En plus, quelques Easter eggs se sont glissés sur le serveur ! ;)</p>
      ―
      <p>Le ressource pack est <span className="bold">OBLIGATOIRE</span>, autrement tu n'auras pas les textures de certain blocs ajoutés par les datapacks.</p>
      <p>Ce sera du coup, forcement moins bien.</p>
      <a className="" href="/Silverfish-infesting-space-ressourcepack.zip" download rel="noopener noreferrer" target="_blank">
        Télécharger le ressource pack
      </a>
      <p>―</p>
      <p>Mais c'est quoi un datapack ?</p>
      <p>
        Le système de datapack permet aux joueurs de personnaliser davantage leur expérience dans Minecraft. Les data packs peuvent être utilisés pour remplacer ou ajouter de nouveaux progrès, dimensions, fonctions, recettes, structures, tags, paramètres de génération de monde et biomes sans aucune modification du code.
      </p>
    </div>
  </div>
  )
};
export default Datapacks;
