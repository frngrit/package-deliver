import React from "react";
import NavBar from "./components/Navbar";
import Parcels from "./Pages/Parcels";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/parcels",
        element: <Parcels />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/*",
        element: <Navigate to={"/home"} />,
      },
      {
        path: "/",
        element: <Navigate to={"/home"} />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

function NavbarWrapper() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App();
