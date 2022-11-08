import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Bottom from "../Shared/Bottom/Bottom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Bottom></Bottom>
    </div>
  );
};

export default Main;
