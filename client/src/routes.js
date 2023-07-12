import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.js";
import CheckAuth from "./Utils/CheckAuth.js";
import Guest from "./Utils/Guest.js";

// const token = Cookies.get("token");

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        // element: token ? <Home /> : <Navigate to="/login" replace={true} />
        element: (
          <CheckAuth>
            <Home />
          </CheckAuth>
        ),
      },
      {
        path: "/login",
        element: (
          <Guest>
            <Login />
          </Guest>
        ),
      },
      {
        path: "/register",
        element: (
          <Guest>
            <Register />
          </Guest>
        ),
      },
    ],
  },
]);
