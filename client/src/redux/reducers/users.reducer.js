import {SUCCESS_GET_USERS} from "../types";


export const usersReducer = (state= [], action) => {
  switch (action.type){
    case SUCCESS_GET_USERS: return action.payload
    default: return state
  }
}