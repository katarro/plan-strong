import React from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "./useUser/useLocalStorage";

export function Form() {
  const [text, setText] = useLocalStorage("user", null);
  const [text2, setText2] = useLocalStorage("user2", null);
  const [text3, setText3] = useLocalStorage("user3", null);
  const [text4, setText4] = useLocalStorage("user4", null);
  const [text5, setText5] = useLocalStorage("user5", null);

  
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

      <div className="container-form">
        <label>Remo con Barra</label>
        <input
          type="number"
          placeholder="100 kg"
          value={text4}
          onChange={setText4}
        />
      </div>

      <div className="container-form">
        <label>Press Militar</label>
        <input
          type="number"
          placeholder="100 kg"
          value={text5}
          onChange={setText5}
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
