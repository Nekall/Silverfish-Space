"use client";
import { useState } from "react";
import Image from "next/image";

// Components
import Button from "@/components/button";

// Styles
import styles from "./page.module.css";

// Utils
import { parseMinecraftStats } from "@/utils/minecraftStatsParser";

// Data
import _Jok_ from "../../data/stats/92a5948f-b552-46ad-b92b-1f17c7e062c2.json";
import LilNeka from "../../data/stats/405f1f09-4c9e-49d0-992b-7bddb8d19e16.json";
import Leone_e from "../../data/stats/9d60c4d3-b472-4420-8215-60621cabdfc1.json";
import Merionis from "../../data/stats/bbd3df60-4062-46fe-8837-8ab02402971a.json";
import Zukku_tv from "../../data/stats/cef4d159-40af-45bd-a594-ab839094ad2f.json";
import Bak_HatamHa from "../../data/stats/d0c9e959-bbae-45e9-9ccb-62931f4b218d.json";
import players from "../../data/whitelist.json";

// Types
type Stats = {};

const Statistics = () => {
  const dataPlayers = {
    _Jok_: _Jok_ as unknown as Record<string, Stats>,
    LilNeka: LilNeka as unknown as Record<string, Stats>,
    Leone_e: Leone_e as unknown as Record<string, Stats>,
    Merionis: Merionis as unknown as Record<string, Stats>,
    Zukku_tv: Zukku_tv as unknown as Record<string, Stats>,
    Bak_HatamHa: Bak_HatamHa as unknown as Record<string, Stats>,
  };

  const [selectedPlayer, setSelectedPlayer] = useState();
  const [selectedStats, setSelectedStats] = useState();
  const [error, setError] = useState(false);

  const selectPlayer = (username: any) => {
    setSelectedPlayer(username);
    console.info("selectPlayer");
    if (dataPlayers[username]) {
      setSelectedStats(parseMinecraftStats(dataPlayers[username]));
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.statistics}>
      <div className={styles.title}>
        <h1>Statistics</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.scrollable_sections}>
          <div className={styles.players}>
            <ul>
              {players.map(({ name, uuid }, index) => {
                return (
                  <li
                    key={`${name}-card`}
                    className={styles.player_card}
                    onClick={() => selectPlayer(name)}
                    title={uuid}
                  >
                    <div className={styles.player_head}>
                      <Image
                        src={`https://mc-heads.net/avatar/${name}`}
                        alt={`Minecraft head of ${name}`}
                        width={65}
                        height={65}
                        priority
                      />
                    </div>
                    <p>{name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.stats_section}>
            {selectedStats && (
              <>
                <div className={styles.selected_player}>
                  <div>
                    <Image
                      src={`https://mc-heads.net/avatar/${selectedPlayer}`}
                      alt={`Minecraft head of ${selectedPlayer}`}
                      width={75}
                      height={75}
                      priority
                    />
                  </div>
                  <div className={styles.username}>
                    <p>{selectedPlayer}</p>
                  </div>
                </div>
                <div className={styles.stats}>
                  {selectedStats &&
                    (error ? (
                      <div>Data not found</div>
                    ) : (
                      <div>
                        <div className={styles.generals}>
                          <h2>Generals</h2>
                          <table>
                            <tbody>
                              <tr>
                                <th>Jumps</th>
                                <td>{selectedStats?.jumps}</td>
                              </tr>
                              <tr>
                                <th>Mob Kills</th>
                                <td>{selectedStats?.mobKills}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className={styles.damage}>
                          <h2>Damages</h2>
                          <table>
                            <tbody>
                              <tr>
                                <th>Damage Blocked By Shield</th>
                                <td>{selectedStats?.damageBlockedByShield}</td>
                              </tr>
                              <tr>
                                <th>Damage Dealt</th>
                                <td>{selectedStats?.damageDealt}</td>
                              </tr>
                              <tr>
                                <th>Damage Taken</th>
                                <td>{selectedStats?.damageTaken}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className={styles.distance}>
                          <h2>Distance</h2>
                          <table>
                            <tbody>
                              <tr>
                                <th>Boated</th>
                                <td>{selectedStats?.distance.boated}</td>
                              </tr>
                              <tr>
                                <th>Climbed</th>
                                <td>{selectedStats?.distance.climbed}</td>
                              </tr>
                              <tr>
                                <th>Climbed</th>
                                <td>{selectedStats?.distance.climbed}</td>
                              </tr>
                              <tr>
                                <th>Fallen</th>
                                <td>{selectedStats?.distance.fallen}</td>
                              </tr>
                              <tr>
                                <th>Flown</th>
                                <td>{selectedStats?.distance.flown}</td>
                              </tr>
                              <tr>
                                <th>Flown</th>
                                <td>{selectedStats?.distance.flown}</td>
                              </tr>
                              <tr>
                                <th>Horse</th>
                                <td>{selectedStats?.distance.horse}</td>
                              </tr>
                              <tr>
                                <th>Sprinted</th>
                                <td>{selectedStats?.distance.sprinted}</td>
                              </tr>
                              <tr>
                                <th>Swum</th>
                                <td>{selectedStats?.distance.swum}</td>
                              </tr>
                              <tr className={styles.total}>
                                <th>TOTAL</th>
                                <td>{selectedStats?.distance.total}</td>
                              </tr>
                              <tr>
                                <th>Walk On Water</th>
                                <td>{selectedStats?.distance.walkOnWater}</td>
                              </tr>
                              <tr>
                                <th>Walk Under Water</th>
                                <td>
                                  {selectedStats?.distance.walkUnderWater}
                                </td>
                              </tr>
                              <tr>
                                <th>Walked</th>
                                <td>{selectedStats?.distance.walked}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className={styles.interactions}>
                          <h2>Interactions</h2>

                          <table>
                            <tbody>
                              <tr>
                                <th>Animals Bred</th>
                                <td>
                                  {selectedStats?.interactions.animalsBred}
                                </td>
                              </tr>
                              <tr>
                                <th>Anvil</th>
                                <td>{selectedStats?.interactions.anvil}</td>
                              </tr>
                              <tr>
                                <th>Beacon</th>
                                <td>{selectedStats?.interactions.beacon}</td>
                              </tr>
                              <tr>
                                <th>Blast Furnace</th>
                                <td>
                                  {selectedStats?.interactions.blastFurnace}
                                </td>
                              </tr>
                              <tr>
                                <th>Brewingstand</th>
                                <td>
                                  {selectedStats?.interactions.brewingstand}
                                </td>
                              </tr>
                              <tr>
                                <th>Crafting Table</th>
                                <td>
                                  {selectedStats?.interactions.craftingTable}
                                </td>
                              </tr>
                              <tr>
                                <th>Enchant Item</th>
                                <td>
                                  {selectedStats?.interactions.enchantItem}
                                </td>
                              </tr>
                              <tr>
                                <th>Fish Caught</th>
                                <td>
                                  {selectedStats?.interactions.fishCaught}
                                </td>
                              </tr>
                              <tr>
                                <th>Furnace</th>
                                <td>{selectedStats?.interactions.furnace}</td>
                              </tr>
                              <tr>
                                <th>Grindstone</th>
                                <td>
                                  {selectedStats?.interactions.grindstone}
                                </td>
                              </tr>
                              <tr>
                                <th>Open Barrel</th>
                                <td>
                                  {selectedStats?.interactions.openBarrel}
                                </td>
                              </tr>
                              <tr>
                                <th>Open Chest</th>
                                <td>{selectedStats?.interactions.openChest}</td>
                              </tr>
                              <tr>
                                <th>Open Enderchest</th>
                                <td>
                                  {selectedStats?.interactions.openEnderchest}
                                </td>
                              </tr>
                              <tr>
                                <th>Open ShulkerBox</th>
                                <td>
                                  {selectedStats?.interactions.openShulkerBox}
                                </td>
                              </tr>
                              <tr>
                                <th>Smithing Table</th>
                                <td>
                                  {selectedStats?.interactions.smithingTable}
                                </td>
                              </tr>
                              <tr>
                                <th>Smoker</th>
                                <td>{selectedStats?.interactions.smoker}</td>
                              </tr>
                              <tr>
                                <th>Talked To Villager</th>
                                <td>
                                  {selectedStats?.interactions.talkedToVillager}
                                </td>
                              </tr>
                              <tr>
                                <th>Traded With Villager</th>
                                <td>
                                  {
                                    selectedStats?.interactions
                                      .tradedWithVillager
                                  }
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className={styles.play_time}>
                          <h2>Play time</h2>
                          <table>
                            <tbody>
                              <tr>
                                <th>Ticks</th>
                                <td>{selectedStats?.playTime.ticks}</td>
                              </tr>
                              <tr>
                                <th>Seconds</th>
                                <td>{selectedStats?.playTime.seconds}</td>
                              </tr>
                              <tr>
                                <th>Minutes</th>
                                <td>{selectedStats?.playTime.minutes}</td>
                              </tr>
                              <tr>
                                <th>Hours</th>
                                <td>{selectedStats?.playTime.hours}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className={styles.time_since_death}>
                          <h2>Time since death</h2>
                          <table>
                            <tbody>
                              <tr>
                                <th>Ticks</th>
                                <td>{selectedStats?.timeSinceDeath.ticks}</td>
                              </tr>
                              <tr>
                                <th>Seconds</th>
                                <td>{selectedStats?.timeSinceDeath.seconds}</td>
                              </tr>
                              <tr>
                                <th>Minutes</th>
                                <td>{selectedStats?.timeSinceDeath.minutes}</td>
                              </tr>
                              <tr>
                                <th>Hours</th>
                                <td>{selectedStats?.timeSinceDeath.hours}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className={styles.time_since_rest}>
                          <h2>Time since rest</h2>
                          <table>
                            <tbody>
                              <tr>
                                <th>Ticks</th>
                                <td>{selectedStats?.timeSinceRest.ticks}</td>
                              </tr>
                              <tr>
                                <th>Seconds</th>
                                <td>{selectedStats?.timeSinceRest.seconds}</td>
                              </tr>
                              <tr>
                                <th>Minutes</th>
                                <td>{selectedStats?.timeSinceRest.minutes}</td>
                              </tr>
                              <tr>
                                <th>Hours</th>
                                <td>{selectedStats?.timeSinceRest.hours}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className={styles.top_crafted}>
                          <h2>Top 5 crafted</h2>
                          <table>
                            <tbody>
                              {selectedStats.topCrafted.map(
                                ({ name, value }: any) => (
                                  <tr key={`${name}-${value}`}>
                                    <th>{name}</th>
                                    <td>{value}</td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                        <div className={styles.top_mined}>
                          <h2>Top 5 mined</h2>
                          <table>
                            <tbody>
                              {selectedStats.topMined.map(
                                ({ name, value }: any) => (
                                  <tr key={`${name}-${value}`}>
                                    <th>{name}</th>
                                    <td>{value}</td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                        <div className={styles.top_picked_up}>
                          <h2>Top 5 picked up</h2>
                          <table>
                            <tbody>
                              {selectedStats.topPickedUp.map(
                                ({ name, value }: any) => (
                                  <tr key={`${name}-${value}`}>
                                    <th>{name}</th>
                                    <td>{value}</td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                        <div className={styles.top_used}>
                          <h2>Top 5 used</h2>
                          <table>
                            <tbody>
                              {selectedStats.topUsed.map(
                                ({ name, value }: any) => (
                                  <tr key={`${name}-${value}`}>
                                    <th>{name}</th>
                                    <td>{value}</td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                        <div className={styles.totals}>
                          <h2>Totals</h2>
                          <table>
                            <tbody>
                              <tr>
                                <th>Blocks Mined</th>
                                <td>{selectedStats?.totals.blocksMined}</td>
                              </tr>
                              <tr>
                                <th>Entities Killed</th>
                                <td>{selectedStats?.totals.entitiesKilled}</td>
                              </tr>
                              <tr>
                                <th>Items Broken</th>
                                <td>{selectedStats?.totals.itemsBroken}</td>
                              </tr>
                              <tr>
                                <th>Items Crafted</th>
                                <td>{selectedStats?.totals.itemsCrafted}</td>
                              </tr>
                              <tr>
                                <th>Items Dropped</th>
                                <td>{selectedStats?.totals.itemsDropped}</td>
                              </tr>
                              <tr>
                                <th>Items PickedUp</th>
                                <td>{selectedStats?.totals.itemsPickedUp}</td>
                              </tr>
                              <tr>
                                <th>Items Used</th>
                                <td>{selectedStats?.totals.itemsUsed}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <Button path={"/"} text={"Back"} size="small" />
      </div>
    </div>
  );
};

export default Statistics;
