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
      <Heading>Projects</Heading>
      <div className="projects-container">
        <Card maxW="sm">
          <CardBody>
            <Image
              src={resipeLogo}
              alt="Resipe Website Logo"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Resipe</Heading>
              <Text>
                This application helps bars easily maintain, modify, and search
                through their collection of drinks. It was created with both a
                front-end and back-end team of Turing students utilizing React,
                Ruby on Rails, and GraphQL.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={(event) => openResipe(event)}
              >
                Repo Link
              </Button>
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={(event) => openResipe(event)}
              >
                Deployed Link
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={canineCupidLogo}
              alt="Canine Cupid Website Logo"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Canine Cupid</Heading>
              <Text>
                While working on a team of three, the objective of this project
                was to learn a new language on our our and my team decide to
                learn TypeScript
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                onClick={(event) => openCanineCupid(event)}
                variant="solid"
                colorScheme="blue"
              >
                Repo Link
              </Button>
              <Button
                onClick={(event) => openCanineCupid(event)}
                variant="ghost"
                colorScheme="blue"
              >
                Deployed Link
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={cocktailCreator}
              alt="Cocktail Creator Website Logo"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Cocktail Creator</Heading>
              <Text>
                This application helps bars easily maintain, modify, and search
                through their collection of drinks. It was created with both a
                front-end and back-end team of Turing students utilizing React,
                Ruby on Rails, and GraphQL.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={(event) => openCocktailCreator(event)}
              >
                Repo Link
              </Button>
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={(event) => openCocktailCreator(event)}
              >
                Deployed Link
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
