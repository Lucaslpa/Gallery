import {createSlice} from '@reduxjs/toolkit'


const initialState:state = {value: 10, status: 'idle'}

type state = {
    value: number,
    status: string
}
type action = {
    type: string, 
    payload: any,
}

const increment = (state: state) => {
     state.value++
}
const decrement = (state: state) => {
    state.value--
}
const newStatus = (state: state, action: action) => {
    state.status = action.payload
}
const counterSliceConfig = {
    name: "counter",
    initialState,
    reducers: {
        increment,
        decrement,
        newStatus
    }
}
export const counterSlice = createSlice(counterSliceConfig)

