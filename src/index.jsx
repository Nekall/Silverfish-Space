import React from "react";
import ReactDOM from 'react-dom';
import './style/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Home from 'pages/Home'
import Datapacks from 'pages/Datapacks'
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
import VanillaTweaks from 'pages/VanillaTweaks';

const App = () => {

  return (
    <div>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/datapacks" exact>
              <Datapacks />
            </Route>
            <Route path="/datapacks/iron-furnaces">
              <IronFurnaces />
            </Route>
            <Route path="/datapacks/better-beacons">
              <BetterBeacons />
            </Route>
            <Route path="/datapacks/better-elytra">
              <BetterElytra />
            </Route>
            <Route path="/datapacks/blaze-and-caves-advancements">
              <BlazeAndCavesAdvancements />
            </Route>
            <Route path="/datapacks/bonsai-pots">
              <BonsaiPots />
            </Route>
            <Route path="/datapacks/invisible-frames">
              <InvisibleFrames />
            </Route>
            <Route path="/datapacks/joshs-more-foods">
              <JoshsMoreFoods />
            </Route>
            <Route path="/datapacks/miniblock-traders">
              <MiniblockTraders />
            </Route>
            <Route path="/datapacks/missing-vanilla-recipes">
              <MissingVanillaRecipes />
            </Route>
            <Route path="/datapacks/netherite-bow">
              <NetheriteBow />
            </Route>
            <Route path="/datapacks/quarry-vanilla">
              <QuarryVanilla />
            </Route>
            <Route path="/datapacks/rare-mobs">
              <RareMobs />
            </Route>
            <Route path="/datapacks/vanilla-tweaks">
              <VanillaTweaks />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
