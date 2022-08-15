import React from "react";
import { AboutInfo } from "../components/AboutInfo";
import { HomeFirstBackground } from "../components/HomeFisrtBackground";
import { Trainings } from "../components/Trainings";
import "../styles/placeholder.scss";
import "../../src/styles/placeholder.scss"

export const Home = ({ data }) => {
  // useParams: gives us url params

  return (
    <>
      <HomeFirstBackground />
      <div className="container">
        <Trainings data={data} />
        <AboutInfo />
      </div>
    </>
  );
};
