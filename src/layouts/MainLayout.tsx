import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar/NavBar";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
