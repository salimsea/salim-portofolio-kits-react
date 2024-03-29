import React, { useEffect, useState } from "react";
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
  LogoCi,
  LogoCsharp,
  LogoHtml5,
  LogoJquery,
  LogoReact,
  ProjectDummy1,
  ProjectDummy2,
  ProjectDummy8,
  SertifikatDicoding,
  SertifikatGoogleAnalisAkademi,
  SertifikatGoogleAnalisBeginner,
  SertifikatGoogleDigitalGarage,
  SertifikatPinjul,
  SertifikatEBsiNetwork,
  UserProfileDummy,
  ProjectDummy14,
} from "src/assets";
import "./style.css";
import Slider from "react-slick";
import { URLCV, URLGITHUB, URLLINKEDIN } from "src/config/helper";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isTab, setIsTab] = useState(1);
  return (
    <div>
      <section className="hero" data-aos="fade-down">
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

      <section className="description">
        <div className="container">
          <div className="card-description mt-5">
            <div className="row">
              <div className="col-md-6 card-profile" data-aos="fade-right">
                <div className="profile-creator" data-aos="zoom-in">
                  <div className="row">
                    <div className="col-md-3">
                      <div>
                        <img
                          src={UserProfileDummy}
                          width="120"
                          className="img-fluid img-creator"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-9 align-self-center">
                      <h4>SALIM SEGAF ALQOSAM</h4>
                      <span onClick={() => (window.location = URLGITHUB)}>
                        GitHub
                      </span>{" "}
                      <span className="text-white">|</span>{" "}
                      <span onClick={() => (window.location = URLLINKEDIN)}>
                        LinkedIn
                      </span>
                    </div>
                  </div>
                </div>
                <p>
                  Hai, my name Salim Segaf Alqosam, I'm from Indonesia and a
                  software engineer, I have experience in making mobile
                  applications and websites, I can solve problems in difficulty,
                  have a willingness to learn new technology, and can work with
                  a team.
                  <br />
                  <br />
                  Techstack i like to use html, css, javascript, reactjs, react
                  native, csharp, php, postgresql, mysql.
                  {/* What do I use and implement? <br />
                  <br />
                  Programming language <br />- C#, ASP.NET <br />- PHP,
                  CodeIgniter, Laravel <br />- HTML, JavaScript, jQuery, CSS,
                  Bootstrap <br />- ReactJS, React Native <br />- PostgreSQL,
                  MYSQL <br />
                  <br />
                  Programming Tools <br />- Visual studio <br />- VS Code <br />
                  - Android Studio <br />- XCode <br />- Visual Paradigm <br />-
                  Postman Design Tools <br />- Figma <br />- Adobe Photoshop{" "}
                  <br />- Pencil <br />
                  <br />
                  Other <br />- Web Server Setup Experience (Nginx, Apache){" "}
                  <br />- Email Server Setup Experience (Zimbra) <br />- OS
                  Usage Experience (Ubuntu, MacOS, Windows) */}
                </p>
                <div className="mt-5">
                  <button
                    onClick={() => (window.location = URLCV)}
                    className="btn btn-costum-primary-outline px-5 mb-3 btn-block"
                  >
                    DOWNLOAD RESUME
                  </button>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
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
                    className="tabcontent-academic-experience mt-4 ms-4"
                  >
                    <TabPane tabId="1">
                      <ul>
                        <li>
                          <div className="bulet"></div>
                          <p>
                            2019 : (Dicoding) Course ID CAMP, Making
                            applications using JAVA
                          </p>
                        </li>
                        <li>
                          <div className="bulet"></div>
                          <p>
                            2019 : (YouTube) Mentor Prawito Hudoro, Gojek
                            application clone using React Native
                          </p>
                        </li>
                        <li>
                          <div className="bulet"></div>
                          <p>
                            2019 - 2020 : (BuildWithAngga) Mentor Prawito
                            Hudoro, Create a My Doctor mobile application, using
                            React Native & Firebase
                          </p>
                        </li>
                        <li>
                          <div className="bulet"></div>
                          <p>
                            2020 : (YouTube) Mentor Prawito Hudoro, Made web
                            application using REACT JS
                          </p>
                        </li>
                        <li>
                          <div className="bulet"></div>
                          <p>
                            2021 - 2022 : (BuildWithAngga) Mr. Angga's mentor,
                            slicing / Creating a web front-end with the follow
                            SKETCH
                          </p>
                        </li>
                      </ul>
                    </TabPane>
                    <TabPane tabId="2">
                      <ul>
                        <li>
                          <div className="bulet"></div>
                          <p>
                            PT Sawerigading Multi Kreasi <br />
                            <small>Apr 2019 - Present</small> <br />
                            Working with tech stacks : C#, React.js, React
                            Native, JQuery, PostgreSQL. <br />
                            Fullstack Developer & Maintener Web & Mobile apps
                          </p>
                        </li>
                        <li>
                          <div className="bulet"></div>
                          <p>
                            PT Digital Dropship Indonesia <br />
                            <small>Jan 2019 - Present</small> <br />
                            Working with tech stacks : C#, React.js, React
                            Native, PostgreSQL, SignalR. <br />
                            Fullstack Developer & Maintener Web & Mobile apps
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

      <section className="project">
        <Container>
          <Row className="text-center">
            <div className="col-md-12 mb-4">
              <span>My Project</span>
            </div>
            <div className="col-md-6 mb-4" data-aos="fade-up">
              <img
                src={ProjectDummy14}
                width="650"
                height="300"
                className="img-project"
                alt=""
              />
            </div>
            <div className="col-md-6 mb-4" data-aos="fade-up">
              <img
                src={ProjectDummy1}
                width="650"
                className="img-project"
                alt=""
              />
            </div>
            <div className="col-md-6 mb-4" data-aos="fade-up">
              <img
                src={ProjectDummy2}
                width="650"
                className="img-project"
                alt=""
              />
            </div>
            <div className="col-md-6 mb-4" data-aos="fade-up">
              <img
                src={ProjectDummy8}
                width="650"
                className="img-project"
                alt=""
              />
            </div>
          </Row>
        </Container>
      </section>

      <section className="certificate">
        <div className="container">
          <h3 data-aos="fade-right">Certificate</h3>
          <div className="mt-5">
            <Slider
              slidesPerRow={3}
              autoplay={true}
              infinite={true}
              speed={500}
              responsive={[
                {
                  breakpoint: 801,
                  settings: {
                    slidesPerRow: 1,
                  },
                },
              ]}
            >
              <div>
                <div className="card-certificate" data-aos="fade-up">
                  <img
                    src={SertifikatPinjul}
                    width="494"
                    className="img-fluid py-3"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="card-certificate" data-aos="fade-up">
                  <img
                    src={SertifikatDicoding}
                    width="494"
                    className="img-fluid py-3"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="card-certificate" data-aos="fade-up">
                  <img
                    src={SertifikatGoogleAnalisAkademi}
                    width="494"
                    className="img-fluid py-3"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="card-certificate" data-aos="fade-up">
                  <img
                    src={SertifikatGoogleAnalisBeginner}
                    width="494"
                    className="img-fluid py-3"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="card-certificate">
                  <img
                    src={SertifikatGoogleDigitalGarage}
                    width="494"
                    className="img-fluid py-3"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="card-certificate">
                  <img
                    src={SertifikatEBsiNetwork}
                    width="494"
                    className="img-fluid py-3"
                    alt=""
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="skill">
        <div className="container">
          <h3 data-aos="fade-right">Skills</h3>
          <div className="mt-5">
            <Slider
              slidesPerRow={5}
              responsive={[
                {
                  breakpoint: 801,
                  settings: {
                    slidesPerRow: 2,
                  },
                },
              ]}
            >
              <div>
                <div className="card-skill" data-aos="fade-up">
                  <img
                    src={LogoHtml5}
                    width="100"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="card-skill" data-aos="fade-up">
                  <img
                    src={LogoJquery}
                    width="100"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="card-skill" data-aos="fade-up">
                  <img
                    src={LogoCsharp}
                    width="100"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="card-skill" data-aos="fade-up">
                  <img
                    src={LogoReact}
                    width="100"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="card-skill" data-aos="fade-up">
                  <img src={LogoCi} width="100" className="img-fluid" alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
