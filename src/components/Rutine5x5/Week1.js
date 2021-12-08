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
    day4,
    setDay1,
    setDay2,
    setDay3,
    setDay4,
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
                      <td>5</td>
                      <td>5</td>
                      <td>100 kg</td>
                    </tr>
                    <tr>
                      <th scope="row">S.Frontal</th>
                      <td>5</td>
                      <td>5</td>
                      <td>100 kg</td>
                    </tr>
                    <tr>
                      <th scope="row">Hip Thrust</th>
                      <td>5</td>
                      <td>5</td>
                      <td>100 kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* {day1 ? (
                <div className="dia1">
                  <h3>Dia 1</h3>
                  <div className="row">
                    <div className="col-8">
                      <div className="class-timetable">
                        <table>
                          <thead>
                            <tr>
                              <th>Ejercicio</th>
                              <th>Series</th>
                              <th>Repeticiones</th>
                              <th>Peso</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h5>Sentadilla</h5>
                                <hr />
                              </td>
                              <td>
                                <h5>5</h5>
                                <span></span>
                              </td>
                              <td>
                                <h5>5</h5>
                              </td>
                              <td>
                                <h5>{0.75 * squat}</h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="hover-bg ts-meta">
                                <h5>Sentadilla Frontal</h5>
                                <hr />
                              </td>
                              <td>
                                <h5>4</h5>
                                <span></span>
                              </td>
                              <td>
                                <h5>10</h5>
                                <span></span>
                              </td>
                              <td>
                                <h5>{0.42 * squat}</h5>
                                <span></span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h5>Hip Thrust</h5>
                                <span></span>
                              </td>
                              <td>
                                <h5>4</h5>
                                <span></span>
                              </td>
                              <td>
                                <h5>10</h5>
                                <span></span>
                              </td>
                              <td>
                                <h5>
                                  {0.42 * squat}
                                  Kg
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="motivation"
                              >
                                <h5>Búlgaras</h5>
                                <span></span>
                              </td>
                              <td className="dark-bg hover-bg ts-meta">
                                <h5>4</h5>
                              </td>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="fitness"
                              >
                                <h5>10</h5>
                                <span></span>
                              </td>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="workout"
                              >
                                <h5>
                                  {0.15*squat}
                                  Kg
                                </h5>
                                <span></span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null} */}

              <button className="link-day" onClick={() => setDay1(!day1)}>
                Dia 1
              </button>
              <br />

              {day2 ? (
                <div id="dia2">
                  <h3>Dia 2</h3>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="class-timetable">
                        <table>
                          <thead>
                            <tr>
                              <th>Ejercicio</th>
                              <th>Series</th>
                              <th>Repeticiones</th>
                              <th>Peso</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="workout"
                              >
                                <h5>Peso Muerto</h5>
                                <span>Convencional</span>
                              </td>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="fitness"
                              >
                                <h5>3</h5>
                                <span></span>
                              </td>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="workout"
                              >
                                <h5>5</h5>
                                <br />
                                <hr />
                                <h5>5</h5>
                                <br />
                                <hr />
                                <h5>5+</h5>
                                <span></span>
                              </td>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="fitness"
                              >
                                <h5>
                                  {/* <?php echo 0.75*$peso_muerto; ?> */}
                                  Kg
                                </h5>
                                <br />
                                <hr />
                                <h5>
                                  {/* <?php echo 0.80*$peso_muerto; ?> */}
                                  Kg
                                </h5>
                                <br />
                                <hr />
                                <h5>
                                  {/* <?php echo 0.85*$peso_muerto; ?> */}
                                  Kg
                                </h5>
                                <span></span>
                              </td>
                            </tr>
                            <tr>
                              <td className="hover-bg ts-meta">
                                <h5>Press Militar</h5>
                                <span></span>
                              </td>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="fitness"
                              >
                                <h5>4</h5>
                                <span></span>
                              </td>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="workout"
                              >
                                <h5>10</h5>
                                <span></span>
                              </td>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="motivation"
                              >
                                <h5>
                                  {/* <?php echo 0.70*$militar; ?> */}
                                  Kg
                                </h5>
                                <span></span>
                              </td>
                            </tr>
                            <tr>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="fitness"
                              >
                                <h5>Fondos</h5>
                                <span></span>
                              </td>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="motivation"
                              >
                                <h5>4</h5>
                                <span></span>
                              </td>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="workout"
                              >
                                <h5>5</h5>
                                <span></span>
                              </td>
                              <td className="hover-bg ts-meta">
                                <h5>
                                  {/* <?php echo 0.50*$banca; ?> */}
                                  Kg
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="motivation"
                              >
                                <h5>Curl Biceps</h5>
                                <span>Barra z</span>
                              </td>
                              <td className="dark-bg hover-bg ts-meta">
                                <h5>4</h5>
                              </td>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="fitness"
                              >
                                <h5>12</h5>
                                <span></span>
                              </td>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="workout"
                              >
                                <h5>20 Kg</h5>
                                <span></span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              <button className="link-day" onClick={() => setDay2(!day2)}>
                Dia 2
              </button>
              <br />

              {day3 ? (
                <div id="dia3">
                  <h3>Dia 3</h3>

                  <div className="row">
                    <div className="col-lg-12">
                      <div className="class-timetable">
                        <table>
                          <thead>
                            <tr>
                              <th>Ejercicio</th>
                              <th>Series</th>
                              <th>Repeticiones</th>
                              <th>Peso</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="workout"
                              >
                                <h5>Press Banca</h5>
                              </td>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="fitness"
                              >
                                <h5>3</h5>
                                <span></span>
                              </td>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="workout"
                              >
                                <h5>5</h5>
                                <br />
                                <hr />
                                <h5>5</h5>
                                <br />
                                <hr />
                                <h5>5+</h5>
                                <span></span>
                              </td>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="fitness"
                              >
                                <h5>
                                  {/* <?php echo 0.75*$banca; ?> */}
                                  Kg
                                </h5>
                                <br />
                                <hr />
                                <h5>
                                  {/* <?php echo 0.80*$banca; ?> */}
                                  Kg
                                </h5>
                                <br />
                                <hr />
                                <h5>
                                  {/* <?php echo 0.85*$banca; ?> */}
                                  Kg
                                </h5>
                                <span></span>
                              </td>
                            </tr>
                            <tr>
                              <td className="hover-bg ts-meta">
                                <h5>Hip Thrust</h5>
                                <span></span>
                              </td>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="fitness"
                              >
                                <h5>4</h5>
                                <span></span>
                              </td>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="workout"
                              >
                                <h5>10</h5>
                                <span></span>
                              </td>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="motivation"
                              >
                                <h5>
                                  {/* <?php echo 0.62*$sentadilla; ?> */}
                                  Kg
                                </h5>
                                <span></span>
                              </td>
                            </tr>
                            <tr>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="fitness"
                              >
                                <h5>Peso Muerto</h5>
                                <span>Semi-Rigido</span>
                              </td>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="motivation"
                              >
                                <h5>4</h5>
                                <span></span>
                              </td>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="workout"
                              >
                                <h5>10</h5>
                                <span></span>
                              </td>
                              <td className="hover-bg ts-meta">
                                <h5>
                                  {/* <?php echo 0.625*$peso_muerto; ?> */}
                                  Kg
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="motivation"
                              >
                                <h5>Sentadilla</h5>
                                <span>Zumo</span>
                              </td>
                              <td className="dark-bg hover-bg ts-meta">
                                <h5>4</h5>
                              </td>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="fitness"
                              >
                                <h5>10</h5>
                                <span></span>
                              </td>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="workout"
                              >
                                <h5>
                                  {/* <?php echo 0.50*$sentadilla; ?> */}
                                  Kg
                                </h5>
                                <span></span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              <button className="link-day" onClick={() => setDay3(!day3)}>
                Dia 3
              </button>
              <br />

              {day4 ? (
                <div id="dia4">
                  <h3>Dia 4</h3>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="class-timetable">
                        <table>
                          <thead>
                            <tr>
                              <th>Ejercicio</th>
                              <th>Series</th>
                              <th>Repeticiones</th>
                              <th>Peso</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="workout"
                              >
                                <h5>Press Militar</h5>
                              </td>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="fitness"
                              >
                                <h5>3</h5>
                                <span></span>
                              </td>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="workout"
                              >
                                <h5>5</h5>
                                <br />
                                <hr />
                                <h5>5</h5>
                                <br />
                                <hr />
                                <h5>5+</h5>
                                <span></span>
                              </td>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="fitness"
                              >
                                <h5>
                                  {/* <?php echo 0.75*$militar; ?> */}
                                  Kg
                                </h5>
                                <br />
                                <hr />
                                <h5>
                                  {/* <?php echo 0.80*$militar; ?> */}
                                  Kg
                                </h5>
                                <br />
                                <hr />
                                <h5>
                                  {/* <?php echo 0.85*$militar; ?> */}
                                  Kg
                                </h5>
                                <span></span>
                              </td>
                            </tr>
                            <tr>
                              <td className="hover-bg ts-meta">
                                <h5>Remo</h5>
                                <span>Con Barra</span>
                              </td>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="fitness"
                              >
                                <h5>4</h5>
                                <span></span>
                              </td>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="workout"
                              >
                                <h5>10</h5>
                                <span></span>
                              </td>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="motivation"
                              >
                                <h5>70 Kg</h5>
                                <span></span>
                              </td>
                            </tr>
                            <tr>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="fitness"
                              >
                                <h5>Banca</h5>
                                <span></span>
                              </td>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="motivation"
                              >
                                <h5>4</h5>
                                <span></span>
                              </td>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="workout"
                              >
                                <h5>10</h5>
                                <span></span>
                              </td>
                              <td className="hover-bg ts-meta">
                                <h5>
                                  {/* <?php echo 0.70*$banca; ?> */}
                                  Kg
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="motivation"
                              >
                                <h5>Curl Biceps</h5>
                                <span>Barra z</span>
                              </td>
                              <td className="dark-bg hover-bg ts-meta">
                                <h5>4</h5>
                              </td>
                              <td
                                className="hover-bg ts-meta"
                                data-tsmeta="fitness"
                              >
                                <h5>12</h5>
                                <span></span>
                              </td>
                              <td
                                className="dark-bg hover-bg ts-meta"
                                data-tsmeta="workout"
                              >
                                <h5>22 Kg</h5>
                                <span></span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              <button className="link-day" onClick={() => setDay4(!day4)}>
                Dia 4
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
