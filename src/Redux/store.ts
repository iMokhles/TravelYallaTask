import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import Reactotron from 'reactotron-react-native';
import rootReducer from "./Reducers";
import {configureMergeState} from 'redux-recompose';
import {ImmutableObject} from "seamless-immutable";
import {State} from "../Interfaces/reduxInterfaces";


const middlewares = [thunk];
const initialState = {}

let enhancer:any = compose(
    applyMiddleware(...middlewares));
if (__DEV__ && Reactotron.createEnhancer) {
    enhancer = composeWithDevTools(
        applyMiddleware(...middlewares),
        Reactotron.createEnhancer(),
    );
}
export const store = createStore(
    rootReducer,
    initialState,
    enhancer
);

configureMergeState((state: ImmutableObject<State>, diff: State) => state.merge(diff));

export const persistor = persistStore(store);

