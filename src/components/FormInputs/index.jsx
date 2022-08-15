import React from "react";
import FormLabel from "../FormLabel";
import FormInput1 from "../FormInput1";
import FormInput2 from "../FormInput2";
import FormTextarea from "../FormTextarea";
import FormButton from "../FormButton";
import "./style.css";

const FormInputs = () => {
  return (
    <div className="footerInputs">
      <FormLabel />
      <FormInput1 />
      <FormInput2 />
      <FormTextarea />
      <FormButton />
    </div>
  );
};

export default FormInputs;
