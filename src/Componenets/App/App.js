import Home from "../Home/Home";
import Header from "../Header/Header";
import { Route } from "react-router-dom";
import Projects from "../Projects/Projects";
const App = () => {
  return (
    <div>
      <Header />
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <Home />
          </div>
        )}
      />
      <Route path="/projects" render={() => <Projects />} />
    </div>
  );
};

export default App;
