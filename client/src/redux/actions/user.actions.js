import {
  GET_USER,
  SUCCESS_GET_USER,
  SUCCESS_UPDATE_USER,
  SUCCESS_UPDATE_USER_PASSWORD,
  UPDATE_USER,
  UPDATE_USER_PASSWORD
} from "../types";

export const getUser = (payload) => ({
    type: GET_USER,
    payload
  })
export const successGetUser = (payload) => ({
    type: SUCCESS_GET_USER,
    payload
  })


export const updateUser = (payload) => ({
    type: UPDATE_USER,
    payload
  })
export const successUpdateUser = (payload) => ({
    type: SUCCESS_UPDATE_USER,
    payload
  })

export const updateUserPassword = (payload) => ({
    type: UPDATE_USER_PASSWORD,
    payload
  })
export const successUpdateUserPassword = (payload) => ({
    type: SUCCESS_UPDATE_USER_PASSWORD,
    payload
  })



