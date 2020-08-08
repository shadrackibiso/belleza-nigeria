import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
<<<<<<< HEAD
// import Register from "./Register";
import SignUp from "./SignUp";
import Contestants from "./Contestants";
import Admin from "./Admin";

function AppRouter() {
=======

function AppRouter(props) {
>>>>>>> 4ab618340c1caa3fe3b89682bc2db77f22ad6c8f
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
<<<<<<< HEAD
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
=======
>>>>>>> 4ab618340c1caa3fe3b89682bc2db77f22ad6c8f
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
