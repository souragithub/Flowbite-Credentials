"use client";
import { Nav, Navleft, Logo, Imagecomponent, Title } from "../styles/NavbarMenu.styled";
import {
  Links,
  NavLink,
  NavRight,
  Button1,
  Button2,
} from "../styles/NavbarMenu.styled";
import logo from "../../public/favicon.svg";

export const NavbarMenu = () => {
  return (
    <Nav>
      <Navleft>
        <Logo>
          <Imagecomponent src={logo} alt="flowbite logo error" />
          <Title href="#">Flowbite</Title>
        </Logo>
        <Links>
          <NavLink href="#">Company</NavLink>
          <NavLink href="#">Marketplace</NavLink>
          <NavLink href="#">Features</NavLink>
          <NavLink href="#">Team</NavLink>
          <NavLink href="#">Contact</NavLink>
        </Links>
      </Navleft>
      <NavRight>
        <Button1>Log In</Button1>
        <Button2>Get Started</Button2>
      </NavRight>
    </Nav>
  );
};