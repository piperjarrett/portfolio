import "./Projects.css";
const Projects = () => {
  const openResipe = () => {
    window.open("https://re-sip-e.netlify.app/");
  };

  const openCocktailCreator = () => {
    window.open("https://cocktail-creator.vercel.app/");
  };

  const openCanineCupid = () => {
    window.open("https://canine-cupid-forsethnico.vercel.app/");
  };

  return (
    <div className="projects-page">
      <h2>Projects</h2>
      <div className="projects-div">
        <h3 onClick={() => openResipe()}>Resipe</h3>

        <h3 onClick={() => openCocktailCreator()}>Cocktail Creator</h3>

        <h3 onClick={() => openCanineCupid()}>Canine Cupid</h3>
      </div>
    </div>
  );
};

export default Projects;
