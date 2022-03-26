import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import Sidebar_MenuItem from "./Sidebar_MenuItem";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

function Sidebar() {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const url = router.asPath;
  return (
    <>
      <div className="h-full min-h-screen flex">
        <div className="w-full flex flex-col justify-between in-h-full shadow-2xl rounded-[30px] py-4 bg-white">
          <div>
            <div className=" flex items-center justify-center mb-2 mx-4 ">
              <img src="logo.svg" alt="Logo" className="w-full h-full" />
            </div>
            <ul className="">
              <Link href="/">
                <a>
                  <Sidebar_MenuItem
                    Icon={HomeOutlinedIcon}
                    Title="Dashboard"
                    active={`${url == "/" ? true : false}`}
                  />
                </a>
              </Link>

              <Link href="/stock">
                <a>
                  <Sidebar_MenuItem
                    Icon={BarChartOutlinedIcon}
                    Title="Investment"
                    active={`${url == "/stock" ? true : false}`}
                  />
                </a>
              </Link>
              <li
                className={`space-x-5 font-semibold cursor-pointer px-4 py-2 hover:bg-gray-200`}
                onClick={() => setModal(!modal)}
              >
                <AddCircleOutlineOutlinedIcon />
                <span>Quick Add</span>
              </li>
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

      <div
        className={`bg-white ${
          modal ? "fixed" : "hidden"
        } top-[0] bottom-[0] right-[0] left-[0] z-50`}
      >
        <div className="fixed p-6 items-center justify-center bg-white top-[50px] bottom-[50px] right-[50px] left-[50px] rounded-[50px] border-2 border-gray-800 space-y-4 bg-[url('https://i.ibb.co/28Z2fjN/bg-add.png')] bg-no-repeat bg-bottom">
          <div className="flex justify-center items-center space-x-2">
            <img src="LogoTwo.svg" alt="" className="w-[100px]" />
            <h1 className="text-[50px] underline underline-offset-8 font-[Klavika-Medium]">
              Add New Transaction
            </h1>
            <div
              className="absolute top-[50px] right-[50px] cursor-pointer"
              onClick={() => setModal(!modal)}
            >
              <img src="close.svg" alt="" />
            </div>
          </div>
          <div className="flex border-2 border-gray-800 justify-evenly w-4/12 px-4 h-[50px] rounded-[32px] mx-auto items-center">
            <div>Income</div>
            <div className="bg-black text-white rounded-[32px] h-[52px] min-w-[50px] flex items-center justify-center px-4 font-lg font-[Klavika-Medium]">
              Expenses
            </div>
          </div>
          <form
            action=""
            className="mx-auto flex flex-col items-center justify-center"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-[Klavika-Medium]"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="border-2 border-gray-800 w-[300px]"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-lg font-[Klavika-Medium]"
              >
                Category:
              </label>
              <select
                name="category"
                id="cars"
                className="border-2 border-gray-800 w-[300px]"
              >
                <option value="volvo">Transport</option>
                <option value="saab">Food</option>
                <option value="mercedes">Alcohol</option>
                <option value="audi">Clothing</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-lg font-[Klavika-Medium]"
              >
                Date:
              </label>
              <input
                type="date"
                id="name"
                className="border-2 border-gray-800 w-[300px]"
              />
            </div>
            <div>
              <label
                htmlFor="amoun"
                className="block text-lg font-[Klavika-Medium]"
              >
                Amount:
              </label>
              <input
                type="text"
                id="name"
                placeholder="£70"
                className="border-2 border-gray-800 w-[300px]"
              />
            </div>
          </form>
          <div className="mx-auto flex items-center space-x-4 justify-center pb-4 border-b-2 border-gray-800 max-w-[50%]">
            <div className="px-8 py-2 rounded-[24px] bg-black text-white text-[25px] font-[Klavika-Medium]">
              ADD
            </div>
            <div className="text-[25px] font-[Klavika-Medium]">Cancel</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
