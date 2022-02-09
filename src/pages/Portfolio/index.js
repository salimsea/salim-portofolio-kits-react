import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Modal, ModalBody } from "reactstrap";
import {
  LogoCsharp,
  LogoHtml5,
  LogoJquery,
  LogoReact,
  ProjectDummy1,
  ProjectDummy10,
  ProjectDummy2,
  ProjectDummy3,
  ProjectDummy4,
  ProjectDummy5,
  ProjectDummy7,
  ProjectDummy8,
  ProjectDummy9,
} from "src/assets";
import ItemProduct from "./parts/ItemProduct";
import "./style.css";

const jsonProduct = [
  {
    image: ProjectDummy1,
    type: "Mobile Apps",
    title: "AT SMILE",
    description:
      "This is an educational application to view subjects, online learning, mutabaah, and online bill payment, you can see it on playstore, visit now: https://play.google.com/store/apps/details?id=com.sekolahattaufiq.siswa",
    tech: [LogoReact, LogoCsharp],
  },
  {
    image: ProjectDummy2,
    type: "Web Apps",
    title: "PRODUCTLY",
    description:
      "This is a landing page application, the result of my learning in doing slicing pages from figma to the web, visit now: https://seal-project1.netlify.app/",
    tech: [LogoHtml5, LogoJquery],
  },
  {
    image: ProjectDummy3,
    type: "Web Apps",
    title: "MAPS DIRECTION",
    description:
      "This is a saluler application to find distances with a map, this is also my learning application, you can see it here: https://play.google.com/store/apps/details?id=com.maps.direction",
    tech: [LogoReact],
  },
  {
    image: ProjectDummy4,
    type: "Web Apps",
    title: "ONE DATA MUBA",
    description:
      "This is a landing page application, the result of my learning in doing slicing pages from figma to the web, visit now: https://seal-project2.netlify.app/",
    tech: [LogoHtml5, LogoJquery],
  },
  {
    image: ProjectDummy5,
    type: "Web Apps",
    title: "REDESIGN NETFLIX",
    description:
      "This is a landing page application, the result of my learning in doing slicing pages from figma to the web, visit now: https://seal-project3.netlify.app/",
    tech: [LogoHtml5, LogoJquery],
  },
  {
    image: ProjectDummy7,
    type: "Web Apps",
    title: "SCHOOL ATTAUFIQ",
    description:
      "This is a school website application to provide information to visitors, you can see here https://sekolahattaufiq.id/",
    tech: [LogoHtml5, LogoJquery, LogoCsharp],
  },
  {
    image: ProjectDummy8,
    type: "Web Apps",
    title: "ONE DATA SIGI",
    description:
      "This is a website application for one sigi district data, collects all information in the sigi area, and is integrated into one indonesian data, you can see it here: http://sigione.swg.co.id/",
    tech: [LogoReact, LogoCsharp],
  },
  {
    image: ProjectDummy9,
    type: "Web Apps",
    title: "DROPSHIPEDIA WEB",
    description:
      "This is a website application to sell goods by dropship, you can visit it here: https://dropshipedia.id",
    tech: [LogoReact, LogoCsharp],
  },
  {
    image: ProjectDummy10,
    type: "Web Apps",
    title: "DROPSHIPEDIA MOBILE",
    description:
      "This is a mobile application for selling goods by dropship, you can visit it here: not available",
    tech: [LogoReact, LogoCsharp],
  },
];

const Portfolio = () => {
  const [dataModal, setDataModal] = useState(null);
  const [modal, setModal] = useState(false);
  const showModal = () => setModal(!modal);
  const modalDetail = (v) => {
    setDataModal(v);
    showModal();
  };
  return (
    <div>
      <section className="title-portfolio">
        <div className="container text-center" data-aos="zoom-in">
          <h1>Portfolio</h1>
          <p className="mt-3">
            This is a portfolio page that I made to display any products that
            have been made
          </p>
        </div>
      </section>

      <section className="project-portfolio">
        <div className="container">
          <div className="row">
            {jsonProduct.map((v, i) => {
              return (
                <ItemProduct
                  key={i}
                  image={v.image}
                  type={v.type}
                  title={v.title}
                  onModal={() => modalDetail(v)}
                />
              );
            })}
          </div>
        </div>
      </section>

      <Modal centered size="xl" isOpen={modal} toggle={showModal}>
        <ModalBody>
          <div className="row card-detail">
            <div className="col-md-7 d-flex align-items-center justify-content-center">
              <div className="img-card">
                <img src={dataModal?.image} className="img-fluid" width={600} />
              </div>
            </div>
            <div className="col-md-5">
              <div className="py-3">
                <span className="text-platform">{dataModal?.type}</span>
                <h1>{dataModal?.title}</h1>
                <span className="text-stack">Use : </span>
                <div className="mt-2">
                  {dataModal?.tech.map((v, i) => {
                    return (
                      <img key={i} src={v} className="img-fluid" width={60} />
                    );
                  })}
                </div>
                <div className="mt-3">
                  <p>{dataModal?.description}</p>
                </div>
                <div className="d-flex justify-content-end mt-4">
                  <button
                    type="button"
                    className="btn btn-costum-primary-outline mx-1 px-4"
                    onClick={() =>
                      (window.location =
                        "https://api.whatsapp.com/send/?phone=6282112235774&text=Assalamualaikum+Warahmatullahi+Wabarakatuh&app_absent=0")
                    }
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
