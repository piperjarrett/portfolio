import { Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Heading>
      <p>Piper Jarrett</p>
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to="/about">
        <p>About</p>
      </NavLink>
      <NavLink to="/projects">
        <p>Projects</p>
      </NavLink>
      <p>Download CV</p>
    </Heading>
  );
};

export default Header;
