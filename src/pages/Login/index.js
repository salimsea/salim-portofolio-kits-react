import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const AdmLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("TOKEN");
    if (user !== null) navigate("/admin-console");
    // if (user !== null) window.location = "/admin-console";
    window.scrollTo(0, 0);
  }, []);
  const btnLogin = () => {
    localStorage.setItem("TOKEN", "ready");
    window.location = "/admin-console";
  };
  return (
    <div>
      <section className="title-login">
        <div className="container text-center">
          <h1>Administrator</h1>
          <p className="mt-3">Log in using your administrator account</p>
        </div>
      </section>
      <section className="form-login">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="login-header">
                <h6 className="px-3 pt-3 pb-1">LOGIN</h6>
                <div className="login-body px-5 p-5">
                  <form className="form-horizontal">
                    <div className="form-group row">
                      <label className="col-form-label col-sm-3">
                        Username
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="Username"
                          placeholder="Enter your username..."
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-4">
                      <label className="col-form-label col-sm-3">
                        Password
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="password"
                          className="form-control"
                          name="Password"
                          placeholder="Enter your password..."
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <center>
                        <button
                          type="button"
                          className="btn btn-costum-primary-outline px-5"
                          onClick={btnLogin}
                        >
                          LOGIN
                        </button>
                      </center>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmLogin;