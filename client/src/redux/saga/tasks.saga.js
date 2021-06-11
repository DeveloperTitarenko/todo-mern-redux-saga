import {takeEvery, put, call, delay} from 'redux-saga/effects'
import {CREATE_TASK, DELETE_TASK, GET_TASK, GET_TASK_STATE, LOGIN, REGISTRATION, UPDATE_TASK} from "../types";
import {deleteTaskId, getDataFromApi, postDataToApi, updateTaskId} from "../../api";
import {createTaskState, getTasks, successUpdateTask} from "../actions/tasks.action";




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
    yield put(getTasks([...data]))
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
    const {data} = yield call(() => updateTaskId(`/task/`, action.payload.id, action.payload.data))
    console.log(data)
    yield put(successUpdateTask(data))
  }catch (e){

  }
}



export function* sagaWatcherTasks() {
  yield takeEvery(CREATE_TASK, sagaWorkerCreateTask)
  yield takeEvery(GET_TASK_STATE, sagaWorkerGetTasks)
  yield takeEvery(DELETE_TASK, sagaWorkerDeleteTask)
  yield takeEvery(UPDATE_TASK, sagaWorkerUpdateTask)
}