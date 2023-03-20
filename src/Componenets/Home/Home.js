import "./Home.css";
// import profileImg from "..../public/assets/profileImg";
const Home = () => {
  return (
    <div className="home">
      <div className="image">
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
      </div>
    </div>
  );
};

export default Home;
