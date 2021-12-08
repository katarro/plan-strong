import React from "react";
import { useLocalStorage } from "../../useUser/useLocalStorage";

export const useLogicalTables = () => {
  const [boton1, setBoton1] = React.useState(false);
  const [allTable, setAllTable] = React.useState(false);
  const [benchPress] = useLocalStorage("user", null);
  const [deadLift] = useLocalStorage("user2", null);
  const [squat] = useLocalStorage("user3", null);
  const [day1, setDay1] = React.useState(false);
  const [day2, setDay2] = React.useState(false);
  const [day3, setDay3] = React.useState(false);
  const [day4, setDay4] = React.useState(false);

  const onClickBoton1 = () => {
    setAllTable(!allTable);
    setBoton1(!boton1);
  };
  return {
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
  };
};
