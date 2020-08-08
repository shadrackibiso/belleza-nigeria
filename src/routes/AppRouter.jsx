import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
// import Register from "./Register";
import SignUp from "./SignUp";
import Contestants from "./Contestants";
import Admin from "./Admin";

function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/contestants">
            <Contestants />
          </Route>
          <Route path="/my-admin">
            <Admin />
          </Route>
          {/* <Route path="/register">
            <Register />
          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
