import "./Home.css";
import profileImg from "../../assets/profileImg.JPG";
import githubImg from "../../assets/github.png";
import gmailImg from "../../assets/gmail.png";
import linkedinImg from "../../assets/linkedin.png";

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
const Home = () => {
  const openGithub = () => {
    window.open("https://github.com/piperjarrett");
  };
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/piper-jarrett-418526203/");
  };
  const openEmail = () => {
    window.open("mailto:piper.monet01@gmail.com?");
  };
  return (
    <div className="home">
      <div className="home-info">
        <h1>Piper Jarrett</h1>
        <p>
          {" "}
          Software Developer and Problem Solving Enthusiast with a passion for
          finding the most efficient and effective solution to complex problems.
          With a background in Mechanical Engineering, I bring a unique
          perspective and approach to software development.
        </p>
        <div className="home-images">
          <img src={githubImg} onClick={openGithub} />

          <img src={gmailImg} onClick={openEmail} />

          <img src={linkedinImg} onClick={openLinkedIn} />
        </div>
      </div>
      <img src={profileImg} alt="piper jarrett" className="profile-img" />
      {/* <Card
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
            <Button variant="solid" colorScheme="blue" onClick={openGithub}>
              Github
            </Button>
            <Button variant="solid" colorScheme="blue" onClick={openLinkedIn}>
              Linkedin
            </Button>
            <Button variant="solid" colorScheme="blue" onClick={openEmail}>
              Email
            </Button>
          </CardFooter>
        </Stack>
      </Card> */}
    </div>
  );
};

export default Home;
