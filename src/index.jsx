import React from "react";
import ReactDOM from 'react-dom';
import './style/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Datapacks from 'pages/Datapacks';
import TopAdvancements from 'pages/TopAdvancements';
import IronFurnaces from 'pages/IronFurnaces';
import BetterBeacons from 'pages/BetterBeacons';
import BetterElytra from 'pages/BetterElytra';
import BlazeAndCavesAdvancements from 'pages/BlazeAndCavesAdvancements';
import BonsaiPots from 'pages/BonsaiPots';
import InvisibleFrames from 'pages/InvisibleFrames';
import JoshsMoreFoods from 'pages/JoshsMoreFoods';
import MiniblockTraders from 'pages/MiniblockTraders';
import MissingVanillaRecipes from 'pages/MissingVanillaRecipes';
import NetheriteBow from 'pages/NetheriteBow';
import QuarryVanilla from 'pages/QuarryVanilla';
import RareMobs from 'pages/RareMobs';
import Error from 'pages/Error';
import VanillaTweaks from 'pages/VanillaTweaks';
import HomeBanner from 'components/HomeBanner';
import Banner from 'components/Banner';

const App = () => {
  console.log(`
                                         _.oo.
                 _.u[[/;:,.         .odMMMMMM'
              .o888UU[[[/;:-.  .o@P^    MMM^
             oN88888UU[[[/;::-.        dP^
            dNMMNN888UU[[[/;:--.   .o@P^
           ,MMMMMMN888UU[[/;::-. o@^
           NNMMMNN888UU[[[/~.o@P^
           888888888UU[[[/o@^-..
          oI8888UU[[[/o@P^:--..
       .@^  YUU[[[/o@^;::---..
     oMP     ^/o@P^;:::---..
  .dMMM    .o@^ ^;::---...
 dMMMMMMM@^'       '^^^^
YMMMUP^
 ^^
`)

  return (
    <div>
      <Router>
        <main>
          <a className="btn-download" href="/Silverfish-infesting-space-ressourcepack.zip" download rel="noopener noreferrer" target="_blank">
           Télécharger le ressource pack
          </a>
          <Switch>
            <Route path="/" exact>
              <HomeBanner />
            </Route>
            <Route path="/datapacks" exact>
              <Banner />
              <Datapacks />
            </Route>
            <Route path="/datapacks/iron-furnaces">
              <Banner />
              <IronFurnaces />
            </Route>
            <Route path="/datapacks/better-beacons">
              <Banner />
              <BetterBeacons />
            </Route>
            <Route path="/datapacks/better-elytra">
              <Banner />
              <BetterElytra />
            </Route>
            <Route path="/datapacks/blaze-and-caves-advancements">
              <Banner />
              <BlazeAndCavesAdvancements />
            </Route>
            <Route path="/datapacks/bonsai-pots">
              <Banner />
              <BonsaiPots />
            </Route>
            <Route path="/datapacks/invisible-frames">
              <Banner />
              <InvisibleFrames />
            </Route>
            <Route path="/datapacks/joshs-more-foods">
              <Banner />
              <JoshsMoreFoods />
            </Route>
            <Route path="/datapacks/miniblock-traders">
              <Banner />
              <MiniblockTraders />
            </Route>
            <Route path="/datapacks/missing-vanilla-recipes">
              <Banner />
              <MissingVanillaRecipes />
            </Route>
            <Route path="/datapacks/netherite-bow">
              <Banner />
              <NetheriteBow />
            </Route>
            <Route path="/datapacks/quarry-vanilla">
              <Banner />
              <QuarryVanilla />
            </Route>
            <Route path="/datapacks/rare-mobs">
              <Banner />
              <RareMobs />
            </Route>
            <Route path="/datapacks/vanilla-tweaks">
              <Banner />
              <VanillaTweaks />
            </Route>
            <Route path="/top">
              <Banner />
              <TopAdvancements />
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
