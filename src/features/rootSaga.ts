import {all} from 'redux-saga/effects'
import {watchIncrementAsync} from './counter/counterAsyncReducers'
import {watchSetImagesAsync} from './images/imagesAsync'


export  function* rootSaga() {
    yield all([
      watchIncrementAsync(),
      watchSetImagesAsync()
    ])
  }