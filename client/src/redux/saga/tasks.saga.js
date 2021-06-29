import {takeEvery, put, call} from 'redux-saga/effects'
import {CREATE_TASK, DELETE_TASK, GET_TASK_STATE, UPDATE_TASK} from "../types";
import {deleteTaskId, getDataFromApi, postDataToApi, updateTaskId} from "../../api";
import {createTaskState, getTasks, successUpdateTask} from "../actions/tasks.action";
import {hideLoader, showLoader} from "../actions/app.action";



function* sagaWorkerCreateTask(action) {
  try{
    const {data} = yield call(() => postDataToApi('/task', {...action.payload, finished: false}))
    yield put(createTaskState(data.task))
  }catch (e){

  }
}

function* sagaWorkerGetTasks(action) {
  try{
    const {data} = yield call(() => getDataFromApi('/task', action.payload))
    const tasks = data.map(task => {
      task.loading = false
      return task
    })
    yield put(getTasks(tasks))
  }catch (e){

  }
}

function* sagaWorkerDeleteTask(action) {
  try{
     yield call(() => deleteTaskId(`/task/${action.payload}` ))
  }catch (e){

  }
}
function* sagaWorkerUpdateTask(action) {
  try{
    yield put(showLoader())
    const {data} = yield call(() => updateTaskId(`/task/`, action.payload.id, action.payload.data))
    yield put(successUpdateTask(data))
    yield put(hideLoader())
  }catch (e){

  }
}


export function* sagaWatcherTasks() {
  yield takeEvery(CREATE_TASK, sagaWorkerCreateTask)
  yield takeEvery(GET_TASK_STATE, sagaWorkerGetTasks)
  yield takeEvery(DELETE_TASK, sagaWorkerDeleteTask)
  yield takeEvery(UPDATE_TASK, sagaWorkerUpdateTask)
}