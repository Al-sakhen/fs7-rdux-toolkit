import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import themeSlice from "./features/theme/themeSlice";

export default configureStore({
    reducer : {
        //  reducers ==> slice of the state(store)
        counter : counterSlice,
        theme : themeSlice
    }

});
