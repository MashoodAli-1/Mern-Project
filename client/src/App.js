import Appbar from "./components/Appbar";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { getUser } from "./store/auth.js";

const App = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);
  console.log(auth);
  return (
    <>
      <Appbar />
      <Outlet />
    </>
  );
};

export default App;
