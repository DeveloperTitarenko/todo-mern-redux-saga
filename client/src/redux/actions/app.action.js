import {
  HIDE_ERROR,
  HIDE_LOADER,
  HIDE_LOADER_USER_PASSWORD_UPDATE, HIDE_LOADER_USER_UPDATE,
  SHOW_ERROR,
  SHOW_LOADER,
  SHOW_LOADER_USER_PASSWORD_UPDATE, SHOW_LOADER_USER_UPDATE, TASK_SEARCH
} from "../types";


export const showLoader = () => ({
  type: SHOW_LOADER
})
export const hideLoader = () => ({
  type: HIDE_LOADER
})
export const showError = (text) => ({
  type: SHOW_ERROR,
  payload: text,
})
export const hideError = () => ({
  type: HIDE_ERROR
})
export const showLoaderUserPassword = () => ({
  type: SHOW_LOADER_USER_PASSWORD_UPDATE
})
export const hideLoaderUserPassword = () => ({
  type: HIDE_LOADER_USER_PASSWORD_UPDATE
})
export const showLoaderUserSetting = () => ({
  type: SHOW_LOADER_USER_UPDATE
})
export const hideLoaderUserSetting = () => ({
  type: HIDE_LOADER_USER_UPDATE
})

export const tasksSearch = (payload) => ({
    type: TASK_SEARCH,
    payload
})


