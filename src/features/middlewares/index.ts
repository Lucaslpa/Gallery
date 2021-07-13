import  {watchIncrementAsync} from './counterAsyncReducers'
import  {helloSaga} from './hello'
import {all} from 'redux-saga/effects'



export  function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync()
    ])
  }