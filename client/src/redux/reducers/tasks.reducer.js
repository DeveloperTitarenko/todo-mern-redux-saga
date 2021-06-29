import {
  CREATE_TASK,
  DELETE_TASK,
  GET_TASK,
  SUCCESS_CREATE_TASK,
  SUCCESS_UPDATE_TASK,
  SUCCESS_UPDATE_TASKS,
  UPDATE_TASK
} from "../types";

export const tasksReducer = (state = [], action) => {
  switch (action.type){
    case UPDATE_TASK: {

    }
    case SUCCESS_CREATE_TASK: {
      return [...state, action.payload]
    }
    case GET_TASK: {
      return ([...state, ...action.payload])
    }
    case DELETE_TASK: {
      return state.filter((task) => task._id !== action.payload)
    }
    case SUCCESS_UPDATE_TASK: {
      return state.map(task => task._id === action.payload._id ? action.payload : task)
    }
    case SUCCESS_UPDATE_TASKS: {
      return action.payload
    }
    default: return state
  }
}