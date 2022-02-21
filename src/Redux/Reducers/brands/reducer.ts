import {createReducer} from "redux-recompose";
import Immutable from 'seamless-immutable';
import _ from "lodash";
import {actions} from './actions';
import {Action, BrandsState} from "../../../Interfaces/reduxInterfaces";
import {IBrand} from "../../../Interfaces/brands";

const initialState = {
    brands: null,
    filterResults: null,
    tags: null
};

const reducerDescription = {
    [actions.LOAD_DATA]: (state: BrandsState, action: Action<Array<IBrand>>) => {

        let brands = action.payload;
        const tags = _.uniqBy(_.flatMap(brands, 'tags'), 'name')
        return {
            ...state,
            brands: action.payload,
            tags: tags,
            filterResults: null
        }

    },
    [actions.REMOVE_DATA]: (state: BrandsState, action: Action<Array<IBrand>>) => {
        return {
            brands: null,
            tags: null,
            filterResults: null
        }
    },
    [actions.ADD_RESTAURANT]: (state: BrandsState, action: Action<IBrand>) => {
        const brands  = state.brands;
        const {payload} = action;
        let currentBrands = _.map(brands, (brand) => {
            if (!_.isEqual(brand.name, payload?.name)) {
                return brand
            }
        })
        currentBrands = _.uniqBy([...currentBrands, payload],
            (brand) => brand?.name);
        const tags = _.uniqBy(_.flatMap(currentBrands, 'tags'), 'name')
        return {
            ...state,
            brands: currentBrands,
            tags: tags,
            filterResults: null
        }
    },
    [actions.FILTER_RESTAURANTS]: (state: BrandsState, action: Action<Array<IBrand>>) => {
        let brands = action.payload;
        return {
            ...state,
            filterResults: brands
        }

    },
};

export default createReducer(Immutable(initialState), reducerDescription);
