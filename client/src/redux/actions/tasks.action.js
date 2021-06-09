import {
  CREATE_TASK,
  DELETE_TASK,
  GET_TASK,
  GET_TASK_STATE,
  SUCCESS_CREATE_TASK,
  SUCCESS_UPDATE_TASK,
  UPDATE_TASK
} from "../types";


export function createTask (payload) {
  return{
    type: CREATE_TASK,
    payload
  }
}
export function createTaskState (payload) {
  return{
    type: SUCCESS_CREATE_TASK,
    payload
  }
}

export function getTasks (payload) {
  return{
    type: GET_TASK,
    payload
  }
}
export function getTasksState() {
  return{
    type: GET_TASK_STATE
  }
}
export function deleteTask(payload) {
  return{
    type: DELETE_TASK,
    payload
  }
}

export function updateTask(payload) {
  return{
    type: UPDATE_TASK,
    payload
  }
}

export function successUpdateTask(payload) {
  return{
    type: SUCCESS_UPDATE_TASK,
    payload
  }
}