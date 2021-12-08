import React from "react";
import Routes from "./components/Routes";
import Navbar from "./components/Navbar";
import { NavbarMobile } from "./components/NavbarMobile";
// import { Footer } from "./components/Footer";

const app = () => {
  return (
    <React.Fragment>
      <Navbar />
      <NavbarMobile />
      <Routes />
      {/* <Footer /> */}
    </React.Fragment>
  );
};
export default app;
