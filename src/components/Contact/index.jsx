import React from "react";
import ContactText from "../ContactText";
import ContactCards from "../ContactCards";
import SocialItems from "../SocialItems";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <ContactText />
      <ContactCards />
      <SocialItems />
    </div>
  );
};

export default Contact;
