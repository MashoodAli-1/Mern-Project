import React, { useEffect, useState } from "react";
import { Navigate, redirect } from "react-router-dom";
import Cookies from "js-cookie";

const CheckAuth = ({ children }) => {
  const token = Cookies.get("token");
  // const [isAuthenticated, setisAuthenticated] = useState(false);
  const fetchUser = async () => {
    const res = await fetch("http://localhost:4000/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      redirect("/login");
    }
    // setisAuthenticated(res.ok);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // return isAuthenticated ? children : <Navigate to={"/login"} replace={true} />;
  return children;
};

export default CheckAuth;
