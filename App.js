import React from "react";
import {persistor, store} from "./src/Redux/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import App from "./src/App";


export default function AppIndex() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
}
