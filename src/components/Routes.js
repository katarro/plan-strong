import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "./Start";
import SectionMetodos from "./SectionMetodos";
import { SectionVideos } from "./SectionVideos";
import { Footer } from "./Footer";
import { Login } from "./Login";
import { Form } from "./Form";
import { Routine } from "./Routine";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Start />
          <SectionMetodos />
          <SectionVideos />
          <Footer />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/form" exact>
          <Form />
        </Route>

        <Route path="/routine" exact>
          <Routine />
        </Route>
      </Switch>
    </Router>
  );
}
