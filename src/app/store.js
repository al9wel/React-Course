import { configureStore } from "@reduxjs/toolkit";
import counterReducer1 from "./counter/counterSlice1";
import counterReducer2 from "./counter/counterSlice2";
export const store = configureStore({
    reducer: {
        counter1: counterReducer1,
        counter2: counterReducer2,
    },
})