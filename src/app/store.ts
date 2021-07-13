import {configureStore} from '@reduxjs/toolkit'
import {counterSlice} from '../features/counterSlice'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from '../features/middlewares'

const sagaMiddleware =  createSagaMiddleware()
const configConfigureStore = {reducer: { counter: counterSlice.reducer
},
middleware:[sagaMiddleware]
}
export const store = configureStore(configConfigureStore)
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




