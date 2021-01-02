import React from "react";

import NavigationTop from "../../shared/Navigation/Home/Nav_Top";
import ContentHome from "./Content/index";

const LayoutHome = (props) => {
  return (
    <React.Fragment>
      <div className=" ">
        <NavigationTop />
      </div>
      <div className="h-auto border">
        <ContentHome />
      </div>
    </React.Fragment>
  );
};

export default LayoutHome;
