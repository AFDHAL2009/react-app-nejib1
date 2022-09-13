import axios from "axios"

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
})

export const api1 = axios.create({
  baseURL: "https://nejib-server.herokuapp.com/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
})
