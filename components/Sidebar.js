import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import Sidebar_MenuItem from "./Sidebar_MenuItem";
function Sidebar() {
  return (
    <div className="h-full min-h-screen flex">
      <div className="w-full flex flex-col justify-between in-h-full shadow-2xl rounded-[30px] py-4 bg-white">
        <div>
          <div className=" flex items-center justify-center mb-2 mx-4 ">
            <img src="logo.svg" alt="Logo" className="w-full h-full" />
          </div>
          <ul className="">
            <Sidebar_MenuItem
              Icon={HomeOutlinedIcon}
              Title="Dashboard"
              active="true"
            />
            <Sidebar_MenuItem Icon={BarChartOutlinedIcon} Title="Investment" />
            <Sidebar_MenuItem
              Icon={AddCircleOutlineOutlinedIcon}
              Title="Quick Add"
            />
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="sidebar_ilu.svg"
            alt="Sidebar_ilustration"
            className=" max-w-[90%] px-4"
          />
        </div>

        <ul className=" mb-6">
          <Sidebar_MenuItem Icon={SettingsOutlinedIcon} Title="Setting" />
          <Sidebar_MenuItem Icon={LoginOutlinedIcon} Title="Logout" />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
