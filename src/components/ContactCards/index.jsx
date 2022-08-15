import React from "react";
import "./style.css";

const ContactCards = () => {
  return (
    <div className="contactCards">
      <div class="card">
        <span class="icon">
          <i class="fa-solid fa-phone-volume"></i>
        </span>
        +994 12 222 22 22
        <span class="grey">
          <i class="fa-solid fa-clone"></i>
        </span>
      </div>
      <div class="card">
        <span class="icon">
          <i class="fa-solid fa-envelope"></i>
        </span>
        hello@bilimbaku.com
        <span class="grey">
          <i class="fa-solid fa-clone"></i>
        </span>
      </div>
      <div class="card">
        <span class="icon">
          <i class="fa-solid fa-location-dot"></i>
        </span>
        Nizami küçəsi 12,Bakı
        <span class="grey">
          <i class="fa-solid fa-clone"></i>
        </span>
      </div>
    </div>
  );
};

export default ContactCards;
