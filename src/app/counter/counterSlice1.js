import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0,
}
export const counterSlice1 = createSlice({
    name: "counter1",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    }
})
export const { increment, decrement } = counterSlice1.actions
export default counterSlice1.reducer