import React from "react";

function ProfileFormItem({ title }) {
  return (
    <div className="flex space-x-2 justify-between items-center rounded-lg border-black border-t-[1px] border-b-[1px]">
      <div className="flex space-x-4">
        <div className="bg-[#161837] text-white px-2 py-1 rounded-lg text-xs italic font-bold uppercase -mt-[1px] h-[30px] flex items-center w-[60px] justify-center ">
          {title}
        </div>
        <input
          type="text"
          placeholder="enter your email"
          className=" placeholder:text-slate-400 focus:outline-none focus:border-none bg-transparent"
        />
      </div>
      <div className="bg-[#161837] text-white px-2 py-1 rounded-lg text-xs italic font-bold uppercase -mt-[1px] h-[30px] flex items-center ">
        <img src="changeprofile.svg" alt="" />
      </div>
    </div>
  );
}

export default ProfileFormItem;
