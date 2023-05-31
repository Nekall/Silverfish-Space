import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import HomeBanner from "components/HomeBanner";

// Pages
import Error from "pages/Error";

// Styles
import "./style/main.scss";

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
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<HomeBanner />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </main>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
