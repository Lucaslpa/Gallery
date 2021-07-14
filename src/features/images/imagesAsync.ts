import { put, takeEvery } from 'redux-saga/effects'
import {getImages} from '../../api/getImagesFromApi'



type get = ReturnType<typeof getImages>

export  function* setImagesAsync(): any {
    const images = yield  getImages()
    yield put({type: 'images/setImages', payload: images})
}

export function* watchSetImagesAsync() {
    yield takeEvery('images/setImagesAsync', setImagesAsync)
}