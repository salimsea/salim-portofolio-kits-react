import { Route, Routes } from "react-router-dom";
import { Navigation, Footer } from "src/components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import route_guest from "src/routes/route_guest";
import { NotFound } from "src/pages";

const App = () => {
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
