import React from "react";
import { ButtonChangeRm } from "./ButtonChangeRm";
import { useLogicalTables } from "./useLogicalTables/useLogicalTables";
import { Week1 } from "./Week1";
import { Week2 } from "./Week2";
import { Week3 } from "./Week3";
import { Week4 } from "./Week4";
import { Week5 } from "./Week5";
import { Week6 } from "./Week6";
import { Week7 } from "./Week7";
import { Week8 } from "./Week8";
import "../../styles/Routine.css";

export function IndexRoutine() {
  const { benchPress, deadLift, squat } = useLogicalTables();

  return (
    <div className="routine">
      <div className="title-week">
        <h1>Método 5x5</h1>
      </div>
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
        <br />
        <br />
        <div className="week">
          <Week5
            className="week"
            benchPress={benchPress}
            deadLift={deadLift}
            squat={squat}
          />
        </div>
        <div className="week">
          <Week6
            className="week"
            benchPress={benchPress}
            deadLift={deadLift}
            squat={squat}
          />
        </div>
        <div className="week">
          <Week7
            className="week"
            benchPress={benchPress}
            deadLift={deadLift}
            squat={squat}
          />
        </div>
        <div className="week">
          <Week8
            className="week"
            benchPress={benchPress}
            deadLift={deadLift}
            squat={squat}
          />
        </div>
      </div>

      <ButtonChangeRm />
    </div>
  );
}
