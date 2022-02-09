import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation, Footer } from "src/components";
import route_guest from "src/routes/route_guest";
import { NotFound } from "src/pages";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import "./App.css";

const App = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
    console.log("props", window.location.pathname);
  }, []);

  return (
    <>
      <Navigation />
      <Routes>
        {route_guest.map(({ path, name, Component, exact }, key) => {
          return (
            <Route
              key={key}
              exact={exact}
              path={path}
              name={name}
              element={<Component />}
            />
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
