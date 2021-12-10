import Amburger from "../media/amburger.png";
import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { InfoMobile } from "./InfoMobile";
import "../styles/NavbarMobile.css";

function NavbarMobile() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-navbar-mobile">
      <img
        src={Amburger}
        alt="menu"
        className="amburger"
        onClick={handleShow}
      />
      <Offcanvas
        show={show}
        onHide={handleClose}
        className="container-info-mobile"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Plan Strong</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <InfoMobile />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export { NavbarMobile };
