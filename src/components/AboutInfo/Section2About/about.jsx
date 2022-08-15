import React from "react";
import "./about.scss";

export const Section2About = () => {
  return (
    <div className="section2About">
      <p className="title-about">Haqqımizda</p>
      <h2 className="information">Bilim Bakı Haqqında Məlumat </h2>
      <span className="sec2-title">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
        cupiditate voluptatum asperiores nesciunt provident ut fugit. In quos
        possimus officia?
      </span>

      <div className="sec2-title-main">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora commodi accusamus labore praesentium pariatur iste eius debitis in nesciunt vitae!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est adipisci, quidem autem illum accusamus porro.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eligendi earum dicta quia officiis tenetur?</p>
      </div>
      <button className="see"><p className="see-title">Ətraflı Bax</p></button>
    </div>
  );
};
