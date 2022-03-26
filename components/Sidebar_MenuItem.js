import React from "react";

function Sidebar_MenuItem({ Icon, Title, active }) {
  const activeClass = "bg-gray-200 border-l-4 border-gray-700";

  return (
    <li
      className={`space-x-5 font-semibold px-4 py-2 ${
        active && activeClass
      } hover:bg-gray-200`}
    >
      <Icon />
      <a href="">{Title}</a>
    </li>
  );
}

export default Sidebar_MenuItem;
