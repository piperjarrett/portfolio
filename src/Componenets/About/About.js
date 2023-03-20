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
        <h4>About Me</h4>
        <p>
          Though you can find my technical abilities on my resume, here are some
          others things I enjoy to do other than learn.
        </p>
      </div>
      <h4>Travel</h4>
      <div className="wrapper">
        <div className="media">
          <div className="layer">
            <p className="img__description">+ Seville, Spain</p>
            <p>
              When it comes to amazing archictecture, siestas, and tapas,
              Seville is the place to go!{" "}
            </p>
          </div>
          <img src={spainImg} />
        </div>
        <div className="media">
          <div className="layer">
            <p className="img__description">+ Ios, Greece</p>
            <p>
              Ios, Greece is a beautiful smaller island in the Greek islands
              that has beautiful beaches and even better sunsets
            </p>
          </div>
          <img src={greeceImg} />
        </div>
        <div className="media">
          <div className="layer">
            <p className="img__description">+ Munich, Germany</p>
            <p>
              There are endless explorations in Munich ranging for world
              history, beautiful gardens and you can even catch a live surfing
              session
            </p>
          </div>
          <img src={munichImg} />
        </div>
      </div>
      <h4>Activities</h4>
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
            <p>
              Thai is my 4 year old point lynx siamese cat who loves to nap all
              day run around all night.
            </p>
          </div>
          <img src={thaiImg} />
        </div>
        <div className="media">
          <div className="layer">
            <p className="img__description">Albuquerque, NM </p>
            <p>
              I was born and raised in Albuquerque where they have an annual
              balloon fiesta and the best red and green chile you can find.
            </p>
          </div>
          <img src={abqImg} />
        </div>
        <div className="media">
          <div className="layer">
            <p className="img__description">Texas Tech</p>
            <p>
              I attended Texas Tech University for my Bachelor's Degree and graduated in May 2022. I
              majored in Mechanical Engineering and had so many amazing memories
              from this place.{" "}
            </p>
          </div>
          <img src={texastechimg} />
        </div>
      </div>
    </section>
  );
};

export default About;
