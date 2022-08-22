import React from "react";

import { ReactComponent as MenuIcon } from "../../Assets/Icons/menu.svg";
import { useAuth } from "../../Providers/Auth";
import * as SideBarStyles from "./styles";

const SideBar = () => {
  const { isMenuOpen, setIsMenuOpen } = useAuth();

  return (
    <>
      <SideBarStyles.Box isOpen={isMenuOpen} />
      <SideBarStyles.Aside isOpen={isMenuOpen}>
        <SideBarStyles.IconBox onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuIcon title="Icone de Menu" />
        </SideBarStyles.IconBox>
        <SideBarStyles.Title>Home</SideBarStyles.Title>
        <SideBarStyles.Title>Who we are</SideBarStyles.Title>
        <SideBarStyles.Title>Contact us</SideBarStyles.Title>
      </SideBarStyles.Aside>
    </>
  );
};

export default SideBar;
