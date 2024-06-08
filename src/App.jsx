// eslint-disable-next-line no-unused-vars
import React from "react";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import MatchesComponent from "./Components/MatchesComponent";
import "./index.css"; // Ensure you import the CSS file
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MatchComponent from "./Components/MatchComponent";

const App = () => {
  return (
    <div className="app-container">
      <HeaderComponent />
        <MatchesComponent />
      <FooterComponent className="footer" />
    </div>
  );
};

export default App;
