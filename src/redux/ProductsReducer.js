import {combineReducers} from 'redux';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './types';

const INITIAL_STATE = {
    current: new Map(),
    possible: [
        'Продукт 1',
        "Продукт 2"
    ],
};

const INN = new Map();

const productsReducer = (state = INITIAL_STATE, action) => {
    const {
        current,
        possible,
    } = state;
    let id, count;
    switch (action.type) {
        case ADD_PRODUCT:

            id = action.payload.id;
            count = current.get(id);
            count = count===undefined ? 0 : count;
            current.set(id, count+1);
            
            return {current, possible};

        case REMOVE_PRODUCT:

            id = action.payload.id;
            if(current.has(id)){
                current.set(id, current.get(id)-1);
                if(current.get(id)==0){
                    current.delete(id);
                }
            }

            return {current, possible};
        default:
            return state
    }
};

export default combineReducers({products: productsReducer});