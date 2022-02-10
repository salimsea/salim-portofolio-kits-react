import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import route_admin from "src/routes/route_admin";
import { NotFound } from "src/pages";
import "./style.css";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
const LayoutAdm = () => {
  const btnLogout = () => {
    localStorage.removeItem("TOKEN");
  };
  return (
    <div>
      <section className="menu pt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 d-none d-md-block">
              <div className="card-menu bg-white p-4">
                <h4>Menu</h4>
                <div className="mt-3">
                  <ul>
                    <li>
                      <Link to={"/admin-console"}>
                        <div className="bulet-white"></div>
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to={"/admin-console/manage-portfolio"}>
                        <div className="bulet-white"></div>
                        Manage Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link to={"/admin-console/manage-blog"}>
                        <div className="bulet-white"></div>
                        Manage Blogger
                      </Link>
                    </li>
                    <li>
                      <Link to={"/admin-console/settings"}>
                        <div className="bulet-white"></div>
                        Settings Page
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"} onClick={btnLogout}>
                        <div className="bulet-white"></div>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="card-content">
                {/* CONTENT NYA BROOO */}
                <Suspense fallback={loading}>
                  <Routes>
                    {route_admin.map(
                      ({ path, name, Component, exact }, key) => {
                        return (
                          <Route
                            key={key}
                            exact={exact}
                            path={path}
                            name={name}
                            element={<Component />}
                          />
                        );
                      }
                    )}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LayoutAdm;
