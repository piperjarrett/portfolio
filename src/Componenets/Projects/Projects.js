import "./Projects.css";
import canineCupidLogo from "../../assets/canineCupidLogo.png";
import cocktailCreator from "../../assets/cocktailCreator.png";
import resipeLogo from "../../assets/resipeLogo.png";
import {
  Button,
  Card,
  CardBody,
  Image,
  Heading,
  Stack,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";
const Projects = () => {
  const openResipe = (event) => {
    if (event.target.innerText === "Deployed Link") {
      window.open("https://re-sip-e.netlify.app/");
    } else {
      window.open("https://github.com/piperjarrett/re-sip-e_fe");
    }
  };

  const openCocktailCreator = (event) => {
    if (event.target.innerText === "Deployed Link") {
      window.open("https://cocktail-creator.vercel.app/");
    } else {
      window.open("https://github.com/piperjarrett/cocktail-creator");
    }
  };

  const openCanineCupid = (event) => {
    if (event.target.innerText === "Deployed Link") {
      window.open("https://canine-cupid-forsethnico.vercel.app/");
    } else {
      window.open("https://github.com/piperjarrett/canine-cupid");
    }
  };

  return (
    <div className="projects-page">
      <div className="projects-about">
        <h1>Projects</h1>
        <p>
          Here is a showcase of three of my most recent projects. I worked in
          both group and independently to complete these.
        </p>
      </div>
      <div className="wrapper">
        <div className="projects-media">
          <div className="layer">
            <p className="img__description">Re-sip-e</p>
            <p>
              This application helps bars easily maintain, modify, and search
              through their collection of drinks. It was created with both a
              front-end and back-end team of Turing students utilizing React,
              Ruby on Rails, and GraphQL.
            </p>
            <div className="buttons" spacing="2">
              <button onClick={(event) => openResipe(event)}>Repo Link</button>
              <button onClick={(event) => openResipe(event)}>
                Deployed Link
              </button>
            </div>
          </div>
          <img className="about-image" src={resipeLogo} />
        </div>
        <div className="projects-media">
          <div className="layer">
            <p className="img__description">Canine Cupid</p>
            <p>
              While working on a team of three, the objective of this project
              was to learn a new language on our our and my team decide to learn
              TypeScript
            </p>
            <div className="buttons" spacing="2">
              <button onClick={(event) => openCanineCupid(event)}>
                Repo Link
              </button>
              <button onClick={(event) => openCanineCupid(event)}>
                Deployed Link
              </button>
            </div>
          </div>
          <img className="about-image" src={canineCupidLogo} />
        </div>
        <div className="projects-media">
          <div className="layer">
            <p className="img__description">Cocktail-creator</p>
            <p>
              This application helps bars easily maintain, modify, and search
              through their collection of drinks. It was created with both a
              front-end and back-end team of Turing students utilizing React,
              Ruby on Rails, and GraphQL.
            </p>
            <div className="buttons" spacing="2">
              <button onClick={(event) => openCocktailCreator(event)}>
                Repo Link
              </button>
              <button onClick={(event) => openCocktailCreator(event)}>
                Deployed Link
              </button>
            </div>
          </div>
          <img className="about-image" src={cocktailCreator} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
