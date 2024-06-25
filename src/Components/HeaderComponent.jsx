import React, { useState } from "react";
import { Link } from "@nextui-org/link";
import cricbuzzLogo from "../assets/cricbuzz.png"; // Import the image
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function homeRoute() {
    navigate("/");
  }

  function allTeamsRoutes() {
    navigate("/all-teams");
  }

  function playerStatsRoutes() {
    navigate("/players");
  }

  function aboutMeRoutes() {
    navigate("/about-me");
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <nav className="bg-gray-900 text-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" onClick={homeRoute} className="flex items-center space-x-3">
            <img
              src={cricbuzzLogo}
              alt="Cricbuzz Logo"
              className="h-12 w-auto"
            />
          </a>
          <button
            type="button"
            className="inline-flex items-center p-1.5 w-10 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${menuOpen ? "block" : "hidden"}`} id="navbar-default">
            <ul className="font-medium flex flex-col pt-1 md:p-0 mt-3 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  color="foreground"
                  href="#"
                  className="block py-2 px-3 text-white md:bg-transparent md:text-white md:p-0"
                  aria-current="page"
                  onClick={homeRoute}
                >
                  Matches
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white md:bg-transparent md:text-white md:p-0"
                  onClick={allTeamsRoutes}
                >
                  All Teams
                </Link>
              </li>
              <li>
                <Link
                  color="foreground"
                  href="#"
                  className="block py-2 px-3 text-white md:bg-transparent md:text-white md:p-0"
                  onClick={playerStatsRoutes}
                >
                  Players Stats
                </Link>
              </li>
              <li>
                <Link
                  color="foreground"
                  href="#"
                  className="block py-2 px-3 text-white md:bg-transparent md:text-white md:p-0"
                  onClick={aboutMeRoutes}
                >
                  About Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
