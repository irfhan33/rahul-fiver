import React from "react";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

function Date() {
  return (
    <div className="flex items-center space-x-1">
      <DateRangeOutlinedIcon /> <span>Jan,2019 - Dec, 2019</span>
    </div>
  );
}

export default Date;
