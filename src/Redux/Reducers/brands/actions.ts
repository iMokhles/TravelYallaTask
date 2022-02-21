import { createTypes } from 'redux-recompose';
import {Action, State} from "../../../Interfaces/reduxInterfaces";
import {Dispatch} from "react";
import {IBrand} from "../../../Interfaces/brands";
import _ from "lodash";

export const actions = createTypes([
    'LOAD_DATA',
    'REMOVE_DATA',
    'ADD_RESTAURANT',
    'FILTER_RESTAURANTS'], '@@BRANDS');

export const brandsActionCreators = {
    loadData: (brands: Array<IBrand>) => (dispatch: Dispatch<Action<Array<IBrand>>>, getState: () => State) => {
        // @ts-ignore
        dispatch({
            type: actions.LOAD_DATA,
            payload: brands
        })
    },
    removeData: () => (dispatch: Dispatch<Action<IBrand>>, getState: () => State) => {
        dispatch({
            type: actions.REMOVE_DATA,
        })
    },
    addRestaurant:(restaurant: IBrand) => (dispatch: Dispatch<Action<IBrand>>, getState: () => State) => {
        dispatch({
            type: actions.ADD_RESTAURANT,
            payload: restaurant
        })
    },
    filterRestaurants: (brands: Array<IBrand>|null) => (dispatch: Dispatch<Action<Array<IBrand>|null>>, getState: () => State) => {
        dispatch({
            type: actions.FILTER_RESTAURANTS,
            payload: brands
        })
    }
};
