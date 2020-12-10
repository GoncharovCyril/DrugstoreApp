import {ADD_PRODUCT} from './types';

export const addProduct = productIndex => (
    {
        type: ADD_PRODUCT,
        payload: productIndex,
    }
);