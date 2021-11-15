import React from "react";
import Routes from "./components/Routes";
import Navbar from "./components/Navbar";

const app = () => {
  return (
    <React.Fragment>
        <Navbar/>
      <Routes />
    </React.Fragment>
  );
};
export default app;
