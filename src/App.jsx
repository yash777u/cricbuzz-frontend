// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import MatchesComponent from "./Components/MatchesComponent";
import "./index.css"; // Ensure you import the CSS file
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<MatchesComponent/>} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
};

export default App;
