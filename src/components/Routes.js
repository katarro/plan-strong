import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "./Start";
import SectionMetodos from "./SectionMetodos";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/contacto">Pagina de contacto</Route>
        <Route path="/">
          <Start />
          <SectionMetodos />
        </Route>
      </Switch>
    </Router>
  );
}
