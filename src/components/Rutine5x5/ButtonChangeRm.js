import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ButtonChangeRm.css";
export function ButtonChangeRm() {
  return (
    <div className="container-button-changeRm">
      <Link className="link" to="/form">
        Cambiar Rm
      </Link>
    </div>
  );
}
