import React from "react";
import Routes from "./components/Routes";
import Navbar from "./components/Navbar";
import { NavbarMobile } from "./components/NavbarMobile";
const app = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <NavbarMobile />
      <Routes />
    </React.Fragment>
  );
};
export default app;
