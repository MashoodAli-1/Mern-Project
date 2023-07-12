import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const Guest = ({ children }) => {
  const token = Cookies.get("token");
  return !token ? children : <Navigate to={"/"} replace={true} />;
};

export default Guest;
