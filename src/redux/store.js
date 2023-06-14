import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import themeSlice from "./features/theme/themeSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { dummyJsonApi } from './services/dummyJsonApi';

const persistCounterConfig = {
    key: "counter-persist",
    storage,
};


const persistThemeConfig = {
    key: "theme-persist",
    storage,
};

const persistedCounterReducer = persistReducer(persistCounterConfig, counterSlice);
const persistedThemeReducer = persistReducer(persistThemeConfig, themeSlice);


export const store =  configureStore({
    reducer: {
        //  reducers ==> slice of the state(store)
        counter: persistedCounterReducer,
        theme: persistedThemeReducer,

        // apis
        dummyJsonApi : dummyJsonApi.reducer
    },
    middleware : ()=> getDefaultMiddleware({serializableCheck : false})
    .concat([dummyJsonApi.middleware])
});

export const persistor = persistStore(store)