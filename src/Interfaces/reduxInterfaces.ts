import { Dispatch } from 'react';
import {IBranch, IBrand, IItem, ITag} from "./brands";

export interface Action<T = null, P = null, K = null> {
    [key: string]: any;
    type: string;
    target?: string;
    payload?: T;
}

export type DispatcheableAction<T = null, P = null, K = null> = (
    dispatch: Dispatch<Action<T, P, K>>,
    getState: () => State
) => void;

export interface AuthState {
    initialLoading: boolean;
}

export interface BrandsState {
    brands: Array<IBrand>;
    tags: Array<ITag>;
    filterResults: Array<IBrand>;
}

export interface State {
    auth: AuthState;
    brands: BrandsState;
}

export interface ReduxObject {
    getState: () => State;
}
