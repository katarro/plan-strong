import React from "react";
import "../styles/Start.css";
import { Link } from "react-router-dom";

export default function title() {
  return (
    <div className="container">
      <div className="container-title">
        <h1>Entrénate</h1>
      </div>

      <div className="container-button">
        <Link to="/login" type="button" className="link">
          Ingresar
        </Link>
      </div>
    </div>
  );
}
