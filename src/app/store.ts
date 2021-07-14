import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from '../features/rootSaga'
import {imagesSlice, counterSlice} from '../features/index'

const sagaMiddleware =  createSagaMiddleware()
const configConfigureStore = {
    reducer: { 
        counter: counterSlice.reducer,
        images:  imagesSlice.reducer,      
    },
    middleware:[sagaMiddleware]
}
export const store = configureStore(configConfigureStore)
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




