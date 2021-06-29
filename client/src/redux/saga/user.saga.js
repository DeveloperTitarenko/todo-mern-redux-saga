import {takeEvery, put, call, delay} from 'redux-saga/effects'

import {getDataFromApi, updateTaskId, updateUserId} from "../../api";

import {GET_USER, UPDATE_USER, UPDATE_USER_PASSWORD} from "../types";
import {successGetUser, successUpdateUser, successUpdateUserPassword} from "../actions/user.actions";
import {
  hideError,
  hideLoader, hideLoaderUserPassword,
  hideLoaderUserSetting, showError,
  showLoaderUserPassword,
  showLoaderUserSetting
} from "../actions/app.action";
import {successUpdateTasks} from "../actions/tasks.action";

function* sagaWorkerUserUpdate(action) {
  try {
    const dataTasks = {
      performer: action.payload.performer,
      newPerformer: action.payload.data.username,
      performerLogo: action.payload.data.logo
    }
    yield put(showLoaderUserSetting())
    const tasks = yield call(() => updateTaskId('tasks', '', dataTasks))
    const {data} = yield call(() => updateUserId('/user/', action.payload._id, action.payload.data))
    yield put(successUpdateUser(data))
    yield put(hideLoaderUserSetting())
    yield put(successUpdateTasks(tasks.data))
  } catch (e) {
    yield put(showError('Something went wrong'))
    yield delay(2500)
    yield put(hideError())
    yield put(hideLoaderUserSetting())
  }
}

function* sagaWorkerGetUser(action) {
  try {
    const {data} = yield call(() => getDataFromApi('/user/', action.payload))
    yield put(successGetUser(data))
  } catch (e) {
    console.log(e)
  }
}

function* sagaWorkerUpdateUserPassword(action) {

  try {
    yield put(showLoaderUserPassword())
    const {data} = yield call(() => updateUserId('/password/', action.payload._id, action.payload.data))
    yield put(successUpdateUserPassword(data.password))
    yield put(hideLoaderUserPassword())
  } catch (err) {
    yield put(showError('Something went wrong'))
    yield delay(2500)
    yield put(hideError())
    yield put(hideLoaderUserPassword())
  }
}

export function* sagaWatcherUser() {
  yield takeEvery(UPDATE_USER, sagaWorkerUserUpdate)
  yield takeEvery(GET_USER, sagaWorkerGetUser)
  yield takeEvery(UPDATE_USER_PASSWORD, sagaWorkerUpdateUserPassword)
}