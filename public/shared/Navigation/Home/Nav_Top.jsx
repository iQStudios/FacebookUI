import React from "react";

//Menu
import Menu_Top from "../Menu_Top";
import Menu_Top_Right from "../Manu_Top_Right";

import Logo_icon from "../../../img/icon/Facebook_icon";
import Search_icon from "../../../img/icon/Search_Icon";

const Navigation_Top = () => {
  return (
    <React.Fragment>
      <div className="flex justify-around items-center shadow-md bg-white flex-wrap px-2">
        <div className="flex flex-none py-2 space-x-5">
          <div>
            <Logo_icon />
          </div>
          <div className="flex justify-center items-center px-3  rounded-full bg-bg_searchFB ">
            <Search_icon />
            <input
              type="text"
              className="ml-2 bg-transparent placeholder-gray-500 flex-1 focus:outline-none"
              placeholder="Search Facebook"
            />
          </div>
        </div>
        <div className="flex-grow">
          <Menu_Top />
        </div>
        <div className="">
          <Menu_Top_Right />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navigation_Top;
