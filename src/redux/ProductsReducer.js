import {combineReducers} from 'redux';
import {ADD_PRODUCT} from './types';

const INITIAL_STATE = {
    current: [],
    possible: [
        2,
        4,
        6,
        8,
    ],
};


const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const {
                current,
                possible,
            } = state;
            const addedProduct = possible.splice(action.payload, 1);

            current.push(addedProduct);

            const newState = {current, possible};

            return newState;
        default:
            return state
    }
};

export default combineReducers({products: productsReducer});