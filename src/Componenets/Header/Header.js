import { Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Heading>
      <NavLink to="/">
        <p>Piper Jarrett</p>
      </NavLink>
      <NavLink to="/about">
        <p>About</p>
      </NavLink>
      <NavLink to="/projects">
        <p>Projects</p>
      </NavLink>
      <p>
        <a href={process.env.PUBLIC_URL + "Piper Jarrett Resume.pdf"} download>
          Download CV
        </a>
      </p>
    </Heading>
  );
};

export default Header;
