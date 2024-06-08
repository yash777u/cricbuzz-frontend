// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import cricbuzzLogo from '../assets/cricbuzz.png'; // Import the image

const HeaderComponent = () => {
  return (
    <div>
      <Navbar isBordered isBlurred={false} className="bg-gray-900 text-white">
        <NavbarContent className="hidden sm:flex gap-7" justify="center">
          <NavbarItem>
            <img src={cricbuzzLogo} alt="Cricbuzz Logo" className="h-8 w-auto mt-2" />
          </NavbarItem>
          <NavbarItem isActive> {/* Set All Matches as active */}
            <Link color="foreground" href="#" className="text-white" aria-current="page">
              Matches
            </Link>
          </NavbarItem>
          <NavbarItem> {/* Remove isActive from All Teams */}
            <Link href="#" className="text-white">
              All Teams
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="text-white">
              Players Stats
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default HeaderComponent;
