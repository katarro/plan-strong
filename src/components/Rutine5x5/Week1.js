import React from "react";
import "../../styles/Week1.css";

export function Week1({ benchPress, deadLift, squat }) {
  const onClickBoton1 = () => {
    document.getElementById("oculto1").style.display = "block";
    document.getElementById("boton1").style.display = "none";
    document.getElementById("boton2").style.display = "block";
  };

  return (
    <div className="tablas">
      <button
        id="boton1"
        type="button"
        className="primary-btn"
        onClick={onClickBoton1}
      >
        Mostrar
      </button>
      <div id="botonEditar"></div>

      <div id="oculto1">
        <div id="oculto2">
          <h2>Semana 1</h2>
          <div id="dia1">
            <h3>Dia 1</h3>
            <div className="row">
              <div className="col-12">
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
                          <h5>Sentadilla</h5>
                        </td>
                        <td className="hover-bg ts-meta" data-tsmeta="fitness">
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
                        <td className="hover-bg ts-meta" data-tsmeta="fitness">
                          <h5>
                            {/* <?php echo 0.75*$sentadilla; ?> */}
                            Kg
                          </h5>
                          <br />
                          <hr />
                          <h5>
                            {/* <?php echo 0.80*$sentadilla; ?> */}
                            Kg
                          </h5>
                          <br />
                          <hr />
                          <h5>
                            {/* <?php echo 0.85*$sentadilla; ?> */}
                            Kg
                          </h5>
                          <span></span>
                        </td>
                      </tr>
                      <tr>
                        <td className="hover-bg ts-meta">
                          <h5>Sentadilla</h5>
                          <span>Frontal</span>
                        </td>
                        <td
                          className="dark-bg hover-bg ts-meta"
                          data-tsmeta="fitness"
                        >
                          <h5>4</h5>
                          <span></span>
                        </td>
                        <td className="hover-bg ts-meta" data-tsmeta="workout">
                          <h5>10</h5>
                          <span></span>
                        </td>
                        <td
                          className="dark-bg hover-bg ts-meta"
                          data-tsmeta="motivation"
                        >
                          <h5>
                            {/* <?php echo 0.42*$sentadilla; ?> */}
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
                          <h5>Hip Thrust</h5>
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
                            {/* <?php echo 0.62*$sentadilla; ?> */}
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
                        <td className="hover-bg ts-meta" data-tsmeta="fitness">
                          <h5>10</h5>
                          <span></span>
                        </td>
                        <td
                          className="dark-bg hover-bg ts-meta"
                          data-tsmeta="workout"
                        >
                          <h5>
                            {/* <?php echo 0.15*$sentadilla; ?> */}
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

          <button
            id="botonA"
            type="button"
            className="primary-btn"
            onclick="document.getElementById('dia1').style.display = 'block'; document.getElementById('botonA').style.display = 'none';
                document.getElementById('botonB').style.display = 'block';"
          >
            Dia 1
          </button>
          <br />

          <button
            id="botonB"
            type="button"
            className="primary-btn"
            onclick="document.getElementById('dia1').style.display = 'none';  document.getElementById('botonB').style.display = 'none';
                                                        document.getElementById('botonA').style.display = 'block';"
          >
            Ocultar Dia 1
          </button>
          <br />

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
                        <td className="hover-bg ts-meta" data-tsmeta="fitness">
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
                        <td className="hover-bg ts-meta" data-tsmeta="fitness">
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
                        <td className="hover-bg ts-meta" data-tsmeta="workout">
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
                        <td className="hover-bg ts-meta" data-tsmeta="fitness">
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

          <button
            id="botonC"
            type="button"
            className="primary-btn"
            onclick="document.getElementById('dia2').style.display = 'block'; document.getElementById('botonC').style.display = 'none'; document.getElementById('botonD').style.display = 'block';"
          >
            Dia 2
          </button>
          <br />
          <button
            id="botonD"
            type="button"
            className="primary-btn"
            onclick="document.getElementById('dia2').style.display = 'none'; document.getElementById('botonD').style.display = 'none'; document.getElementById('botonC').style.display = 'block';"
          >
            Ocultar Dia 2
          </button>
          <br />

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
                        <td className="hover-bg ts-meta" data-tsmeta="fitness">
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
                        <td className="hover-bg ts-meta" data-tsmeta="fitness">
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
                        <td className="hover-bg ts-meta" data-tsmeta="workout">
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
                        <td className="hover-bg ts-meta" data-tsmeta="fitness">
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
          <button
            id="botonE"
            type="button"
            className="primary-btn"
            onclick="document.getElementById('dia3').style.display = 'block';  document.getElementById('botonE').style.display = 'none';  document.getElementById('botonF').style.display = 'block';"
          >
            Dia 3
          </button>
          <br />
          <button
            id="botonF"
            type="button"
            className="primary-btn"
            onclick="document.getElementById('dia3').style.display = 'none';   document.getElementById('botonF').style.display = 'none';   document.getElementById('botonE').style.display = 'block';"
          >
            Ocultar Dia 3
          </button>
          <br />
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
                        <td className="hover-bg ts-meta" data-tsmeta="fitness">
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
                        <td className="hover-bg ts-meta" data-tsmeta="fitness">
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
                        <td className="hover-bg ts-meta" data-tsmeta="workout">
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
                        <td className="hover-bg ts-meta" data-tsmeta="fitness">
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
          <button
            id="botonG"
            type="button"
            className="primary-btn"
            onclick="document.getElementById('dia4').style.display = 'block';document.getElementById('botonG').style.display = 'none';document.getElementById('botonH').style.display = 'block';"
          >
            Dia 4
          </button>
          <br />
          <button
            id="botonH"
            type="button"
            className="primary-btn"
            onclick="document.getElementById('dia4').style.display = 'none';document.getElementById('botonH').style.display = 'none';document.getElementById('botonG').style.display = 'block';"
          >
            Ocultar Dia 4
          </button>
          <br />
        </div>
      </div>
    </div>
  );
}
