import { put, takeEvery } from 'redux-saga/effects'

function delay(ms:number) {
   return new Promise(res => setTimeout(res, ms))
}


export function* incrementAsync() {
    yield console.log('hello increment')
    yield put({type: 'counter/newStatus', payload: 'loading'})
    yield delay(3000)
    yield put({type: 'counter/newStatus', payload: 'idle'})
    yield put({type: 'counter/increment'})
}

export function* watchIncrementAsync() {
    yield console.log('e')
    yield takeEvery('counter/incrementAsync', incrementAsync)
}