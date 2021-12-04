import React from "react";
import "../styles/Login.css";
import { useLocalStorage } from "./useUser/useLocalStorage";
import { Form } from "./Form";
import { Routine } from "./Routine";
import { Link } from "react-router-dom";
export const Login = () => {
  const [text, setText] = useLocalStorage("user", null);

  return (
    <div className="Login">
      {text === null ? ( // Si NO tiene informacion en storage
        <div className="container-button">
          <Link className="link" to="/form">
            Crear Rutina
          </Link>
        </div>
      ) : (
        <>
          <Routine />
          <div className="container-button">
            <Link className="link" to="/form">
              Cambiar Rm
            </Link>
          </div>
        </>
      )}

      {/* Si está vacio mostrar FROMUALRIO sino mostrar rutina junto con boton de cambiar RM */}
    </div>
  );
};
