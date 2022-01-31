import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Modal, ModalBody } from "reactstrap";
import {
  LogoReact,
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
  const [modal, setModal] = useState(false);
  const showModal = () => setModal(!modal);
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
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={showModal}
                    >
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
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={showModal}
                    >
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
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={showModal}
                    >
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
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={showModal}
                    >
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
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={showModal}
                    >
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
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={showModal}
                    >
                      DETAIL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal centered size="xl" isOpen={modal} toggle={showModal}>
        <ModalBody>
          <div className="row card-detail">
            <div className="col-md-7 d-flex align-items-center justify-content-center">
              <div className="img-card">
                <img src={ProjectDummy5} className="img-fluid" width={600} />
              </div>
            </div>
            <div className="col-md-5">
              <div className="py-3">
                <span className="text-platform">Web Apps</span>
                <h1>REDESIGN NETFLIX</h1>
                <span className="text-stack">Use : </span>
                <div>
                  <img src={LogoReact} className="img-fluid" width={60} />
                </div>
                <div className="mt-4">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-costum-primary-outline mx-1 px-4"
                  >
                    CONTACT ME
                  </button>
                  <button
                    type="button"
                    className="btn btn-costum-secondary mx-1 px-4"
                    onClick={showModal}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Portfolio;
