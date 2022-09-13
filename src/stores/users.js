import { createSlice } from "@reduxjs/toolkit"
import { api, api1 } from "../api/index"
// Slice
const slice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isFailed: false,
    users: [],
    isLoadingLogin: false,
    isSuccessLogin: false,
    isFailedLogin: false,
    login: {},
    isLoadingRegister: false,
    isSuccessRegister: false,
    isFailedRegister: false,
    register: {},
  },
  reducers: {
    usersBegin: (state, action) => {
      state.isLoading = true
      state.isSuccess = false
      state.isFailed = false
      state.users = []
    },
    usersSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isFailed = false
      state.users = action.payload
    },
    usersFailed: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.isFailed = true
      state.users = []
    },
    loginBegin: (state, action) => {
      state.isLoadingLogin = true
      state.isSuccessLogin = false
      state.isFailedLogin = false
      state.login = {}
    },
    loginSuccess: (state, action) => {
      state.isLoadingLogin = false
      state.isSuccessLogin = true
      state.isFailedLogin = false
      state.login = action.payload
    },
    loginFailed: (state, action) => {
      state.isLoadingLogin = false
      state.isSuccessLogin = false
      state.isFailedLogin = true
      state.login = {}
    },
    logout1: (state, action) => {
      state.isLoadingLogin = false
      state.isSuccessLogin = false
      state.isFailedLogin = false
      state.isSuccessRegister = false
      state.login = {}
    },

    registerBegin: (state, action) => {
      state.isLoadingRegister = true
      state.isSuccessRegister = false
      state.isFailedRegister = false
      state.register = {}
    },
    registerSuccess: (state, action) => {
      state.isLoadingRegister = false
      state.isSuccessRegister = true
      state.isFailedRegister = false
      state.register = action.payload
    },
    registerFailed: (state, action) => {
      state.isLoadingRegister = false
      state.isSuccessRegister = false
      state.isFailedRegister = true
      state.register = {}
    },
  },
})

export default slice.reducer
// Actions
const { usersBegin, usersSuccess, usersFailed, logout1 } = slice.actions
export const fetchUsers = () => async (dispatch) => {
  dispatch(usersBegin())
  try {
    await api.get("/users").then((response) => {
      dispatch(usersSuccess(response.data))
    })
  } catch (e) {
    dispatch(usersFailed())
    return console.error(e.message)
  }
}
//Action for login
const { loginBegin, loginSuccess, loginFailed } = slice.actions
export const login = (email, password) => async (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  let body = JSON.stringify({ email, password })

  dispatch(loginBegin())
  try {
    await api1.post("/login", body, config).then((response) => {
      dispatch(loginSuccess(response.data))
      console.log("login response=" + JSON.stringify(response))
    })
  } catch (e) {
    dispatch(loginFailed())
    return console.error(e.message)
  }
}

//Action for logout
export const logout = () => async (dispatch) => {
  dispatch(logout1())
}

//Action for register
const { registerBegin, registerSuccess, registerFailed } = slice.actions
export const register =
  (
    name,
    lastName,
    old,
    email,
    password,
    confirmPassword,
    phone,
    carRegisterNumber,
    carBrand,
    carModel,
    carColor,
    carRental
  ) =>
  async (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    let body = JSON.stringify({
      name,
      lastName,
      old,
      email,
      password,
      confirmPassword,
      phone,
      carRegisterNumber,
      carBrand,
      carModel,
      carColor,
      carRental,
    })

    dispatch(registerBegin())
    try {
      await api1.post("/signup", body, config).then((response) => {
        dispatch(registerSuccess(response.data))
        console.log("register response=" + JSON.stringify(response))
      })
    } catch (e) {
      dispatch(registerFailed())
      return console.error(e.message)
    }
  }
