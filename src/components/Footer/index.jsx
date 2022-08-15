import React from "react";
import Subscribe from "../Subscribe";
import ContactandForm from "../ContactandForm";
import FooterLine from "../FooterLine";
import "./style.css";

const Footer = () => {
  return (
    <div className="mainFooter">
      <Subscribe />
      <ContactandForm />
      <FooterLine />
    </div>
  );
};

export default Footer;
