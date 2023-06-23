import { useState } from "react";

// Assets
import leverUp from "../../assets/images/lever-up.webp";
import levelDown from "../../assets/images/lever-down.webp";
import lampOn from "../../assets/images/lamp-on.webp";
import lampOff from "../../assets/images/lamp-off.webp";
import ironBlock from "../../assets/images/iron-block.webp";
import silverfishGrey from "../../assets/images/silverfish-grey.webp";

// Players
import neka from "../../data/advancements/405f1f09-4c9e-49d0-992b-7bddb8d19e16.json";
import jok from "../../data/advancements/92a5948f-b552-46ad-b92b-1f17c7e062c2.json";
import oni from "../../data/advancements/e76a0df3-34e9-4a65-a2c4-68846c130d54.json";
import meri from "../../data/advancements/bbd3df60-4062-46fe-8837-8ab02402971a.json";
import leone from "../../data/advancements/9d60c4d3-b472-4420-8215-60621cabdfc1.json";
import lola from "../../data/advancements/7ad20bd8-b89c-44d0-9418-e36f5514086f.json";
import fenox from "../../data/advancements/9e967186-cf49-403d-8ccf-ef1d1e8097a1.json";
import baka from "../../data/advancements/d0c9e959-bbae-45e9-9ccb-62931f4b218d.json";
import timestamp from "../../data/advancements/timestamp.json";

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const allAchievements = 1271;

  const CountCompletedAchievements = (size, achievements, check) => {
    for (let i = 0; i < size; i++) { if (achievements[Object.keys(achievements)[i]].done) { check++; } }
    return check;
  }

  const players = [
    {
      name: "LilNeka",
      size: Object.keys(neka).length,
      check: CountCompletedAchievements(Object.keys(neka).length, neka, 0)
    },
    {
      name: "_Jok_",
      size: Object.keys(jok).length,
      check: CountCompletedAchievements(Object.keys(jok).length, jok, 0)
    },
    {
      name: "Merionis",
      size: Object.keys(meri).length,
      check: CountCompletedAchievements(Object.keys(meri).length, meri, 0)
    },
    {
      name: "Leone_e",
      size: Object.keys(leone).length,
      check: CountCompletedAchievements(Object.keys(leone).length, leone, 0)
    },
    {
      name: "OnisukeTheNeko",
      size: Object.keys(oni).length,
      check: CountCompletedAchievements(Object.keys(oni).length, oni, 0)
    },
    {
      name: "Lolaocpk",
      size: Object.keys(lola).length,
      check: CountCompletedAchievements(Object.keys(lola).length, lola, 0)
    },
    {
      name: "Fenoxsa",
      size: Object.keys(fenox).length,
      check: CountCompletedAchievements(Object.keys(fenox).length, fenox, 0)
    },
    {
      name: "Bak_HatamHa",
      size: Object.keys(baka).length,
      check: CountCompletedAchievements(Object.keys(baka).length, baka, 0)
    }
  ];

  players.sort((a, b) => (a.check > b.check ? -1 : 1))

  return (
    <main>
      <div className="__container">
        <img className="__logo" src={silverfishGrey} alt="SIS title" />
        <div className="__update_date">Dernière mise à jour: {timestamp.time_stamp}</div>
        <table className="__achievements">
          <tbody>
            {players && players.map((player, index) =>
              <tr className={~~(player.check * 100 / allAchievements) >= 100 ? "__player __win" : "__player"} key={`player-${index}`}>
                <td>
                  <img src={`https://mineskin.eu/helm/${player.name}/25.png`} alt="head player" />
                </td>
                <td className="__nickname">{player.name}</td>
                <td className="__achievement_nb">{~~(player.check * 100 / allAchievements)}%</td>
              </tr>)}
          </tbody>
        </table>
        <div className="__actuation_lock">
          <img className="__lever" src={isActive ? leverUp : levelDown} alt="lever" onClick={() => setIsActive(!isActive)} />
          <img className="__iron_block" src={ironBlock} alt="iron block" />
          <img className="__lamp_block" src={isActive ? lampOn : lampOff} alt="lamp block" />
        </div>
      </div>
    </main>
  )
};

export default Home;
