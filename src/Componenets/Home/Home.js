import "./Home.css";
import profileImg from "../../assets/profileImg.JPG";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Text,
  Button,
  Heading,
  CardFooter,
} from "@chakra-ui/react";
// import profileImg from "..../public/assets/profileImg";
const Home = () => {
  return (
    <div className="home">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={profileImg}
          alt="piper Jarrett image"
        />

        <Stack>
          <CardBody>
            <Heading size="md">Piper Jarrett</Heading>

            <Text py="2">
              Software Developer and Problem Solving Enthusiast with a passion
              for finding the most efficient and effective solution to complex
              problems. With a background in Mechanical Engineering, I bring a
              unique perspective and approach to software development.
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Github
            </Button>
            <Button variant="solid" colorScheme="blue">
              Linkedin
            </Button>
            <Button variant="solid" colorScheme="blue">
              Email
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      {/* <div className="image">
        <img src="https://photos.google.com/search/_tra_/photo/AF1QipOqEiVbGtJ3lYrkedpYoP1yMzuCyT-aSlO8bBnB" />
      </div>
      <div className="info">
        <h2>Piper Jarrett</h2>
        <p>
          {" "}
          Software Developer and Problem Solving Enthusiast with a passion for
          finding the most efficient and effective solution to complex problems.
          With a background in Mechanical Engineering, I bring a unique
          perspective and approach to software development.
        </p>
      </div> */}
    </div>
  );
};

export default Home;
