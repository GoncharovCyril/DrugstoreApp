import { ADD_PRODUCT, REMOVE_PRODUCT } from './types';

export const addProduct = productIndex => (
    {
        type: ADD_PRODUCT,
        payload: productIndex,
    }
);

export const removeProduct = productIndex => (
    {
        type: REMOVE_PRODUCT,
        payload: productIndex,
    }
);

