import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Donation from "./components/Donation";
import Statistics from "./components/Statistics";
import CategoryDetails from "./components/CategoryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch("../donation.json"),
      },

      {
        path: "/category/:id",
        element: <CategoryDetails></CategoryDetails>,
        loader: () => fetch("../donation.json"),
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("../donation.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
