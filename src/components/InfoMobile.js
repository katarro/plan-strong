import React from "react";
import "../styles/InfoMobile.css";
// import { Link } from "react-router-dom";
export function InfoMobile() {
  return (
    <div className="container-info">
      <ul>
        {/* <Link to="/">Inicio</Link> */}
        <li><a className="link-mobile" href="/">Inicio</a></li>
        <hr />
        <li> <a className="link-mobile" href="/">Metodo Principiante</a> </li>
        <hr />
        <li> <a className="link-mobile" href="/">Metodo Intermedio</a> </li>
        <hr />
        <li> <a className="link-mobile" href="/">Metodo Avanzado</a> </li>
      </ul>
    </div>
  );
}
