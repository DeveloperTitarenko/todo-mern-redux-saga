import {takeEvery, put, call, delay} from 'redux-saga/effects'
import {LOGIN, REGISTRATION} from "../types";
import {postDataToApi} from "../../api";
import { push } from 'connected-react-router'
import {auth, successLogin} from "../actions/auth.actions";
import {hideError, hideLoader, showError, showLoader} from "../actions/app.action";





function* sagaWorkerRegistration(action) {
  try{
    yield put(showLoader())
    const {data} = yield call( () => postDataToApi('/registration', action.payload))
    localStorage.setItem('token',data.token)
    localStorage.setItem('email',data.email)
    yield put(auth())
    yield put(hideLoader())
    yield put(push('/'))
  }catch (e){
    yield put(showError('Something went wrong, this email has already been registered, or the password was entered incorrectly '))
    yield delay(2500)
    yield put(hideLoader())
    yield put(hideError())
    console.log(e)
  }
}

function* sagaWorkerLogin(action) {
  try{
    yield put(showLoader())
    const {data} = yield  call(() => postDataToApi('/login', action.payload))
    yield put(successLogin({...data}))
    localStorage.setItem('token',data.token)
    localStorage.setItem('email',data.email)
    yield put(auth())
    yield put(hideLoader())
    yield put(push('/Dashboard'))
  }catch (e){
    yield put(showError('email or password entered incorrectly'))
    yield delay(2500)
    yield put(hideLoader())
    yield put(hideError())
  }
}

export function* sagaWatcher() {
  yield takeEvery(REGISTRATION, sagaWorkerRegistration)
  yield takeEvery(LOGIN, sagaWorkerLogin)
}