import React from "react";
import { ButtonChangeRm } from "./ButtonChangeRm";
import { useLogicalTables } from "./useLogicalTables/useLogicalTables";
import { Week1 } from "./Week1";
import { Week2 } from "./Week2";
import { Week3 } from "./Week3";
import { Week4 } from "./Week4";
import "../../styles/Routine.css";

export function IndexRoutine() {
  const { benchPress, deadLift, squat, boton1, allTable, onClickBoton1 } =
    useLogicalTables();

  return (
    <div className="routine">
      <button className="link" onClick={onClickBoton1}>
        {boton1 ? "Ocultar" : "Mostrar Rutina"}
      </button>
      {allTable ? (
        <div className="weeks">
          <div className="week1">
            <Week1 benchPress={benchPress} deadLift={deadLift} squat={squat} />
          </div>
          <div className="week">
            <Week2
              className="week"
              benchPress={benchPress}
              deadLift={deadLift}
              squat={squat}
            />
          </div>
          <div className="week">
            <Week3
              className="week"
              benchPress={benchPress}
              deadLift={deadLift}
              squat={squat}
            />
          </div>
          <div className="week">
            <Week4
              className="week"
              benchPress={benchPress}
              deadLift={deadLift}
              squat={squat}
            />
          </div>
        </div>
      ) : null}
      <ButtonChangeRm />
    </div>
  );
}
