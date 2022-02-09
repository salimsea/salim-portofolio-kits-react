import React, { useEffect } from "react";
import "./style.css";

const AdmDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card-menu bg-white p-3">
                <h4>Menu</h4>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card-content bg-white p-3">
                <h4>Dashboard</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmDashboard;
