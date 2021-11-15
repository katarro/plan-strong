import React from "react";
import "../styles/SectionMetodos.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
export default function SectionMetodos() {
  return (
    <div className="container-section-metodos">
      <div className="container-title">
        <h2>MÉTODOS DE ENTRENAMIENTO DE FUERZA</h2>
      </div>

      <div className="container-items">
        <div className="container-principiante">
          <h4>Métodos Principiante</h4>
          <p>
            Métodos de entrenamiento adaptados a personas que entrenan la
            fuerza, pero que tienen ganancias a corto plazo
          </p>
        </div>
        <div className="container-intermedio">
          <h4>Métodos Intermedio</h4>
          <p>
            Métodos de entrenamiento adaptados a personas que entrenan la
            fuerza, pero que tienen ganancias a mediano plazo
          </p>
        </div>
        <div className="container-avanzado">
          <h4>Métodos Avanzado</h4>
          <p>
            Métodos de entrenamiento adaptados a personas que entrenan la
            fuerza, pero que tienen ganancias a largo plazo
          </p>
        </div>
      </div>
    </div>
  );
}
