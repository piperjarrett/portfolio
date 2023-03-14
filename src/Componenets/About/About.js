import "./About.css";
import aboutImg from "../../assets/graduationImg.png";
import hikingImg from "../../assets/IMG_0312.jpg";
import greeceImg from "../../assets/greeceImg.JPG";
import spainImg from "../../assets/sevilleImg.jpg";
import munichImg from "../../assets/munichImg.JPG";
import snowboardingImg from "../../assets/snowboardingImg.JPG";
import foodImg from "../../assets/foodImg.jpg";
import greceImg from "../../assets/IMG_3050.jpg";
import thaiImg from "../../assets/IMG_4788.jpg";
import abqImg from "../../assets/abqImg.JPG";
import texastechimg from "../../assets/techImg.JPG";
const About = () => {
  return (
    <section>
      <div className="about">
        <h3>About Me</h3>
        <p>
          Software Developer and Problem Solving Enthusiast with a passion for
          finding the most efficient and effective solution to complex problems.
          With a background in Mechanical Engineering, I bring a unique
          perspective and approach to software development.
        </p>
      </div>
      <h4>My Favorite Places</h4>
      <div className="wrapper">
        <div className="media">
          <div className="layer">
            <p className="img__description">+ Seville, Spain</p>
          </div>
          <img src={spainImg} />
        </div>
        <div className="media">
          <div className="layer">
            <p className="img__description">+ Ios, Greece</p>
          </div>
          <img src={greeceImg} />
        </div>
        <div className="media">
          <div className="layer">
            <p className="img__description">+ Munich, Germany</p>
          </div>
          <img src={munichImg} />
        </div>
      </div>
      <h4>Outside of Learning</h4>
      <div className="wrapper">
        <div className="media">
          <div className="layer">
            <p className="img__description">Reading</p>
          </div>
          <img src={spainImg} />
        </div>
        <div className="media">
          <div className="layer">
            <p className="img__description">Snowboarding</p>
          </div>
          <img src={snowboardingImg} />
        </div>
        <div className="media">
          <div className="layer">
            <p className="img__description">Foodie</p>
          </div>
          <img src={foodImg} />
        </div>
      </div>
      <h4>Near and Dear to My Heart</h4>
      <div className="wrapper">
        <div className="media">
          <div className="layer">
            <p className="img__description">Thai</p>
          </div>
          <img src={thaiImg} />
        </div>
        <div className="media">
          <div className="layer">
            <p className="img__description">Albuquerque, NM </p>
          </div>
          <img src={abqImg} />
        </div>
        <div className="media">
          <div className="layer">
            <p className="img__description">Texas Tech</p>
          </div>
          <img src={texastechimg} />
        </div>
      </div>
      {/* <div className="info">
          <div className="turing-info">
            <h4>Turing School of Software and Design</h4>
            <p>
              I began an intensive bootcamp Turing School of Software and Design
              in July 2022. I worked on noumerous projects ranging from soling
              to a team of 8 people.
            </p>
          </div>
          <img src="hgh" />
        </div> */}
    </section>
  );
};

export default About;
