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
import { customersSuccess } from "../stores/customer"
import { fetchUsers, login } from "../stores/users"
import { useNavigate } from "react-router"
import Loader from "react-js-loader"
const Home = () => {
  const [data, setData] = useState("")
  //states of first step register
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [email1, setEmail1] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phone, setPhone] = useState("")
  //states of second step register
  const [registerNumber, setRegisterNumber] = useState("")
  const [model, setModel] = useState("")
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [selectedColors, setSelectedColors] = useState(null)
  const [selectedRental, setSelectedRental] = useState(null)
  const [selectedValue, setSelectedValue] = useState(null)
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
  const { customers } = useSelector((state) => state.root.customers)

  let navigate = useNavigate()
  //const count = useSelector((state) => state.counter.value)
  //const isLogged = useSelector((state1) => state1.islogged.value)
  const dispatch = useDispatch()
  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value)
    alert(JSON.stringify(value))
  }
  // handle selection Brand
  const handleBrand = (value) => {
    setSelectedBrand(value)
    alert(JSON.stringify(value))
  }

  // handle selection color
  const handleColors = (value) => {
    setSelectedColors(value)
    alert(JSON.stringify(value))
  }

  // handle selection rental
  const handleRental = (value) => {
    setSelectedRental(value)
    alert(JSON.stringify(value))
  }
  const childToParent = (childdata) => {
    setData(childdata)
  }
  const BrandOptions = [
    { value: "audi", label: "Audi" },
    { value: "bmw", label: "BMW" },
    { value: "citroen", label: "Citroen" },
    { value: "ford", label: "Ford" },
    { value: "honda", label: "Honda" },
    { value: "jaguar", label: "Jaguar" },
    { value: "mercedes", label: "Mercedes" },
    { value: "mini", label: "Mini" },
    { value: "nissan", label: "Nissan" },
    { value: "toyota", label: "Toyota" },
    { value: "volvo", label: "Volvo" },
  ]

  const RentalOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ]

  const ColorsOptions = [
    { label: "Blue", value: "blue" },
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "White", value: "white" },
    { label: "Black", value: "black" },
    { label: "Gray", value: "gray" },
    // more options...
  ]

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      borderColor: "green",
      borderWidth: 2,
      borderRadius: 25,
      width: 360,
      marginLeft: 0,
    }),
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
        dispatch(login("nejibafdhal1@yahoo.com", "afdhal"))
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
                onClick={() => setData("register_step0")}
              >
                SignUp
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  }
  const _renderContact = () => {
    return (
      <div className="login-Container">
        {" "}
        <h1>Hello user you are in station menu</h1>
      </div>
    )
  }
  const _renderAbout = () => {
    return (
      <div className="login-Container">
        <h1>Hello user you are in About menu</h1>
      </div>
    )
  }
  const _renderHome = () => {
    return (
      <div className="login-Container">
        <SideBar />
        <h1>Hello user you are in Home menu</h1>
      </div>
    )
  }
  //Register step0:Customer information
  const _renderRegisterStep0 = () => {
    return (
      <div className="register-Container">
        <h2 style={{ color: "white" }}> Register page(1/2)</h2>
        <div className="register_inner-Container">
          <h3>Customer details informations</h3>
          <form>
            <div>
              <input
                className="register-Input"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <input
                className="register-Input"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div>
              <input
                className="register-Input"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail1(e.target.value)}
              />
            </div>

            <div>
              <input
                className="register-Input1"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                className="register-Input1"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div>
              <input
                className="register-Input"
                type="text"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                type="button"
                className="register-Button"
                onClick={() => {
                  setData("register_step1")
                }}
              >
                >>
              </button>
            </div>
            <div>
              <span>Already have an account </span>
              <span
                className="Login-click"
                onClick={() => setData("connexion")}
              >
                Login
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  }
  //Register step1:Car information
  const _renderRegisterStep1 = () => {
    return (
      <div className="register-Container">
        <h2 style={{ color: "white" }}> Register page(2/2)</h2>
        <div className="register_inner-Container1">
          <h3>Car informations</h3>
          <form>
            <div className="wrapper ">
              <div className="wrapper1">
                <div className="labelStyle">
                  <label>Register N°</label>
                </div>
                <div className="labelStyle">
                  <label>Model</label>
                </div>
                <div className="labelStyle">
                  <label>Brand</label>
                </div>
                <div className="labelStyle">
                  <label>Color</label>
                </div>
                <div className="labelStyle">
                  <label>Rental</label>
                </div>
              </div>
              <div className="wrapper1">
                <div>
                  {" "}
                  <input
                    className="register-Input2"
                    type="number"
                    min="0"
                    placeholder="Registration number"
                    value={registerNumber}
                    onChange={(e) => setRegisterNumber(e.target.value)}
                  />
                </div>
                <div>
                  {" "}
                  <input
                    className="register-Input"
                    type="text"
                    placeholder="Model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  />
                </div>
                <div className="selectOption">
                  {" "}
                  <Select
                    styles={selectStyles}
                    options={BrandOptions}
                    value={selectedBrand}
                    onChange={handleBrand}
                  />
                </div>
                <div className="selectOption">
                  <Select
                    styles={selectStyles}
                    options={ColorsOptions}
                    value={selectedColors}
                    onChange={handleColors}
                  />
                </div>
                <div className="selectOption">
                  {" "}
                  <Select
                    styles={selectStyles}
                    options={RentalOptions}
                    value={selectedRental}
                    onChange={handleRental}
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="register-Button"
                onClick={() => {
                  setData("register_step0")
                }}
              >
                back
              </button>
              <button
                type="button"
                className="register-Button"
                onClick={() => {
                  alert("Matricule=" + registerNumber)
                  alert("Model=" + model)
                }}
              >
                SignUp
              </button>
            </div>
            <div>
              <span>Already have an account </span>
              <span
                className="Login-click"
                onClick={() => setData("connexion")}
              >
                Login
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  }
  const _renderContainer = () => {
    return (
      <div>
        {data === "home" ? _renderHome() : null}
        {data === "contact" ? _renderContact() : null}
        {data === "about" ? _renderAbout() : null}
        {data === "connexion" ? _renderSignIn() : null}
        {data === "register_step0" ? _renderRegisterStep0() : null}
        {data === "register_step1" ? _renderRegisterStep1() : null}
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
      // navigate('/home');
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
        <span>Home page</span>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Home
