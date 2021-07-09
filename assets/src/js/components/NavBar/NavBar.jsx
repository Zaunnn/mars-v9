import React from "react";
import {
  Nav,
  NavContainer,
  NavList,
  NavButton,
  NavIcon,
  NavItem,
  Button,
  Img,
} from "./NavBarElements.jsx";

const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavIcon href="/">
          <Img src={"/assets/src/images/favicon.png"}></Img>
        </NavIcon>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>Services</NavItem>
          <NavItem>About</NavItem>
        </NavList>
        <NavButton>
          <Button> Sign up</Button>
        </NavButton>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
