import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import {
  Logo,
  LogoCi,
  LogoCsharp,
  LogoJquery,
  LogoReact,
  ProjectDummy1,
  ProjectDummy2,
  ProjectDummy3,
  ProjectDummy4,
  SertifikatDicoding,
  SertifikatPinjul,
  UserProfileDummy,
} from "src/assets";
import "./style.css";

const Home = () => {
  const [isTab, setIsTab] = useState(1);
  return (
    <div>
      <section className="hero">
        <Container>
          <div className="d-flex align-items-center">
            <span className="garis d-none d-sm-block"></span>
            <h1 className="">
              Fullstack <span>Developer</span>
            </h1>
          </div>
          <p>
            I’am a front-end designer & back-end developer <br />
            From Indonesia 🇮🇩
          </p>
        </Container>
      </section>

      <section className="project">
        <Container>
          <Row className="text-center">
            <div className="col-md-6 mb-4">
              <img
                src={ProjectDummy1}
                width="650"
                className="img-project"
                alt=""
              />
            </div>
            <div className="col-md-6 mb-4">
              <img
                src={ProjectDummy2}
                width="650"
                className="img-project"
                alt=""
              />
            </div>
            <div className="col-md-6 mb-4">
              <img
                src={ProjectDummy3}
                width="650"
                className="img-project"
                alt=""
              />
            </div>
            <div className="col-md-6 mb-4">
              <img
                src={ProjectDummy4}
                width="650"
                className="img-project"
                alt=""
              />
            </div>
          </Row>
        </Container>
      </section>

      <section className="description">
        <div className="container">
          <div className="profile-creator">
            <div className="row">
              <div className="col-md-2">
                <div>
                  <img
                    src={UserProfileDummy}
                    width="120"
                    className="img-fluid img-creator"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-10 align-self-center">
                <h4>SALIM SEGAF ALQOSAM</h4>
                <span>Facebook</span> <span className="text-white">|</span>{" "}
                <span>Instagram</span>
              </div>
            </div>
          </div>
          <div className="card-description mt-5">
            <div className="row">
              <div className="col-md-6 pe-5">
                <p>
                  Hai, my name Salim Segaf Alqosam, from indonesia 🇮🇩 . There
                  are many variations of passages of Lorem Ipsum available, but
                  the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't
                  <br />
                  <br />
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
                <div className="mt-5">
                  <button className="btn btn-primary btn-block">
                    DOWNLOAD RESUME
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <Nav className="card-academic-experience" tabs>
                    <NavItem>
                      <NavLink
                        className={isTab === 1 ? "active" : ""}
                        onClick={() => setIsTab(1)}
                      >
                        ACADEMIC
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={isTab === 2 ? "active" : ""}
                        onClick={() => setIsTab(2)}
                      >
                        EXPERIENCE
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent
                    activeTab={`${isTab}`}
                    className="tabcontent-academic-experience mt-5 ms-4"
                  >
                    <TabPane tabId="1">
                      <ul>
                        <li>
                          <div className="bulet"></div>
                          <p>
                            2019 : (Dicoding) Course ID CAMP, Membuat aplikasi
                            menggunakan JAVA
                          </p>
                        </li>
                        <li>
                          <div className="bulet"></div>
                          <p>
                            2019 : (YouTube) Mentor Prawito Hudoro, Clone
                            aplikasi Gojek menggunakan React Native
                          </p>
                        </li>
                        <li>
                          <div className="bulet"></div>
                          <p>
                            2019 - 2020 : (BuildWithAngga) Mentor Prawito
                            Hudoro, Membuat aplikasi mobile My Doctor,
                            menggunakan React Native & Firebase
                          </p>
                        </li>
                        <li>
                          <div className="bulet"></div>
                          <p>
                            2020 : (YouTube) Mentor Prawito Hudoro, Membuat
                            aplikasi web menggunakan REACT JS{" "}
                          </p>
                        </li>
                        <li>
                          <div className="bulet"></div>
                          <p>
                            2021 - 2022 : (BuildWithAngga) Mentor Pak Angga,
                            slicing / Membuat Web front-end dengan cara
                            mengikuti SKETCH
                          </p>
                        </li>
                      </ul>
                    </TabPane>
                    <TabPane tabId="2">
                      <ul>
                        <li>
                          <div className="bulet"></div>
                          <p>2019 - 2020 : Developer Web Dropshipedia</p>
                        </li>
                        <li>
                          <div className="bulet"></div>
                          <p>
                            2020 - now : Developer Web & Mobile App School
                            Attaufiq
                          </p>
                        </li>
                        <li>
                          <div className="bulet"></div>
                          <p>
                            2021 - now : Developer Back-end & Mobile App
                            Dropshipedia
                          </p>
                        </li>
                      </ul>
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="certificate">
        <div className="container">
          <h3>Certificate</h3>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="card-certificate">
                <img
                  src={SertifikatPinjul}
                  width="494"
                  className="img-fluid py-3"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-certificate">
                <img
                  src={SertifikatDicoding}
                  width="494"
                  className="img-fluid py-3"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skill">
        <div className="container">
          <h3>Skills</h3>
          <div className="row mt-5">
            <div className="col-md-2">
              <div className="card-skill">
                <img
                  src={LogoCsharp}
                  width="100"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="card-skill">
                <img src={LogoReact} width="100" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="card-skill">
                <img
                  src={LogoJquery}
                  width="100"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="card-skill">
                <img src={LogoCi} width="100" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="card-skill">
                <img src={LogoReact} width="100" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="card-skill">
                <img
                  src={LogoJquery}
                  width="100"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
