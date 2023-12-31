import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import reportWebVitals from "./reportWebVitals";
import router from "./routes.js";
import { Provider } from "react-redux";
import store from "../src/store/index.js";
import { /* createBrowserRouter, */ RouterProvider } from "react-router-dom";
// import App from "./App.js";

// const router = createBrowserRouter([
//   {
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/register",
//         element: <Register />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
