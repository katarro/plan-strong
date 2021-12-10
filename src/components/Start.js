import React from "react";
import "../styles/Start.css";
import { Link } from "react-router-dom";

export default function title() {
  return (
    <div className="container">
      <div className="container-items-start">
        <div className="container-start">
          <h1>Entrénate</h1>
        </div>

        <div className="container-button-start">
          <Link to="/login" type="button" className="link">
            Ingresar
          </Link>
        </div>
      </div>
    </div>
  );
}
