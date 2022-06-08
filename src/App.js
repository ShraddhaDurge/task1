import "./App.css";
import { Graph1 } from "./Components/Graph1";
import { Graph2 } from "./Components/Graph2";
import { Graph3 } from "./Components/Graph3";
import { Select } from "./Components/Select";
import { Home } from "./Components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let select = "selected";

  return (
    <>
      <Router>
        <Home />

        {/* <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch> */}

        <div className="row mt-5">
          <div className="container col-md-6">
            <Graph1 />
            <Select />
          </div>
          <div className="container col-md-6">
            <Graph2 />
            <Select />
          </div>
        </div>

        <div className="container col-md-6">
          <Graph3 />
          <Select />
        </div>

      </Router>
    </>
  );
}

export default App;
