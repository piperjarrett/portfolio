import { Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const downloadCV = () => {
    // using Java Script method to get PDF file
    // fetch().then((response) => {
    //   response.blob().then((blob) => {
    //     // Creating new object of PDF file
    //     const fileURL = window.URL.createObjectURL(blob);
    //     // Setting various property values
    //     let alink = document.createElement("a");
    //     alink.href = fileURL;
    //     alink.download = "Piper Jarrett Resume.pdf";
    //     alink.click();
    //   });
    // });
  };
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
      <a href={process.env.PUBLIC_URL + "Piper Jarrett Resume.pdf"} download>
        Download CV
      </a>
    </Heading>
  );
};

export default Header;
