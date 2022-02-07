import { NavLink } from "react-router-dom";
import neka from "../../data/advancements/405f1f09-4c9e-49d0-992b-7bddb8d19e16.json";
import jok from "../../data/advancements/92a5948f-b552-46ad-b92b-1f17c7e062c2.json";
//import oni from "../../data/advancements/e76a0df3-34e9-4a65-a2c4-68846c130d54.json";
import meri from "../../data/advancements/bbd3df60-4062-46fe-8837-8ab02402971a.json";
import leone from "../../data/advancements/9d60c4d3-b472-4420-8215-60621cabdfc1.json";
import lb from "../../data/advancements/0da1efca-9577-4cd3-95db-bab5f4b2fdb8.json";
import ewi from "../../data/advancements/d4ebaebf-8cc0-4319-bea0-22a4397a498c.json";
import timestamp from "../../data/advancements/timestamp.json";

const TopAdvancements = () => {

  function CountCompletedAchievements(size, achievements, check){
    for(let i = 0; i < size ;i++){if(achievements[Object.keys(achievements)[i]].done){check++;}}
    return check;
  }

  const players = [
    {
      name : "LilNeka",
      size : Object.keys(neka).length,
      check : CountCompletedAchievements(Object.keys(neka).length, neka, 0)
    },
    {
      name : "_Jok_",
      size : Object.keys(jok).length,
      check : CountCompletedAchievements(Object.keys(jok).length, jok, 0)
    },
    {
      name : "Merionis",
      size : Object.keys(meri).length,
      check : CountCompletedAchievements(Object.keys(meri).length, meri, 0)
    },
    {
      name : "Leone_e",
      size : Object.keys(leone).length,
      check : CountCompletedAchievements(Object.keys(leone).length, leone, 0)
    },
    {
      name : "Los_Bedos",
      size : Object.keys(lb).length,
      check : CountCompletedAchievements(Object.keys(lb).length, lb, 0)
    },
    {
      name : "Ewigael",
      size : Object.keys(ewi).length,
      check : CountCompletedAchievements(Object.keys(ewi).length, ewi, 0)
    }
  ];

  players.sort((a, b) => (a.check > b.check ? -1 : 1))

  return(
    <div className="top-advancements content">
    <div><NavLink className="back-btn" to="/">◀ Retour</NavLink></div>
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
