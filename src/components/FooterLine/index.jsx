import React from "react";
import Copyright from "../Copyright";
import DesignBy from "../DesignBy";
import "./style.css";

const FooterLine = () => {
  return (
    <div className="footerLine">
      <Copyright />
      <DesignBy />
    </div>
  );
};

export default FooterLine;
