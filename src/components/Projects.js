import { React, useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import "../styles/Login.css";
import "../styles/Register.css";
import "../styles/Banner.css";
import image from "../assets/images/dev.jfif";
import styled from "styled-components";
import { Link } from "react-router-dom";
import imageprofile from "../assets/images/profile.jpg";
import imageCamera from "../assets/images/camera.png";
import imageIrrigation from "../assets/images/irrigation.png";
import imageHeart from "../assets/images/heart.png";
import imageOuitaxi from "../assets/images/ouitaxi.png";
import imageCoq from "../assets/images/coq.png";

const Projects = () => {
  const [data, setData] = useState("");
  const childToParent = (childdata) => {
    setData(childdata);
  };
  const NavUnlisted = styled.ul`
    text-decoration: none;
  `;
  const StyledLink = styled(Link)`
    color: Blue;
    text-decoration: none;
    margin: 1rem;
    position: relative;
  `;
  const _renderProjects = () => {
    return (
      <div className="projects-Container">
        <SideBar />
        <div
          style={{
            marginLeft: 100,
            textAlign: "left",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <h1 style={{ color: "yellow", marginRight: 5 }}>My</h1>
          <h1 style={{ color: "yellowgreen" }}> Projects and progress</h1>
        </div>

        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div className="project">
            <h3
              style={{
                fontWeight: "bold",
                backgroundColor: "yellow",
                marginTop: 10,
              }}
            >
              Camera IP
            </h3>
            <div style={{ marginleft: 10, justifyContent: "center" }}>
              <img
                src={imageCamera}
                alt="La maison jungle"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  color: "red",
                }}
              />
            </div>
            <p style={{ textAlign: "justify", color: "white" }}>
              Its an application mobile android for control camera IP with two
              model(Pnasonic & Axis) it is the first app that developed in in My
              PFE licence at 2011-2012 years
            </p>
          </div>
          <div className="project">
            <h3
              style={{
                fontWeight: "bold",
                backgroundColor: "yellow",
                marginTop: 10,
              }}
            >
              IoT irrigation
            </h3>
            <div style={{ marginleft: 10, justifyContent: "center" }}>
              <img
                src={imageIrrigation}
                alt="irrigation"
                style={{ width: 80, height: 80, borderRadius: 50 }}
              />
            </div>
            <p style={{ textAlign: "justify", color: "white" }}>
              it is a native android application of automatic watering system
              which is part of the Internet of things developed in the year
              2020.
            </p>
          </div>
          <div className="project">
            <h3
              style={{
                fontWeight: "bold",
                backgroundColor: "yellow",
                marginTop: 10,
              }}
            >
              Heart Monitoring
            </h3>
            <div style={{ marginleft: 10, justifyContent: "center" }}>
              <img
                src={imageHeart}
                alt="Heart monitoring"
                style={{ width: 80, height: 80, borderRadius: 50 }}
              />
            </div>
            <p style={{ textAlign: "justify", color: "white" }}>
              it is an android application for monitoring the patient's heart
              rate dedicated to the doctor attached to module ESP32 sensors data
              collectors dev developed at 2020 year.
            </p>
          </div>
        </div>
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 20,
          }}
        >
          <div className="project">
            <h3
              style={{
                fontWeight: "bold",
                backgroundColor: "yellow",
                marginTop: 10,
              }}
            >
              Ouitaxi
            </h3>
            <div style={{ marginleft: 10, justifyContent: "center" }}>
              <img
                src={imageOuitaxi}
                alt="La maison jungle"
                style={{ width: 80, height: 80, borderRadius: 50 }}
              />
            </div>
            <p style={{ textAlign: "justify", color: "white" }}>
              OuiTaxi is a full mobile application, it is the professional and
              user-friendly means of transport which offers a Taxi service made
              in France in different countries. developed in 2021 within
              MicroAcess company.
            </p>
            <h4
              style={{
                fontWeight: "bold",
                backgroundColor: "green",
                marginTop: 10,
              }}
            >
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.ouitaxi.fr&hl=fr&gl=US"
              >
                Playstore
              </a>
              <span> {"or  "}</span>
              <a
                target="_blank"
                href="https://apps.apple.com/tn/app/ouitaxi/id1558214280"
              >
                Appstore
              </a>
            </h4>
          </div>
          <div className="project">
            <h3
              style={{
                fontWeight: "bold",
                backgroundColor: "yellow",
                marginTop: 10,
              }}
            >
              Coq chauffeur
            </h3>
            <div style={{ marginleft: 10, justifyContent: "center" }}>
              <img
                src={imageCoq}
                alt="La maison jungle"
                style={{ width: 80, height: 80, borderRadius: 50 }}
              />
            </div>
            <p style={{ textAlign: "justify", color: "white" }}>
              it is a complete mobile application for the VTC race dispatch in
              France developed within the company MicoAcess and maintained in
              the years 2021-2022.
            </p>
            <h4
              style={{
                fontWeight: "bold",
                backgroundColor: "green",
                marginTop: 35,
              }}
            >
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.godispatch.fr&hl=fr&gl=US"
              >
                Playstore
              </a>
              <span> {"or  "}</span>
              <a
                target="_blank"
                href="https://apps.apple.com/fr/app/coq-chauffeur/id1503893435"
              >
                Appstore
              </a>
            </h4>
          </div>
          <div className="project">
            <h3
              style={{
                fontWeight: "bold",
                backgroundColor: "yellow",
                marginTop: 10,
              }}
            >
              ...
            </h3>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="fill-window">
      <div>
        {" "}
        <Header childToParent={childToParent} />
      </div>

      <div
        style={{
          backgroundImage: `url(${image})`,
          height: "200vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {_renderProjects()}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default Projects;
