import React from "react";
import NavButtons from "./Navbuttons";
import Language from "./Languages";
import { Button } from "../shared";
import "./style.scss";

const NavItems = () => {
  return (
    <div className="nav-items">
      <NavButtons />
      <Language />
      <Button />
    </div>
  );
};

export default NavItems;
