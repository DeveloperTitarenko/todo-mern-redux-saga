import {AUTH, LOGIN, LOGOUT, REGISTRATION} from "../types";


const initialState = {
  email: '',
  password: '',
  repeatPassword: '',
  isAuth: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type){
    case REGISTRATION: return {...state, ...action.payload}
    case LOGIN: return {...state, ...action.payload}
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