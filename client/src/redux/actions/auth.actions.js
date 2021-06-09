import {AUTH, LOGIN, LOGOUT, REGISTRATION, SUCCESS_LOGIN} from "../types";

// использовать вместо showLoader()
export function login(payload) {
  return{
    type: LOGIN,
    payload
  }
}
// success login записывает данные юзера и выполняет работу hideLoader()

export function successLogin(payload){
  return{
    type: SUCCESS_LOGIN,
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