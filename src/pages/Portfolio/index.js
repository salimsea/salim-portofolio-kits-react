import React from "react";
import { useParams } from "react-router-dom";
import {
  ProjectDummy1,
  ProjectDummy2,
  ProjectDummy3,
  ProjectDummy4,
  ProjectDummy5,
  ProjectDummy6,
} from "src/assets";
import "./style.css";

const Portfolio = () => {
  let params = useParams();
  return (
    <div>
      <section className="title-portfolio">
        <div className="container text-center">
          <h1>Portfolio</h1>
          <p className="mt-3">
            I’am a front-end designer & back-end developer Based Indonesia 🇮🇩
          </p>
        </div>
      </section>

      <section className="project-portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card-project">
                <img src={ProjectDummy1} className="img-project" alt="" />
                <div className="row bg-primary py-3 mx-0 px-2">
                  <div className="col-md-8 text-left">
                    <span>Mobile Apps</span>
                    <h3>AT SMILE</h3>
                  </div>
                  <div className="col-md-4 align-self-center text-end">
                    <button type="button" className="btn btn-primary">
                      DETAIL
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-project">
                <img src={ProjectDummy2} className="img-project" alt="" />
                <div className="row bg-primary py-3 mx-0 px-2">
                  <div className="col-md-8 text-left">
                    <span>Web Apps</span>
                    <h3>PRODUCTLY</h3>
                  </div>
                  <div className="col-md-4 align-self-center text-end">
                    <button type="button" className="btn btn-primary">
                      DETAIL
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-project">
                <img src={ProjectDummy3} className="img-project" alt="" />
                <div className="row bg-primary py-3 mx-0 px-2">
                  <div className="col-md-8 text-left">
                    <span>Mobile Apps</span>
                    <h3>MAPS DIRECTION</h3>
                  </div>
                  <div className="col-md-4 align-self-center text-end">
                    <button type="button" className="btn btn-primary">
                      DETAIL
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-project">
                <img src={ProjectDummy4} className="img-project" alt="" />
                <div className="row bg-primary py-3 mx-0 px-2">
                  <div className="col-md-8 text-left">
                    <span>Mobile Apps</span>
                    <h3>MAPS DIRECTION</h3>
                  </div>
                  <div className="col-md-4 align-self-center text-end">
                    <button type="button" className="btn btn-primary">
                      DETAIL
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-project">
                <img src={ProjectDummy5} className="img-project" alt="" />
                <div className="row bg-primary py-3 mx-0 px-2">
                  <div className="col-md-8 text-left">
                    <span>Mobile Apps</span>
                    <h3>MAPS DIRECTION</h3>
                  </div>
                  <div className="col-md-4 align-self-center text-end">
                    <button type="button" className="btn btn-primary">
                      DETAIL
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-project">
                <img src={ProjectDummy6} className="img-project" alt="" />
                <div className="row bg-primary py-3 mx-0 px-2">
                  <div className="col-md-8 text-left">
                    <span>Mobile Apps</span>
                    <h3>MAPS DIRECTION</h3>
                  </div>
                  <div className="col-md-4 align-self-center text-end">
                    <button type="button" className="btn btn-primary">
                      DETAIL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
