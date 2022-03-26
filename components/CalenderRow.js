import React from "react";
import CalenderRowItem from "./CalenderRowItem";

function CalenderRow() {
  return (
    <div>
      <ul className="flex justify-between items-center cursor-pointer my-2">
        <CalenderRowItem date="11" day="MON" />
        <CalenderRowItem date="12" day="TUE" />
        <CalenderRowItem date="13" day="WED" active="true" />
        <CalenderRowItem date="14" day="THU" />
        <CalenderRowItem date="15" day="FRI" />
        <CalenderRowItem date="16" day="SAT" />
        <CalenderRowItem date="17" day="SUN" />
      </ul>
    </div>
  );
}

export default CalenderRow;
