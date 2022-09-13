import { React, useEffect, useState } from "react"
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import Footer from "../components/Footer"
import "../styles/Login.css"
import "../styles/Register.css"
import image from "../assets/images/car.jpg"
import Select from "react-select"
import { MdAutoDelete, MdSdCardAlert } from "react-icons/md"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { customersSuccess } from "../stores/customer"
import { fetchUsers, register } from "../stores/users"
import { useNavigate } from "react-router"
import Loader from "react-js-loader"
const Register = () => {
  const [data, setData] = useState("register_step0")
  //states of first step register
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [old, setOld] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phone, setPhone] = useState("")
  //states of second step register
  const [registerNumber, setRegisterNumber] = useState("")
  const [model, setModel] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedColors, setSelectedColors] = useState("")
  const [selectedRental, setSelectedRental] = useState("")
  const [isBrand, setIsBrand] = useState(false)
  const [isColor, setIsColor] = useState(false)
  const [isRental, setIsRental] = useState(false)
  const [selectedValue, setSelectedValue] = useState("")
  const [isValidEmail, setEmailValid] = useState(true)
  const [isValidPassword, setPasswordValid] = useState(true)
  const [isValidConfirmPassword, setConfirmPasswordValid] = useState(true)

  const {
    users,
    isLoading,
    isSuccess,
    isFailed,
    isLoadingLogin,
    isSuccessLogin,
    isFailedLogin,
    isLoadingRegister,
    isSuccessRegister,
    isFailedRegister,
  } = useSelector((state) => state.root.users)
  const { customers } = useSelector((state) => state.root.customers)

  let navigate = useNavigate()
  //const count = useSelector((state) => state.counter.value)
  //const isLogged = useSelector((state1) => state1.islogged.value)
  const dispatch = useDispatch()
  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value)
    // alert(JSON.stringify(value))
  }
  // handle selection Brand
  const handleBrand = (value) => {
    setSelectedBrand(value)
    setIsBrand(false)
    // alert(JSON.stringify(value))
  }

  // handle selection color
  const handleColors = (value) => {
    setSelectedColors(value)
    setIsColor(false)
    // alert(JSON.stringify(value))
  }

  // handle selection rental
  const handleRental = (value) => {
    setSelectedRental(value)
    setIsRental(false)
    //alert(JSON.stringify(value))
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

  const validate_confirm_password = (_password) => {
    const mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    )
    if (mediumRegex.test(_password)) {
      setConfirmPasswordValid(true)
      return true
    } else {
      setConfirmPasswordValid(false)
      return false
    }
  }
  const _doRegister = () => {
    // setData("register_step1")
    console.log("Name=" + name)
    console.log("LastName=" + lastName)
    console.log("Email=" + email)
    console.log("Password=" + password)
    console.log("ConfirmPAssword=" + confirmPassword)
    console.log("Phone=" + phone)

    if (
      name === "" ||
      lastName === "" ||
      old === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      phone === ""
    ) {
      alert("Please enter your data ")
    } else if (!validate_email(email)) {
      // alert("Please validate you email")
    } else if (password !== confirmPassword) {
      //alert("the field password not same!")
    } else if (
      !validate_password(password) ||
      !validate_confirm_password(confirmPassword)
    ) {
      // alert("Please choose a password that contain a number")
    } else {
      setData("register_step1")
    }
  }

  const full_register = () => {
    alert("register is done")
    dispatch(
      register(
        name,
        lastName,
        old,
        email,
        password,
        confirmPassword,
        phone,
        registerNumber,
        selectedBrand.value,
        model,
        selectedColors.value,
        selectedRental.value
      )
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
                className="register-Input2"
                type="number"
                placeholder="Old"
                value={old}
                onChange={(e) => setOld(e.target.value)}
              />
            </div>

            <div>
              <input
                className="register-Input"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  validate_email(e.target.value)
                }}
              />
            </div>
            {!isValidEmail ? (
              <div>
                <span style={{ color: "red" }}>Email not valid</span>
              </div>
            ) : null}

            <div>
              <input
                className="register-Input1"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  validate_password(e.target.value)
                }}
              />
            </div>
            {!isValidPassword ? (
              <div>
                <span style={{ color: "red" }}>
                  Password must contain a numeric digits
                </span>
              </div>
            ) : null}
            <div>
              <input
                className="register-Input1"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                  validate_confirm_password(e.target.value)
                }}
              />
            </div>
            {!isValidConfirmPassword ? (
              <div>
                <span style={{ color: "red" }}>
                  Password must contain a numeric digits
                </span>
              </div>
            ) : null}
            {password !== confirmPassword ? (
              <div>
                <span style={{ color: "red" }}>
                  Fields passwords not matched{" "}
                </span>
              </div>
            ) : null}
            <div>
              <input
                className="register-Input2"
                type="number"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                type="button"
                className="register-Button"
                onClick={() => _doRegister()}
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
                {isBrand ? (
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      Please select a brand
                    </span>
                  </div>
                ) : null}
                <div className="selectOption">
                  <Select
                    styles={selectStyles}
                    options={ColorsOptions}
                    value={selectedColors}
                    onChange={handleColors}
                  />
                </div>

                {isColor ? (
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <span style={{ color: "red", textAlign: "center" }}>
                      Please select a color
                    </span>
                  </div>
                ) : null}
                <div className="selectOption">
                  {" "}
                  <Select
                    styles={selectStyles}
                    options={RentalOptions}
                    value={selectedRental}
                    onChange={handleRental}
                  />
                </div>
                {isRental ? (
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <span style={{ color: "red", textAlign: "center" }}>
                      Please select a rental
                    </span>
                  </div>
                ) : null}
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
                  // alert("Matricule=" + registerNumber)
                  // alert("Model=" + model)
                  //alert("Brand=" + selectedBrand)
                  //alert("Color=" + selectedColors.value)
                  //alert("rental=" + selectedRental.value)
                  if (registerNumber === "") {
                    alert("Please add a register number")
                  } else if (model == "") {
                    alert("Please add a modal")
                  } else if (selectedBrand === "") {
                    setIsBrand(true)
                  } else if (selectedColors === "") {
                    setIsColor(true)
                  } else if (selectedRental === "") {
                    setIsRental(true)
                  } else {
                    full_register()
                  }
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
        {data === "connexion" ? navigate("/login") : null}
        {data === "register_step0" ? _renderRegisterStep0() : null}
        {data === "register_step1" ? _renderRegisterStep1() : null}
      </div>
    )
  }

  useEffect(() => {}, [data])
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
    if (isSuccessRegister) {
      alert("Register is done you can login now")
      navigate("/login")
    }
  }, [isSuccessRegister])

  useEffect(() => {
    // getArtistsInfo();
    // console.log("isLoading="+isLoading);
    // console.log("isSuccess="+isSuccess)
    // console.log("isFailed="+isFailed);
    // console.log("users"+users)
    // dispatch(fetchUsers());npx nodemon app.js
    // dispatch(fetchUsers())
  }, [users])

  /* const getArtistsInfo=()=> {

      axios('http://time.jsontest.com/')
      .then(response => {
        console.log("response="+JSON.stringify(response.data))
      }).catch(error=>{console.log('error')})
    }*/
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
        {_renderContainer()}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Register
