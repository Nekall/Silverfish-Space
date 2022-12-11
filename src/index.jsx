import React from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopAdvancements from "pages/TopAdvancements";
import Error from "pages/Error";
import HomeBanner from "components/HomeBanner";
import Banner from "components/Banner";
import download from "assets/images/download.svg";

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
          <div className="btn-download">
            <p className="dwnld">Télécharger le ressource pack <img className="download" src={download} alt="lien" /></p>
            <p className="resolution"><a href="/Silverfish-Infesting-Space_x16ressourcepack.zip" download rel="noopener noreferrer" target="_blank">Résolution 16 pixels</a></p>
            <p className="resolution"><a href="/Silverfish-Infesting-Space_x32ressourcepack.zip" download rel="noopener noreferrer" target="_blank">Résolution 32 pixels</a></p>
          </div>
          <Routes>
            <Route path="/" element={<HomeBanner />} />
            <Route path="/top-advancements" element={<><Banner /><TopAdvancements /></>} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
