import SubNavbar from "components/SubNavbar";
import diamondElytra from "../../assets/images/BetterElytra/diamond-elytra.png";
import netheriteElytra from "../../assets/images/BetterElytra/netherite-elytra.png";
import fly from "../../assets/images/BetterElytra/fly.png";
import link from "../../assets/images/link.svg";

const BetterElytra = () => (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/new-and-improved-elytra/">Better Elytra<img className="link" src={link} alt="lien" /></a></h2>
      <img className="dp-img" src={fly} alt="fly" />
      <p>
        Better Elytra te permet de combiner des Elytra avec un plastron.
        Normalement, tu ne peux pas porter de plastron si tu utilises des Elytra.
        Cela signifie que tu devais sacrifier ta pièce d'armure la plus solide pour porter des Elytra. Avec ce datapack,
        tu peux combiner tes Elytra avec un plastron et tu peux même l'enchanter pour plus de protection !
      </p>
      <p>
        Pour assembler tes Elytra et ton plastron, jetes les sur une enclume, tu récupereras ainsi ton plastron-elytra.
        Pour désassembler tes Elytra et ton plastron, jetes les sur un blast furnace, tu récupereras tes Elytra et ton plastron.
      </p>
      <p>
        Tu peux tout à fait assembler/désassembler un plastron déjà enchanté avec des Elytra, tu gardera les enchantements.
      </p>
      <p className="bold">Better Elytra ne fonctionne qu'avec le plastron de diamant et de netherite.</p>
      <img className="dp-img-details" src={diamondElytra} alt="diamond elytra" />
      <img className="dp-img-details" src={netheriteElytra} alt="netherite elytra" />
    </div>
  </div>
  );
export default BetterElytra;
