import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode : 'dark'
};

export const themeSlice = createSlice({
    name: "theme", // unique
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'dark' ? 'light' : 'dark'; // ternary operator
        }
    },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
