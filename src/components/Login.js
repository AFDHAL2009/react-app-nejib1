import { React, useEffect, useState } from "react"
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import Footer from "../components/Footer"
import "../styles/Login.css"
import "../styles/Register.css"
import image from "../assets/images/car.jpg"
import Select from "react-select"
import { MdAutoDelete } from "react-icons/md"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
//import { login } from '../features/counter/authSlice';
import { fetchUsers, login, logout } from "../stores/users"
import { useNavigate } from "react-router"
import Loader from "react-js-loader"
const Login = () => {
  const [data, setData] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isValidEmail, setEmailValid] = useState(true)
  const [isValidPassword, setPasswordValid] = useState(true)

  const {
    users,
    isLoading,
    isSuccess,
    isFailed,
    isLoadingLogin,
    isSuccessLogin,
    isFailedLogin,
  } = useSelector((state) => state.root.users)

  let navigate = useNavigate()
  //const count = useSelector((state) => state.counter.value)
  //const isLogged = useSelector((state1) => state1.islogged.value)
  const dispatch = useDispatch()
  // handle selection
  const childToParent = (childdata) => {
    setData(childdata)
  }

  const validate_email = (email) => {
    let regEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    if (regEmail.test(email)) {
      console.log("invalid email")
      setEmailValid(true)
      return true
    } else {
      setEmailValid(false)
      console.log("email valid")
      return false
    }
  }

  const validate_password = (_password) => {
    const mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    )
    if (mediumRegex.test(_password)) {
      setPasswordValid(true)
      return true
    } else {
      setPasswordValid(false)
      return false
    }
  }

  const _doLogin = () => {
    if (isValidEmail && isValidPassword) {
      if (email !== "" || password !== "")
        //dispatch(login("nejibafdhal1@yahoo.com","afdhal"));
        dispatch(login(email, password))
      else {
        alert("Please enter your email and password!")
      }
    } else {
      alert("Please validate email or password!")
    }
  }

  const _renderSignIn = () => {
    // console.log("redux="+JSON.stringify(users));

    // alert("isLogged="+isLogged);
    return (
      <div className="login-Container">
        <h2 style={{ color: "white" }}>Welcome User for Login page</h2>
        <div className="login_inner-Container">
          <h3>Please login or try to register</h3>
          <form>
            <div>
              <input
                className={isValidEmail ? "login-Input" : "login-Input-error"}
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  validate_email(e.target.value)
                }}
              />
            </div>
            {!isValidEmail ? (
              <label style={{ color: "red" }}>Email is not valid!</label>
            ) : null}
            <div>
              <input
                className={
                  isValidPassword ? "login-Input1" : "login-Input-error"
                }
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  validate_password(e.target.value)
                }}
              />
            </div>
            {!isValidPassword ? (
              <label style={{ color: "red" }}>
                Please use a good password{" "}
              </label>
            ) : null}
            <div>
              <button
                type="button"
                className="login-Button"
                onClick={() => {
                  _doLogin()
                }}
              >
                Login
              </button>
            </div>
            {isLoadingLogin ? (
              <div style={{ margin: "-2em" }}>
                <Loader
                  type="spinner-circle"
                  bgColor={"purple"}
                  color={"#FFFFFF"}
                  size={50}
                />
              </div>
            ) : (
              <div style={{ margin: "-2em" }}>
                {" "}
                <Loader
                  type="spinner-circle"
                  bgColor={"transparent"}
                  color={"transparent"}
                  size={50}
                />
              </div>
            )}
            {isFailedLogin ? (
              <div style={{ margin: "-3em" }}>
                <span style={{ color: "red" }}>
                  Login failed:Email or password is worng!
                </span>
              </div>
            ) : null}
            {isSuccessLogin ? (
              <div style={{ margin: "-3em" }}>
                <span style={{ color: "green" }}>Login sucess!</span>
              </div>
            ) : null}

            <div>
              <span>Have not an account yet? </span>
              <span
                className="register-click"
                onClick={() => navigate("/register")}
              >
                SignUp
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  }

  useEffect(() => {
    console.log("isLoadingLogin=" + isLoadingLogin)
    console.log("isSuccessLogin=" + isSuccessLogin)
    console.log("isFailedLogin=" + isFailedLogin)
  }, [isLoadingLogin, isSuccessLogin, isFailedLogin])

  useEffect(() => {
    //dispatch(login("nejibafdhal1@yahoo.com","afdhal"));

    if (isSuccessLogin) {
      navigate("/home")
    }
  }, [isSuccessLogin])

  useEffect(() => {
    // getArtistsInfo();
    // console.log("isLoading="+isLoading);
    // console.log("isSuccess="+isSuccess)
    // console.log("isFailed="+isFailed);
    // console.log("users"+users)
    // dispatch(fetchUsers());npx nodemon app.js
    // dispatch(fetchUsers())
  }, [users])

  const getArtistsInfo = () => {
    axios("http://time.jsontest.com/")
      .then((response) => {
        console.log("response=" + JSON.stringify(response.data))
      })
      .catch((error) => {
        console.log("error")
      })
  }
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
        {_renderSignIn()}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Login
