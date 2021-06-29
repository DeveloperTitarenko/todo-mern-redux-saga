import {takeEvery, put, call, delay} from 'redux-saga/effects'
import {GET_USERS} from "../types";
import {hideError, showError} from "../actions/app.action";
import {getDataFromApi} from "../../api";
import {successGetUsers} from "../actions/users.actions";



function* sagaWorkerGetUsers() {
  try {
    const {data} = yield call(() => getDataFromApi('/users'))
    yield put(successGetUsers(data))
    console.log('getUsers', data)

  } catch (err) {
    yield put(showError('Something went wrong'))
    yield delay(2500)
    yield put(hideError())
  }
}

export function* sagaWatcherGetUser() {
  yield takeEvery(GET_USERS, sagaWorkerGetUsers)

}