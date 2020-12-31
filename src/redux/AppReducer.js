import { combineReducers } from 'redux';
import { 
    ADD_PRODUCT, 
    REMOVE_PRODUCT, 
    LOAD_FROM_STORE, 
    CLEAR_ALL_PRODUCTS, 
    SET_TOKEN, 
    SET_SHOP, 
    SET_CITY,
    REMOVE_ALL_THIS_PRODUCT
} from './types';

import {
    storeData,
    storeCity,
    storeShop,
    storeToken,
} from './AsincStorageFucntions'


const INITIAL_STATE = {
    products: new Map(),
    account: {
        token: null,
    },
    shop: {
        id: null,
        address: null,
    },
    city: {
        name: 'Донецк',
    },
};

const appReducer = (state = INITIAL_STATE, action) => {
    const {
        products,
        account,
        shop,
        city
    } = state;
    switch (action.type) {

        case LOAD_FROM_STORE:

            for (const [key, value] of Object.entries(JSON.parse(action.payload.products))) {
                products.set(key, value);
            }
            account.token = action.payload.token;

            city.name = action.payload.city != null ? action.payload.city : 'Макеевка';

            shop.id = JSON.parse(action.payload.shop).id;

            shop.address = JSON.parse(action.payload.shop).address;
            
            break;

        case ADD_PRODUCT:

            products.set(
                action.payload.id, 
                products.get(action.payload.id) === undefined ? 1 : products.get(action.payload.id)+1
                );
            storeData(products);
            break;

        case REMOVE_PRODUCT:

            if (products.has(action.payload.id)) {
                products.set(action.payload.id, products.get(action.payload.id) - 1);
                if (products.get(action.payload.id) == 0) {
                    products.delete(action.payload.id);
                }
                storeData(products);
            }

            break;

        case REMOVE_ALL_THIS_PRODUCT:
            if (products.has(action.payload.id)) {
                products.delete(action.payload.id);
                storeData(products);
            }

            break;
        
        case CLEAR_ALL_PRODUCTS:

            products.clear();
            storeData(products);
            break;

        case SET_TOKEN:
            account.token = action.payload.token;
            // if(action.payload.token != null){
                storeToken(action.payload.token);
            // }
            break;

        case SET_SHOP:
            shop.id = action.payload.id;
            shop.address = action.payload.address;
            storeShop(JSON.stringify(shop));
            break;

        case SET_CITY:
            city.name = action.payload.city_name;
            storeCity(action.payload.city_name);
            break;

        default:
            return state
    }

    return { products, account, shop, city };
};

export default combineReducers({ appStore: appReducer });