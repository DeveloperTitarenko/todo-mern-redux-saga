import {AUTH, LOGIN, LOGOUT, REGISTRATION, SUCCESS_LOGIN} from "../types";


export const login = (payload) => ({
    type: LOGIN,
    payload
  })
export const successLogin = (payload) => ({
    type: SUCCESS_LOGIN,
    payload
  })
export const registration = (payload) => ({
    type: REGISTRATION,
    payload
  })
export const logout = () => ({
    type: LOGOUT
  })
export const auth = () => ({
    type: AUTH
  })