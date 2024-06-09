// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import cricbuzzLogo from "../assets/cricbuzz.png"; // Import the image
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-hooks/rules-of-hooks

const HeaderComponent = () => {
  const navigate = useNavigate();

  function homeRoute() {
    navigate("/");
  }

  function allTeamsRoutes() {
    navigate("/all-teams");
  }

  function playerStatsRoutes(){
    navigate("/players");
  }

  function aboutMeRoutes(){
    navigate("/about-me");
  }

  return (
    <div>
      <Navbar isBordered isBlurred={false} className="bg-gray-900 text-white">
        <NavbarContent className="hidden sm:flex gap-7" justify="center">
          <NavbarItem >
            <img
              src={cricbuzzLogo}
              alt="Cricbuzz Logo"
              className="h-8 w-auto mt-2"
            />
          </NavbarItem>
          <NavbarItem isActive>
            {" "}
            {/* Set All Matches as active */}
            <Link
              color="foreground"
              href="#"
              className="text-white"
              aria-current="page"
              onClick={homeRoute}
            >
              Matches
            </Link>
          </NavbarItem>
          <NavbarItem>
            {" "}
            {/* Remove isActive from All Teams */}
            <Link href="#" className="text-white" onClick={allTeamsRoutes} >
              All Teams
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="text-white" onClick={playerStatsRoutes} >
              Players Stats
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="text-white" onClick={aboutMeRoutes} >
              About Me
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default HeaderComponent;
