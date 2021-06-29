import {takeEvery, put, call, delay} from 'redux-saga/effects'
import {GET_USERS} from "../types";
import {hideError, hideLoaderUsersLoading, showError, showLoaderUsersLoading} from "../actions/app.action";
import {getDataFromApi} from "../../api";
import {successGetUsers} from "../actions/users.actions";



function* sagaWorkerGetUsers() {
  try {
    yield put(showLoaderUsersLoading())
    const {data} = yield call(() => getDataFromApi('/users'))
    yield put(successGetUsers(data))
    yield put(hideLoaderUsersLoading())
  } catch (err) {
    yield put(showError('Something went wrong'))
    yield delay(2500)
    yield put(hideError())
  }
}

export function* sagaWatcherGetUser() {
  yield takeEvery(GET_USERS, sagaWorkerGetUsers)

}