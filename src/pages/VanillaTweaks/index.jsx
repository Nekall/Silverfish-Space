import React, { useState } from 'react';
import SubNavbar from 'components/SubNavbar';
import link from '../../assets/images/link.svg';
import copy from '../../assets/images/copy.svg';
import hudposition from '../../assets/images/VanillaTweaks/hudposition.png';

const VanillaTweaks = () => {

  let [x, setX] = useState(0);
  let [y, setY] = useState(0);
  let [z, setZ] = useState(0);
  let [hours, setHours] = useState("06:45")
  let [direction, setDirection] = useState("N")

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
          confirm.classList.add("isCopy")
          setInterval(function(){ confirm.classList.remove("isCopy"); }, 1700);
      })
    }
  }

return (
  <div className="container">
    <SubNavbar />
    <div className="content">
      <h2><a target="_blank" rel="noreferrer" href="https://vanillatweaks.net/">Vanilla Tweaks<img className="link" src={link} alt="lien" /></a></h2>
      ―
      <p className="bold">Coordinates HUD</p>
      <p>Ce petit datapack vous permet d'avoir toujours les coordonnées, la direction et l'heure du jeu toujours à porté de mains.</p>
      <div>
        <p className="hudposition">XYZ: <span className="x">{x}</span>  <span className="y">{y}</span>  <span className="z">{z}</span>       <span className="dir">{direction}</span>                      <span className="hours">{hours}</span></p>
        <img className="hudpos-img" src={hudposition} alt="hudposition" />
      </div>
      <div className="copy-hud-cmd" onClick={() => copyCmd()}>/trigger ch_toggle<img className="link" src={copy} alt="copie commande" /></div>
      ―
      <p className="bold">Armors Statues</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum.
      </p>
      ―
      <p className="bold">Cauldron Concrete</p>
      <p>
        Jetes la poudre de concrete directement dans un chaudron rempli d'eau pour le transformer en concrete durci.
        L'eau ne sera pas consommée. Tu peux jeter un bloc ou directement un stack dans le chaudron.
      </p>
      ―
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
