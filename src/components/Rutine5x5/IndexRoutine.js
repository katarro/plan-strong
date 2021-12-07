import React from "react";
import "../../styles/Routine.css";
import { useLocalStorage } from "../useUser/useLocalStorage";
import { Week1 } from "./Week1";
import { Week2 } from "./Week2";
import { Week3 } from "./Week3";
import { Week4 } from "./Week4";

export function IndexRoutine() {
  const [benchPress] = useLocalStorage("user", null);
  const [deadLift] = useLocalStorage("user2", null);
  const [squat] = useLocalStorage("user3", null);

  return (
    <div className="routine">
      <Week1 benchPress={benchPress} deadLift={deadLift} squat={squat} />
    </div>
  );
}
