import {GET_USERS, SUCCESS_GET_USERS} from "../types";

export const getUsers = () => ({
    type: GET_USERS,
  })
export const successGetUsers = (payload) => ({
  type: SUCCESS_GET_USERS,
  payload
})