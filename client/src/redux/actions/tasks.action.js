import {
  CREATE_TASK,
  DELETE_TASK,
  GET_TASK,
  GET_TASK_STATE,
  SUCCESS_CREATE_TASK,
  SUCCESS_UPDATE_TASK,
  SUCCESS_UPDATE_TASKS, TASK_LOADING,
  UPDATE_TASK,

} from "../types";


export const createTask = (payload) => ({
  type: CREATE_TASK,
  payload
})
export const createTaskState = (payload) => ({
  type: SUCCESS_CREATE_TASK,
  payload
})
export const getTasks = (payload) => ({
  type: GET_TASK,
  payload
})
export const getTasksState = () => ({
  type: GET_TASK_STATE
})
export const deleteTask = (payload) => ({
  type: DELETE_TASK,
  payload
})
export const updateTask = (payload) => ({
  type: UPDATE_TASK,
  payload
})
export const successUpdateTask = (payload) => ({
  type: SUCCESS_UPDATE_TASK,
  payload
})
export const successUpdateTasks = (payload) => ({
  type: SUCCESS_UPDATE_TASKS,
  payload
})

