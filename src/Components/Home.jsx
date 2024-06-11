import React from "react";
import "./Home.css";
import { Socia } from "./Socia";
import { Data } from "./Data";

export const Home = () => {
  return (
    <div className="home-container">
        <Socia  className="mysocial"/>
        <div className="home_img"></div>
        <Data className="data" />
    </div>
  );
};
