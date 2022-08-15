import React from "react";
import { HomeFirstBackground } from "../components/HomeFisrtBackground";
import { Section1 } from "../components/Section1";
import "../styles/placeholder.scss"

export const Home = ({data}) => {
  // useParams: gives us url params

  return (
    <>
      <HomeFirstBackground />
      <Section1 data={data}/>
    </>
  );
};
