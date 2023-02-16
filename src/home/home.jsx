import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import TopNavbar from "../navigation/TopNavbar";
import Content from "./content";
import Footer from "../footer/footer";

function Home() {
  const location = useLocation();
  const pageTitle = () => {
    let titleName;
    switch (location.pathname) {
      case "/":
        titleName = "Homepage";
        break;
      case "/whatis":
        titleName = "Dashboard";
        break;
      case "/contact-us":
        titleName = "Contact Us";
        break;
      case "/movies":
        titleName = "Movies";
        break;
      default:
        titleName = "404";
    }
    return titleName;
  };
  return (
    <>
      <TopNavbar />
      <div className="main-content">
        <div>{pageTitle() === "Homepage" ? <Content /> : <Outlet />}</div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
