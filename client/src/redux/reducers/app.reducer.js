import {
  HIDE_ERROR,
  HIDE_LOADER, HIDE_LOADER_USER_PASSWORD_UPDATE,
  HIDE_LOADER_USER_UPDATE,
  SHOW_ERROR,
  SHOW_LOADER, SHOW_LOADER_USER_PASSWORD_UPDATE,
  SHOW_LOADER_USER_UPDATE, TASK_SEARCH
} from "../types";

const initialState = {
  loading: false,
  error: null,
  updateUserLoading: false,
  updateUserPasswordLoading: false,
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

    default: return state
  }
}