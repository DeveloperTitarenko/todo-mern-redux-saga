import {GET_USER, SUCCESS_GET_USER, SUCCESS_UPDATE_USER} from "../types";

export const userReducer = (state= {}, action) => {
  switch (action.type){
    case SUCCESS_GET_USER: return action.payload[0]
    case SUCCESS_UPDATE_USER: return action.payload[0]

    default: return state
  }
}