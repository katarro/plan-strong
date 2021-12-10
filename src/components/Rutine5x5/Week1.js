import React from "react";
import "../../styles/Week1.css";
import { useLogicalTables } from "./useLogicalTables/useLogicalTables";
export function Week1() {
  const {
    benchPress,
    deadLift,
    squat,
    boton1,
    allTable,
    onClickBoton1,
    day1,
    day2,
    day3,
    setDay1,
    setDay2,
    setDay3,
  } = useLogicalTables();

  return (
    <div className="tablas">
      <div className="container-all-tables">
        <button className="link-all-table" onClick={onClickBoton1}>
          {boton1 ? "Ocultar" : "Semana 1"}
        </button>
      </div>

      {allTable ? (
        <>
          <div id="allTable">
            <div className="oculto2">
              <div className="title-week">
                <u>
                  <h1>Semana 1</h1>
                </u>
              </div>

              {day1 ? (
                <div className="dia1">
                  <div className="title-week">
                    <h3>Dia 1</h3>
                  </div>
                  <div className="container-table">
                    <table className="table table-bordered table-dark">
                      <thead>
                        <tr>
                          <th scope="col">Ejercicio</th>
                          <th scope="col">Series</th>
                          <th scope="col">Repeticiones</th>
                          <th scope="col">Peso</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Sentadilla</th>
                          <td className="serie">5</td>
                          <td className="serie">5</td>
                          <td>{0.7 * squat} kg</td>
                        </tr>
                        <tr>
                          <th scope="row">Press Banca</th>
                          <td className="serie">5</td>
                          <td className="serie">5</td>
                          <td>{0.7 * benchPress} kg</td>
                        </tr>
                        <tr>
                          <th scope="row">Peso Muerto</th>
                          <td className="serie">5</td>
                          <td className="serie">5</td>
                          <td>{0.7 * deadLift} kg</td>
                        </tr>
                        <tr>
                          <th scope="row">Curl Biceps</th>
                          <td className="serie">3</td>
                          <td className="serie">10</td>
                          <td>{0.15 * benchPress} kg</td>
                        </tr>
                        <tr>
                          <th scope="row">Curl Martillo</th>
                          <td className="serie">3</td>
                          <td className="serie">10</td>
                          <td>{0.1 * benchPress} kg</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}

              <button className="link-day" onClick={() => setDay1(!day1)}>
                {day1 ? "Ocultar" : "Dia 1"}
              </button>
              <br />

              {day2 ? (
                <div className="dia2">
                  <div className="title-week">
                    <h3>Dia 2</h3>
                  </div>
                  <div className="container-table">
                    <table className="table table-bordered table-dark">
                      <thead>
                        <tr>
                          <th scope="col">Ejercicio</th>
                          <th scope="col">Series</th>
                          <th scope="col">Repeticiones</th>
                          <th scope="col">Peso</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Sentadilla</th>
                          <td className="serie">5</td>
                          <td className="serie">5</td>
                          <td>{0.7 * squat} kg</td>
                        </tr>
                        <tr>
                          <th scope="row">Press Militar</th>
                          <td className="serie">5</td>
                          <td className="serie">5</td>
                          <td>{0.7 * benchPress} kg</td>
                        </tr>
                        <tr>
                          <th scope="row">Peso Muerto</th>
                          <td className="serie">5</td>
                          <td className="serie">5</td>
                          <td>{0.7 * deadLift} kg</td>
                        </tr>
                        <tr>
                          <th scope="row">Face pul</th>
                          <td className="serie">3</td>
                          <td className="serie">10</td>
                          <td>{0.15 * benchPress} kg</td>
                        </tr>
                        <tr>
                          <th scope="row">Elevaciones lat.</th>
                          <td className="serie">3</td>
                          <td className="serie">10</td>
                          <td>{0.1 * benchPress} kg</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}

              <button className="link-day" onClick={() => setDay2(!day2)}>
                {day2 ? "Ocultar" : "Dia 2"}
              </button>
              <br />

              {day3 ? (
                <div className="dia3">
                  <div className="title-week">
                    <h3>Dia 3</h3>
                  </div>
                  <div className="container-table">
                    <table className="table table-bordered table-dark">
                      <thead>
                        <tr>
                          <th scope="col">Ejercicio</th>
                          <th scope="col">Series</th>
                          <th scope="col">Repeticiones</th>
                          <th scope="col">Peso</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Sentadilla</th>
                          <td className="serie">5</td>
                          <td className="serie">5</td>
                          <td>{0.7 * squat} kg</td>
                        </tr>
                        <tr>
                          <th scope="row">Press Banca</th>
                          <td className="serie">5</td>
                          <td className="serie">5</td>
                          <td>{0.7 * benchPress} kg</td>
                        </tr>
                        <tr>
                          <th scope="row">Remo con Barra</th>
                          <td className="serie">5</td>
                          <td className="serie">5</td>
                          <td>{0.7 * deadLift} kg</td>
                        </tr>
                        <tr>
                          <th scope="row">Curl Biceps</th>
                          <td className="serie">3</td>
                          <td className="serie">10</td>
                          <td>{0.15 * benchPress} kg</td>
                        </tr>
                        <tr>
                          <th scope="row">Curl Martillo</th>
                          <td className="serie">3</td>
                          <td className="serie">10</td>
                          <td>{0.1 * benchPress} kg</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}

              <button className="link-day" onClick={() => setDay3(!day3)}>
                {day3 ? "Ocultar" : "Dia 3"}
              </button>
              <br />

              <br />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
