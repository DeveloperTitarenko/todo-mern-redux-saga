import {
  HIDE_ERROR,
  HIDE_LOADER, HIDE_LOADER_TASKS_LOADING, HIDE_LOADER_USER_PASSWORD_UPDATE,
  HIDE_LOADER_USER_UPDATE, HIDE_LOADER_USERS_LOADING,
  SHOW_ERROR,
  SHOW_LOADER, SHOW_LOADER_TASKS_LOADING, SHOW_LOADER_USER_PASSWORD_UPDATE,
  SHOW_LOADER_USER_UPDATE, SHOW_LOADER_USERS_LOADING, TASK_SEARCH
} from "../types";

const initialState = {
  loading: false,
  error: null,
  updateUserLoading: false,
  updateUserPasswordLoading: false,
  tasksLoading: false,
  usersLoading: false,
  search: '',
}

export const appReducer = (state = initialState, action) => {
  switch (action.type){
    case SHOW_LOADER: return {...state, loading: true}
    case HIDE_LOADER: return {...state, loading: false}
    case SHOW_ERROR: return {...state, error: action.payload}
    case HIDE_ERROR: return {...state, error: null}
    case SHOW_LOADER_USER_UPDATE: return {...state, updateUserLoading: true}
    case HIDE_LOADER_USER_UPDATE: return {...state, updateUserLoading: false}
    case SHOW_LOADER_USER_PASSWORD_UPDATE: return {...state, updateUserPasswordLoading: true}
    case HIDE_LOADER_USER_PASSWORD_UPDATE: return {...state, updateUserPasswordLoading: false}
    case TASK_SEARCH: return {...state, search: action.payload}
    case SHOW_LOADER_TASKS_LOADING: return {...state, tasksLoading: true}
    case HIDE_LOADER_TASKS_LOADING: return {...state, tasksLoading: false}
    case SHOW_LOADER_USERS_LOADING: return {...state, usersLoading: true}
    case HIDE_LOADER_USERS_LOADING: return {...state, usersLoading: false}

    default: return state
  }
}