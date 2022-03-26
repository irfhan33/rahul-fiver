import React from "react";

function Sidebar_MenuItem({ Icon, Title, active }) {
  const activeClass =
    "bg-gray-200 border-l-4 border-gray-700 font-[Klavika-Medium]";

  return (
    <li
      className={`space-x-5 font-semibold px-4 py-2 ${
        active === "true" ? activeClass : ""
      } hover:bg-gray-200`}
    >
      <Icon />
      <span>{Title}</span>
    </li>
  );
}

export default Sidebar_MenuItem;
