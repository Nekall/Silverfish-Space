import neka from "../../data/advancements/405f1f09-4c9e-49d0-992b-7bddb8d19e16.json";
import jok from "../../data/advancements/92a5948f-b552-46ad-b92b-1f17c7e062c2.json";
//import oni from "../../data/advancements/e76a0df3-34e9-4a65-a2c4-68846c130d54.json";
//import meri from "../../data/advancements/bbd3df60-4062-46fe-8837-8ab02402971a.json";
//import leone from "../../data/advancements/9d60c4d3-b472-4420-8215-60621cabdfc1.json";


const TopAdvancements = () => {

  let nekaSize = Object.keys(neka).length;
  let nekaCheckComplet = 0;
  for(let i = 0; i < nekaSize ;i++){if(neka[Object.keys(neka)[i]].done){nekaCheckComplet++;}}


  let jokSize = Object.keys(jok).length;
  let jokCheckComplet = 0;
  for(let i = 0; i < jokSize ;i++){if(jok[Object.keys(jok)[i]].done){jokCheckComplet++;}}

  const players = [
    {
      name : "LilNeka",
      size : Object.keys(neka).length,
      check : nekaCheckComplet
    },
    {
      name : "_Jok_",
      size : Object.keys(jok).length,
      check : jokCheckComplet
    }
  ];

  return(
    <div className="top-advancements content">
      <h2>WORK IN PROGRESS. . . </h2>
      <p>Page Classements des joueurs dans la réalisation des haut-faits !</p>
      <p>(Mise à jour des données : 06/01/2022 - 19h17)</p>
      <hr/>
      {players && players.map((player, index)=>{
        console.log(player.name);
        return (
          <div key={Math.random()}>
            <p className="bold">{player.name}</p>
            <p>Haut-faits débloqués : {player.size} .</p>
            <p>{player.check} complétés sur {player.size}.</p>
            <hr/>
          </div>
        )
      })}
    </div>
  )
};
export default TopAdvancements;
