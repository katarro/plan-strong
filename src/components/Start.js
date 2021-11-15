import React from "react";
import "../styles/Start.css";
export default function title() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="container-title">
          <h1>Entrénate</h1>
        </div>

        <div className="container-button">
          <button>Crear mi Plan</button>
        </div>
      </div>
    </React.Fragment>
  );
}
