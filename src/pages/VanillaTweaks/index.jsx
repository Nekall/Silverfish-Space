import React, { useState } from 'react';
import SubNavbar from 'components/SubNavbar';
import link from '../../assets/images/link.svg';
import copy from '../../assets/images/copy.svg';
import hudposition from '../../assets/images/VanillaTweaks/hudposition.png';
import rotationWrench from '../../assets/images/VanillaTweaks/rotation-wrench.png';

const VanillaTweaks = () => {

  let [x, setX] = useState(1000);
  let [y, setY] = useState(85);
  let [z, setZ] = useState(500);
  let [direction, setDirection] = useState("N")
  let hours = "06:45";

  let handleMousemove = (event) => {
  setX(event.x);
  setY(~~(event.x/12));
  setZ(event.y);
  if(event.y < 500){
    setDirection("N")
  }else{
    setDirection("S")
  }
};

  document.addEventListener('mousemove', handleMousemove);

  function copyCmd(){
    if(navigator.clipboard){
      navigator.clipboard.writeText("/trigger ch_toggle")
      .then(_=> {
          let confirm = document.getElementsByClassName("copy-hud-cmd")[0];
          confirm.classList.add("copied")
          setInterval(function(){ confirm.classList.remove("copied"); }, 1700);
      })
    }
  }

return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://vanillatweaks.net/">Vanilla Tweaks<img className="link" src={link} alt="lien" /></a></h2>
      <p>―</p>
      <p className="bold">Coordinates HUD</p>
      <p>Ce petit datapack vous permet d'avoir toujours les coordonnées, la direction et l'heure du jeu toujours à porté de mains.</p>
      <div>
        <p className="hudposition">XYZ: <span className="x">{x}</span>  <span className="y">{y}</span>  <span className="z">{z}</span>       <span className="dir">{direction}</span>                      <span className="hours">{hours}</span></p>
        <img className="dp-img hudpos-img" src={hudposition} alt="hudposition" />
      </div>
      <div className="copy-hud-cmd" onClick={() => copyCmd()}>/trigger ch_toggle<img className="link" src={copy} alt="copie commande" /></div>
      <p>―</p>
      <p className="bold">Redstone Rotation Wrench</p>
      <p>
        Un petit datapack qui ajoute le craft du wrench pour pouvoir tourner repeater, comparator, observer, dispenser, dropper, hopper, sticky-piston & piston.
        Une simple sneak + clique droit sur le bloc souhaité et tu pourras le faire tourner dans tous les sens rapidement et facilement.
        Attention, tu ne pourras pas faire tourner un dispenser plein par exemple, il faut que le bloc ayant un inventaire soit vide.
      </p>
      <img className="" src={rotationWrench} alt="rotation wrench" />
      <p>―</p>
      <p className="bold">Armors Statues</p>
      <p>
		Amateur de marionnette et tu désires modifier un armor stand à ta sauce ? Signe un livre avec le titre "Statues" puis laisse ta créativité opérer !
		Le rendre invisible, changer l'orientation de sa tête et de ses bras, lui donner la possibilité de voler ... Bref des centaines de possibilités s'offre à toi pour donner vie à tes mannequins.
      </p>
      <p>―</p>
      <p className="bold">Cauldron Concrete</p>
      <p>
        Jetes la poudre de concrete directement dans un chaudron rempli d'eau pour le transformer en concrete durci.
        L'eau ne sera pas consommée. Tu peux jeter un bloc ou directement un stack dans le chaudron.
      </p>
      <p>―</p>
      <p className="bold">Elevators</p>
      <p>
        Lâches une enderperle au-dessus d'un bloc de laine pour le transformer en ascenseur.
        Sautes dessus pour te rendre sur le bloc ascenseur de la même couleur directement au-dessus.
        Accroupies toi dessus pour atteindre le bloc ascenseur directement en dessous.
        Il n'y a pas de limite de distance. En cassant la laine, tu récupères la laine & l'enderperle.
      </p>
    </div>
  </div>
  )
};
export default VanillaTweaks;
