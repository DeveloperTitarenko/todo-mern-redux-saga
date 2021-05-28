import {AUTH, LOGIN, LOGOUT, REGISTRATION} from "../types";


export function login(payload) {
  return{
    type: LOGIN,
    payload
  }
}

export function registration(payload) {
  return{
    type: REGISTRATION,
    payload
  }
}

export function logout() {
  return{
    type: LOGOUT
  }
}
export function auth() {
  return {
    type: AUTH
  }
}