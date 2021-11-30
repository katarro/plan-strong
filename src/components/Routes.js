import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "./Start";
import SectionMetodos from "./SectionMetodos";
import { NavbarMobile } from "./NavbarMobile";
import { SectionVideos } from "./SectionVideos";
import {Footer} from './Footer'
export default function Routes() {

  return (
    <Router>
      <Switch>
        <Route path="/contacto">Pagina de contacto</Route>
        <Route path="/">
          <NavbarMobile />
          <Start />
          <SectionMetodos />
          <SectionVideos/>
          <Footer/>
        </Route>
      </Switch>
    </Router>
  );
}
