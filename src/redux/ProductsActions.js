import { ADD_PRODUCT, REMOVE_PRODUCT, LOAD_FROM_STORE } from './types';

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

export const loadProducts = data => (
    {
        type: LOAD_FROM_STORE,
        payload: data,
    }
);

