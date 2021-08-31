import Home from "./components/Home";
import "./App.css";
import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
