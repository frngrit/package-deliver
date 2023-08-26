import React from "react";
import NavBar from "./components/Navbar";
import Parcels from "./Pages/Parcels";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
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
        path: "/",
        element: <>404 page not found</>,
      },
    ]
  }
]);


function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

function NavbarWrapper(){
  return (
  <div>
      <NavBar/>
      <Outlet/>
  </div>
  )
};

export default App();
