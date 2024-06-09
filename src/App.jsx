// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";
import MatchesComponent from "./Components/MatchesComponent";
import "./index.css"; // Ensure you import the CSS file
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MatchComponent from "./Components/MatchComponent";
import AllTeamsComponent from "./Components/AllTeamsComponent";
import PlayerComponent from "./Components/PlayerComponent";
import AboutMeComponent from "./Components/AboutMeComponent";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<MatchesComponent />} />
          {/* Use a dynamic path segment for match details */}
          <Route path="/matches/:matchId" element={<MatchComponent />} />
          <Route path="/all-teams" element={<AllTeamsComponent />} />
          <Route path="/players" element={<PlayerComponent />} />
          <Route path="/about-me" element={<AboutMeComponent />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
