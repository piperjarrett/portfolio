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
        <h1>About Me</h1>
        <p>
          Though you can find my technical abilities on my resume, here are some
          others things I enjoy to do other than learn.
        </p>
      </div>
      <div className="about-info">
        <h2>Travel</h2>
        <div className="wrapper">
          <div className="media">
            <div className="layer">
              <p className="img__description">+ Seville, Spain</p>
              <p>
                When it comes to amazing archictecture, siestas, and tapas,
                Seville is the place to go!{" "}
              </p>
            </div>
            <img className="about-image" src={spainImg} />
          </div>
          <div className="media">
            <div className="layer">
              <p className="img__description">+ Ios, Greece</p>
              <p>
                Ios, Greece is a beautiful smaller island in the Greek islands
                that has beautiful beaches and even better sunsets
              </p>
            </div>
            <img className="about-image" src={greeceImg} />
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
            <img className="about-image" src={munichImg} />
          </div>
        </div>
        <h2>Activities</h2>
        <div className="wrapper">
          <div className="media">
            <div className="layer">
              <p className="img__description">Reading</p>
            </div>
            <img className="about-image" src={spainImg} />
          </div>
          <div className="media">
            <div className="layer">
              <p className="img__description">Snowboarding</p>
            </div>
            <img className="about-image" src={snowboardingImg} />
          </div>
          <div className="media">
            <div className="layer">
              <p className="img__description">Foodie</p>
            </div>
            <img className="about-image" src={foodImg} />
          </div>
        </div>
        <h2>Near and Dear to My Heart</h2>
        <div className="wrapper">
          <div className="media">
            <div className="layer">
              <p className="img__description">Thai</p>
              <p>
                Thai is my five year old point lynx siamese cat who loves to nap
                all day run around all night.
              </p>
            </div>
            <img className="about-image" src={thaiImg} />
          </div>
          <div className="media">
            <div className="layer">
              <p className="img__description">Albuquerque, NM </p>
              <p>
                I was born and raised in Albuquerque where they have an annual
                balloon fiesta and the best red and green chile you can find.
              </p>
            </div>
            <img className="about-image" src={abqImg} />
          </div>
          <div className="media">
            <div className="layer">
              <p className="img__description">Texas Tech</p>
              <p>
                I attended Texas Tech University for my Bachelor's Degree and
                graduated in May 2022. I majored in Mechanical Engineering and
                had so many amazing memories from this place.{" "}
              </p>
            </div>
            <img className="about-image" src={texastechimg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
