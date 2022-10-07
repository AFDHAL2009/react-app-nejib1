import { React, useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import "../styles/Login.css";
import "../styles/Register.css";
import image from "../assets/images/dev.jfif";
import Select from "react-select";
import { MdAutoDelete } from "react-icons/md";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { customersSuccess } from "../stores/customer";
import { fetchUsers, login } from "../stores/users";
import { useNavigate } from "react-router";
import Loader from "react-js-loader";
const Home = () => {
  const [data, setData] = useState("");
  let navigate = useNavigate();
  const childToParent = (childdata) => {
    setData(childdata);
  };
  const selectStyles = {
    control: (styles) => ({
      ...styles,
      borderColor: "green",
      borderWidth: 2,
      borderRadius: 25,
      width: 360,
      marginLeft: 0,
    }),
  };

  const _renderHome = () => {
    return (
      <div className="login-Container">
        <SideBar />
        <div style={{ margin: 40, textAlign: "left" }}>
          <h1 style={{ color: "yellowgreen" }}>NEJIB AFDHAL</h1>
        </div>
        <div style={{ backgroundColor: "gray", margin: 20, height: 50 }}>
          <h1 style={{ color: "yellow" }}>
            Master of Computer Science,MERN Stack developer & Mobile Developer
          </h1>
        </div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginLeft: 20,
            width: 270,
          }}
        >
          <div style={{ margin: 10, fontSize: 20 }}>
            {" "}
            <button className="Linkedin-Button">in</button>
          </div>
          <div style={{ margin: 10, fontSize: 20 }}>
            <button className="Github-Button">gitHub</button>
          </div>
          <div style={{ margin: 10, fontSize: 20 }}>
            <button className="Google-Button">google</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ flexDirection: "column" }}>
      <div>
        {" "}
        <Header childToParent={childToParent} />
      </div>

      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          height: "600px",
        }}
      >
        {_renderHome()}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
