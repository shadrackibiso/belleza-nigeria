import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";

function AppRouter(props) {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
