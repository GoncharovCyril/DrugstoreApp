import { combineReducers } from 'redux';
import { 
    ADD_PRODUCT, 
    REMOVE_PRODUCT, 
    LOAD_FROM_STORE, 
    CLEAR_ALL_PRODUCTS, 
    REMOVE_ALL_THIS_PRODUCT,

    SET_PRODUCTS_SUM_PRICE,
    ADD_PRICE_TO_SUM,
    REMOVE_PRICE_FROM_SUM,

    SET_TOKEN, 
    SET_PHONE,

    SET_SHOP, 
    SET_SELECTED_SHOP,

    SET_CITY,

    SET_SEARCH_VALUE,
    ADD_SEARCH_VALUE_TO_HISTORY,
    CLEAR_SEARCH_HISTORY,
    SET_SELECTED_PRODUCT,

} from './types';

import {
    storeData,
    storeCity,
    storeShop,
    storeToken,
    storeHistory
} from './AsincStorageFucntions'


const INITIAL_STATE = {
    products: new Map(),
    productsPrice: {
        sumPrice: 0
    },
    selectedProduct: {
        id: null,
        name: null,
    },
    account: {
        token: '',
        phone: '',
        verification_code: '',
    },
    shop: {
        id: null,
        address: null,
    },
    selectedShop: {
        id: null,
        system_id: null,
        name: null,
        city: null,
        address: null,
        coordinates: null,
        photo: null,
        phone: null,
        working_time: null,
    },
    city: {
        name: 'Донецк',
    },
    search: {
        value: '',
        history: [],
    }
};

const appReducer = (state = INITIAL_STATE, action) => {
    const {
        products,
        productsPrice,
        selectedProduct,
        account,
        shop,
        selectedShop,
        city,
        search
    } = state;
    switch (action.type) {

        case LOAD_FROM_STORE:

            for (const [key, value] of Object.entries(JSON.parse(action.payload.products))) {
                products.set(key, value);
            }
            account.token = action.payload.token;
            console.log(action.payload.token)

            city.name = action.payload.city != null ? action.payload.city : 'Донецк';

            shop.id = JSON.parse(action.payload.shop).id;

            shop.address = JSON.parse(action.payload.shop).address;

            for (let value of JSON.parse(action.payload.history) )
            {
                search.history.push(value);
            }

            break;

        case ADD_PRODUCT:

            products.set(
                action.payload.id, 
                products.get(action.payload.id) === undefined ? 1 : products.get(action.payload.id)+1
                );

            productsPrice.sumPrice = parseFloat(productsPrice.sumPrice) + parseFloat(action.payload.price)
            storeData(products);
            break;

        case REMOVE_PRODUCT:

            if (products.has(action.payload.id)) {
                products.set(action.payload.id, products.get(action.payload.id) - 1);
                productsPrice.sumPrice = parseFloat(productsPrice.sumPrice) - parseFloat(action.payload.price)
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

        case SET_PRODUCTS_SUM_PRICE:
            productsPrice.sumPrice = parseFloat(action.payload.sumPrice);
            break;

        case ADD_PRICE_TO_SUM:
            productsPrice.sumPrice = parseFloat(productsPrice.sumPrice) + parseFloat(action.payload.price)
            break;

        case REMOVE_PRICE_FROM_SUM:
            productsPrice.sumPrice = parseFloat(productsPrice.sumPrice) - parseFloat(action.payload.price)
            break;

        case SET_SELECTED_PRODUCT: 
            selectedProduct.id = action.payload.id;
            selectedProduct.name = action.payload.name;
            break;

        case SET_TOKEN:
            account.token = action.payload.token;
            // if(action.payload.token != null){
                storeToken(action.payload.token);
            // }
            break;

        case SET_PHONE:
            account.phone = action.payload.phone;
            // if(action.payload.token != null){
            // }
            break;

        case SET_SHOP:
            shop.id = action.payload.id;
            console.log(shop.id)
            shop.address = action.payload.address;
            storeShop(JSON.stringify(shop));
            break;


        case SET_SELECTED_SHOP:
            selectedShop.id = action.payload.id;
            selectedShop.system_id = action.payload.system_id;
            selectedShop.name = action.payload.name;
            selectedShop.city = action.payload.city;
            selectedShop.address = action.payload.address;
            selectedShop.coordinates = action.payload.coordinates;
            selectedShop.photo = action.payload.photo;
            selectedShop.phone = action.payload.phone;
            selectedShop.working_time = action.payload.working_time;

            break;

        case SET_CITY:
            city.name = action.payload.city_name;
            storeCity(action.payload.city_name);
            break;


        case SET_SEARCH_VALUE:
            search.value = action.payload.value;
            break;

        case ADD_SEARCH_VALUE_TO_HISTORY:
            if(!search.history.includes(action.payload.value)){
                if(search.history.length == 5){
                    search.history.pop(4);
                }
                search.history.unshift(action.payload.value);
                storeHistory(search.history);
            }
            break;

        case CLEAR_SEARCH_HISTORY:
            search.history.splice(0, search.history.length);
            storeHistory(search.history);
            break;

        default:
            return state
    }

    return { 
        products, 
        productsPrice,
        selectedProduct,
        account, 
        shop, 
        selectedShop, 
        city,
        search
    };
};

export default combineReducers({ appStore: appReducer });