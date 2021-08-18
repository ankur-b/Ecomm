import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";

const Hatspage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={Hatspage} />
      </Switch>
    </div>
  );
};

export default App;
