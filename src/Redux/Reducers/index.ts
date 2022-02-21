import {combineReducers} from "redux";
import { persistReducer } from "redux-persist";
import {configureMergeState } from 'redux-recompose';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from './auth/reducer';
import brands from './brands/reducer';

import {
    seamlessImmutableReconciler,
    seamlessImmutableTransformCreator
} from 'redux-persist-seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';
import {State} from "../../Interfaces/reduxInterfaces";

const transformerConfig = {
    whitelistPerReducer: {

    }
};

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth', 'brands'],
    stateReconciler: seamlessImmutableReconciler,
    transforms: [seamlessImmutableTransformCreator(transformerConfig)]
};

const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    blacklist: ['initialLoading'],
}

const brandsPersistConfig = {
    key: 'brands',
    storage: AsyncStorage,
    blacklist: ['filterResults'],
}

configureMergeState((state: ImmutableObject<State>, diff: State) => state.merge(diff));

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, auth),
    brands: persistReducer(brandsPersistConfig, brands),
})

export default persistReducer(persistConfig, rootReducer);
