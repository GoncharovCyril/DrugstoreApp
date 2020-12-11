import {combineReducers} from 'redux';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './types';

const INITIAL_STATE = {
    current: [],
    possible: [
        'Продукт 1',
        "Продукт 2"
    ],
};


const productsReducer = (state = INITIAL_STATE, action) => {
    const {
        current,
        possible,
    } = state;
    switch (action.type) {
        case ADD_PRODUCT:
            const addedProduct = possible.splice(action.payload, 1);

            current.push(addedProduct);

            // const newState = {current, possible};

            return {current, possible};

        case REMOVE_PRODUCT:
            // const {
            //     current, 
            //     possible,
            // } = state;

            const removedProduct = current.splice(action.payload, 1);

            possible.push(removedProduct);
            // const newState = {current, possible};

            return {current, possible};
        default:
            return state
    }
};

export default combineReducers({products: productsReducer});