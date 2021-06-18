import {takeEvery, put, call, delay} from 'redux-saga/effects'

import {getDataFromApi, updateUserId} from "../../api";

import {GET_USER, UPDATE_USER} from "../types";
import {successGetUser, successUpdateUser} from "../actions/user.actions";
import {hideLoader, showLoader} from "../actions/app.action";

function* sagaWorkerUserUpdate(action) {
  try{
    yield put(showLoader())
    const {data} = yield call( () => updateUserId('/user/', action.payload._id, action.payload.data))
    yield put(successUpdateUser(data))
    yield put(hideLoader())
  }catch (e){
    console.log(e)
  }
}

function* sagaWorkerGetUser(action) {
  try{
    const {data} = yield call( () => getDataFromApi('/user/', action.payload))
    yield put(successGetUser(data))
  }catch (e){
    console.log(e)
  }
}

export function* sagaWatcherUser() {
  yield takeEvery(UPDATE_USER, sagaWorkerUserUpdate)
  yield takeEvery(GET_USER, sagaWorkerGetUser)

}