import neka from "../../data/advancements/405f1f09-4c9e-49d0-992b-7bddb8d19e16.json";
import jok from "../../data/advancements/92a5948f-b552-46ad-b92b-1f17c7e062c2.json";
import oni from "../../data/advancements/e76a0df3-34e9-4a65-a2c4-68846c130d54.json";
import meri from "../../data/advancements/bbd3df60-4062-46fe-8837-8ab02402971a.json";
import leone from "../../data/advancements/9d60c4d3-b472-4420-8215-60621cabdfc1.json";
import lb from "../../data/advancements/0da1efca-9577-4cd3-95db-bab5f4b2fdb8.json";
import timestamp from "../../data/advancements/timestamp.json";

const TopAdvancements = () => {

  let nekaSize = Object.keys(neka).length;
  let nekaCheckComplet = 0;
  for(let i = 0; i < nekaSize ;i++){if(neka[Object.keys(neka)[i]].done){nekaCheckComplet++;}}

  let jokSize = Object.keys(jok).length;
  let jokCheckComplet = 0;
  for(let i = 0; i < jokSize ;i++){if(jok[Object.keys(jok)[i]].done){jokCheckComplet++;}}

  let meriSize = Object.keys(meri).length;
  let meriCheckComplet = 0;
  for(let i = 0; i < meriSize ;i++){if(meri[Object.keys(meri)[i]].done){meriCheckComplet++;}}

  let oniSize = Object.keys(oni).length;
  let oniCheckComplet = 0;
  for(let i = 0; i < oniSize ;i++){if(oni[Object.keys(oni)[i]].done){oniCheckComplet++;}}

  let leoneSize = Object.keys(leone).length;
  let leoneCheckComplet = 0;
  for(let i = 0; i < leoneSize ;i++){if(leone[Object.keys(leone)[i]].done){leoneCheckComplet++;}}

  let lbSize = Object.keys(lb).length;
  let lbCheckComplet = 0;
  for(let i = 0; i < lbSize ;i++){if(lb[Object.keys(lb)[i]].done){lbCheckComplet++;}}

  const players = [
    {
      name : "LilNeka",
      size : nekaSize,
      check : nekaCheckComplet
    },
    {
      name : "_Jok_",
      size : jokSize,
      check : jokCheckComplet
    },
    {
      name : "Merionis",
      size : meriSize,
      check : meriCheckComplet
    },
    {
      name : "OnisukeTheNeko",
      size : oniSize,
      check : oniCheckComplet
    },
    {
      name : "Leone_e",
      size : leoneSize,
      check : leoneCheckComplet
    },
    {
      name : "Los_Bedos",
      size : lbSize,
      check : lbCheckComplet
    }
  ];

  players.sort((a, b) => (a.check > b.check ? -1 : 1))

  return(
    <div className="top-advancements content">
      <h2>Classements des joueurs dans la réalisation des haut-faits :</h2>
      <p>(Mise à jour des données : {timestamp.time_stamp})</p>
      <hr/>
      {players && players.map((player, index)=>{
        return (
          <div className="card-player" key={Math.random()}>
            <p className="bold playername">{player.name}</p>
            <p className="unlocked-advancements">Haut-faits débloqués : {player.size} .</p>
            <p><span className="bold">{player.check}</span> complétés sur {player.size}.</p>
            <p>―</p>
          </div>
        )
      })}
    </div>
  )
};
export default TopAdvancements;
