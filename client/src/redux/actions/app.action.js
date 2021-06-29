import {
  HIDE_ERROR,
  HIDE_LOADER, HIDE_LOADER_TASKS_LOADING,
  HIDE_LOADER_USER_PASSWORD_UPDATE, HIDE_LOADER_USER_UPDATE, HIDE_LOADER_USERS_LOADING,
  SHOW_ERROR,
  SHOW_LOADER, SHOW_LOADER_TASKS_LOADING,
  SHOW_LOADER_USER_PASSWORD_UPDATE, SHOW_LOADER_USER_UPDATE, SHOW_LOADER_USERS_LOADING, TASK_SEARCH
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

export const showLoaderTasksLoading = () => ({
  type: SHOW_LOADER_TASKS_LOADING
})
export const hideLoaderTasksLoading = () => ({
  type: HIDE_LOADER_TASKS_LOADING
})
export const showLoaderUsersLoading = () => ({
  type: SHOW_LOADER_USERS_LOADING
})
export const hideLoaderUsersLoading = () => ({
  type: HIDE_LOADER_USERS_LOADING
})


