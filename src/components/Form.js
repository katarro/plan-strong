import React from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "./useUser/useLocalStorage";

export function Form() {
  const [text, setText] = useLocalStorage("user", null);
  const [text2, setText2] = useLocalStorage("user", null);
  const [text3, setText3] = useLocalStorage("user", null);
  
  return (
    <div className="Login">
      <div className="container-form">
        <label>Banca</label>
        <input
          type="number"
          placeholder="100 kg"
          value={text}
          onChange={setText}
        />
      </div>
      <div className="container-form">
        <label>Peso muerto</label>
        <input
          type="number"
          placeholder="100 kg"
          value={text2}
          onChange={setText2}
        />
      </div>
      <div className="container-form">
        <label>Sentadilla</label>
        <input
          type="number"
          placeholder="100 kg"
          value={text3}
          onChange={setText3}
        />
      </div>

      <div className="container-button">
        <Link className="link" to="/routine">
          Crear
        </Link>
      </div>
    </div>
  );
}
