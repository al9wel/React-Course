import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0,
}
export const counterSlice2 = createSlice({
    name: "counter2",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.value = 0
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})
export const { reset, incrementByAmount } = counterSlice2.actions
export default counterSlice2.reducer