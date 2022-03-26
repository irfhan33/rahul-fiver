import React, { useState } from "react";
import Calendar from "react-calendar";
function CalenderReact() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="w-full ">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default CalenderReact;
