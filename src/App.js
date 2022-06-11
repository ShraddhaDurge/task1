import "./App.css";
import { Graph1 } from "./Components/Graph1";
import { Graph2 } from "./Components/Graph2";
import { Home } from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

import "./Components/CSS_File.css";

function App() {
  // Here we're fetching the data from our Django Rest Framework API
  const [xy, setXy] = useState([]);
  useEffect(() => {
    async function getAllXys() {
      try {
        const xys = await axios.get("http://127.0.0.1:8000/data_api/xy/");
        // console.log(xys);
        // console.log(xys.data);
        setXy(xys.data);
      } catch (error) {
        console.log(error);
      }
    }
    setInterval(getAllXys, 10000); // Using this I can run the function after fixed interval of time and also I can reload the data without even refreshing or reloading the page
    // getAllXys();
  }, []);

  // Here We're calling the api on the below URL and that url is linked to one of our django's views function and after reloading the function it will erase all the data i.e. loaded in our database and will read the new updated complete data from the excel file
  async function func2() {
    try {
      const students = await axios.get("http://127.0.0.1:8000/data_api/func1/");
    } catch (error) {
      console.log(error);
    }
  }
  setInterval(func2, 10000);
  // func2();

  return (
    <>
      <Router>
        <Home />
        <div className="row justify-content-center mt-5">
          <div className="container col-md-5 charts">
            <Graph1 xys={xy} />
          </div>
          <div className="container col-md-5 charts">
            <Graph2 xys={xy} />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
