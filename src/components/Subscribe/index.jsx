import React from "react";
import SubscribeText from "../SubscribeText";
import SubscribeInput from "../SubscribeInput";
import SubscribeButton from "../SubscribeButton";
import "./style.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <SubscribeText />
      <SubscribeInput />
      <SubscribeButton />
    </div>
  );
};

export default Subscribe;
