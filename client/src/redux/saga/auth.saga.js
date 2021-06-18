import {takeEvery, put, call, delay} from 'redux-saga/effects'
import {LOGIN, REGISTRATION} from "../types";
import {postDataToApi} from "../../api";
import { push } from 'connected-react-router'
import {auth, successLogin} from "../actions/auth.actions";
import {hideError, hideLoader, showError, showLoader} from "../actions/app.action";
import {getUser} from "../actions/user.actions";




function* sagaWorkerRegistration(action) {
  try{
    yield put(showLoader())
    const {data} = yield call( () => postDataToApi('/registration', action.payload))
    localStorage.setItem('token',data.token)
    yield put(auth())
    yield put(hideLoader())
    yield put(push('/'))
  }catch (e){
    yield put(showError('Что то пошло не так, такой email уже зарегестрирован, либо пароль введен неверно '))
    yield delay(2000)
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
    yield put(auth())
    yield put(hideLoader())
    yield put(push('/Dashboard'))
  }catch (e){
    yield put(showError('Проверьте email и пароль'))
    yield delay(2000)
    yield put(hideLoader())
    yield put(hideError())
  }
}

export function* sagaWatcher() {
  yield takeEvery(REGISTRATION, sagaWorkerRegistration)
  yield takeEvery(LOGIN, sagaWorkerLogin)
}