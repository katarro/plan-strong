import React from "react";
import "../styles/InfoMobile.css";
// import { Link } from "react-router-dom";
export function InfoMobile() {
  return (
    <div className="container-info">
      <ul>
        {/* <Link to="/">Inicio</Link> */}
        <li>Inicio</li>
        <hr />
        <li>Metodo Principiante </li>
        <hr />
        <li>Metodo Intermedio</li>
        <hr />
        <li>Metodo Avanzado</li>
      </ul>
    </div>
  );
}
