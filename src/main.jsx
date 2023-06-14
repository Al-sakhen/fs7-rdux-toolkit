import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// call css and js for bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

//  ======== Redux =========
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate loading= "loading..."  persistor={persistor}>
                    <App />
                </PersistGate>
            </BrowserRouter>
        </Provider>
    // </React.StrictMode>
);
