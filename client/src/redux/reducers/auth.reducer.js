import {AUTH, LOGOUT, REGISTRATION, SUCCESS_LOGIN} from "../types";




export const authReducer = (state = {}, action) => {
  switch (action.type){
    case REGISTRATION: return {...state, ...action.payload}
    case SUCCESS_LOGIN: return {...state, ...action.payload}
    case LOGOUT: {
      localStorage.removeItem('token')
      return {...state, isAuth: false}
    }
    case AUTH: {
      return {...state, isAuth: true}
    }

    default: return state
  }
}