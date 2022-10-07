import { React, useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import "../styles/Login.css";
import "../styles/Register.css";
import "../styles/Banner.css";
import image from "../assets/images/dev.jfif";
import imageprofile from "../assets/images/profile.jpg";
const About = () => {
  const [data, setData] = useState("");
  const childToParent = (childdata) => {
    setData(childdata);
  };

  const _renderAbout = () => {
    return (
      <div className="login-Container">
        <SideBar />
        <div
          style={{
            marginLeft: 100,
            textAlign: "left",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <h1 style={{ color: "yellow", marginRight: 5 }}>About</h1>
          <h1 style={{ color: "yellowgreen" }}> Me</h1>
        </div>
        <div
          style={{
            marginLeft: 100,
            marginTop: -30,
            textAlign: "left",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <h3 style={{ color: "yellow", marginRight: 5 }}>
            Let me tell you a few things...
          </h3>
        </div>
        <div
          style={{
            marginLeft: 120,
            marginRight: 150,
            flexDirection: "row",
            display: "flex",
          }}
        >
          <img
            src={imageprofile}
            alt="La maison jungle"
            className="lmj-logo1"
          />
          <h2 style={{ marginLeft: 150, color: "green", marginTop: -15 }}>
            BIO
          </h2>
          <p
            style={{
              textAlign: "justify",
              color: "yellow",
              fontFamily: "cursive",
              fontSize: 20,
            }}
          >
            {" "}
            Passionate about front-end web development with new technologies as
            well as mobile development, this profession always requires us to be
            innovative, ambitious and proud of our own competence to achieve the
            desired objectives.{" "}
          </p>
        </div>

        <div
          style={{
            marginLeft: 5,
            textAlign: "left",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 30,
          }}
        >
          <div style={{ backgroundColor: "#011528", width: 350 }}>
            <h3
              style={{
                color: "yellow",
                fontFamily: "Arial",
                textAlign: "center",
              }}
            >
              Applied license in computer networks
            </h3>
            <h5
              style={{
                color: "yellow",
                fontFamily: "Arial",
                textAlign: "center",
              }}
            >
              Committed Licence Student
            </h5>
            <p style={{ color: "white" }}>
              2009-2012. Study computer networks at Tunsian university and
              obtaining the hight diploma as LMD diet (Licence,degree)
            </p>
          </div>
          <div style={{ backgroundColor: "#011528", width: 350 }}>
            <h3
              style={{
                color: "yellow",
                fontFamily: "Arial",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Research Master in Computer Sciences
            </h3>
            <h5
              style={{
                color: "yellow",
                fontFamily: "Arial",
                textAlign: "center",
              }}
            >
              Committed Licence Student
            </h5>
            <p style={{ color: "white" }}>
              2014-2015.Studies in computer science at Tunsian university and
              obtaining the hight diploma as LMD diet (Master degree)
            </p>
          </div>
          <div style={{ backgroundColor: "#011528", width: 350 }}>
            <h3
              style={{
                color: "yellow",
                fontFamily: "Arial",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Phd Student{" "}
            </h3>
            <h5
              style={{
                color: "yellow",
                fontFamily: "Arial",
                textAlign: "center",
              }}
            >
              Committed Licence Student
            </h5>
            <p style={{ color: "white" }}>
              2018-2020.Studies Phd at Tunsian ENIS university
            </p>
          </div>
        </div>

        <div
          style={{
            marginLeft: 5,
            textAlign: "left",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 30,
          }}
        >
          <div style={{ backgroundColor: "#011528", width: 350 }}>
            <h3
              style={{
                color: "yellow",
                fontFamily: "Arial",
                textAlign: "center",
              }}
            >
              Development
            </h3>
            <h5
              style={{
                color: "yellow",
                fontFamily: "Arial",
                textAlign: "center",
              }}
            >
              Junior developer
            </h5>
            <p style={{ color: "white" }}>
              2020-2021. A junior Mobile& web developer(Android native &
              reactJS)
            </p>
          </div>
          <div style={{ backgroundColor: "#011528", width: 350 }}>
            <h3
              style={{
                color: "yellow",
                fontFamily: "Arial",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Mobile development{" "}
            </h3>
            <h5
              style={{
                color: "yellow",
                fontFamily: "Arial",
                textAlign: "center",
              }}
            >
              A confirmed Mobile developer
            </h5>
            <p style={{ color: "white" }}>
              2021-2022.Mobile developer in react native framework
            </p>
          </div>
          <div style={{ backgroundColor: "#011528", width: 350 }}>
            <h3
              style={{
                color: "yellow",
                fontFamily: "Arial",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Web & Mobile development{" "}
            </h3>
            <h5
              style={{
                color: "yellow",
                fontFamily: "Arial",
                textAlign: "center",
              }}
            >
              Full stackJS developer{" "}
            </h5>
            <p style={{ color: "white" }}>
              Mern Stack developer & react native developer
            </p>
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
        {_renderAbout()}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default About;
