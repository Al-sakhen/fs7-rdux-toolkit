import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    maxNum: 20,
    minNum: 0,
};

export const counterSlice = createSlice({
    name: "counter", // unique
    initialState,
    reducers: {
        // actions === function
        increment: (state) => {
            // => state , action[type,payload]
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    },
});

export default counterSlice.reducer;
export const { decrement, increment, reset , incrementByAmount } = counterSlice.actions;
