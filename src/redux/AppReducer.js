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

import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (map) => {
    try {
        const jsonValue = JSON.stringify(Object.fromEntries(map));

        await AsyncStorage.setItem('Products', jsonValue);

    } catch (e) {
        alert("STORE_DATA\n"+e);
    }
};

const storeToken = async (value) => {
    try {
        await AsyncStorage.setItem('Token', value);

    } catch (e) {
        alert("STORE_TOKEN\n"+e);
    }
};

const storeCity = async (value) => {
    try {
        await AsyncStorage.setItem('City', value);

    } catch (e) {
        alert("STORE_CITY\n"+e);
    }
};

const storeShop = async (value) => {
    try {
        await AsyncStorage.setItem('Shop', value);

    } catch (e) {
        alert("STORE_SHOP\n"+e);
    }
};


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
    let id, count;
    switch (action.type) {

        case LOAD_FROM_STORE:

            const productsJson = action.payload.products;

            const tokenJson = action.payload.token;

            const cityJson = action.payload.city;

            const shopJson = action.payload.shop;

            for (const [key, value] of Object.entries(JSON.parse(productsJson))) {
                products.set(key, value);
            }
            account.token = tokenJson;

            city.name = cityJson != null ? cityJson : 'Макеевка';

            shop.id = JSON.parse(shopJson).id;

            shop.address = JSON.parse(shopJson).address;
            
            // const jsonValue = action.payload.data;

            return { products, account, shop, city };

        case ADD_PRODUCT:

            id = action.payload.id;
            count = products.get(id);
            count = count === undefined ? 0 : count;
            products.set(id, count + 1);
            storeData(products);
            return { products, account, shop, city };

        case REMOVE_PRODUCT:

            id = action.payload.id;
            if (products.has(id)) {
                products.set(id, products.get(id) - 1);
                if (products.get(id) == 0) {
                    products.delete(id);
                }
                storeData(products);
            }

            return { products, account, shop, city };

        case REMOVE_ALL_THIS_PRODUCT:
            id = action.payload.id;
            if (products.has(id)) {
                products.delete(id);
                storeData(products);
            }

            return { products, account, shop, city };

        

        case CLEAR_ALL_PRODUCTS:

            products.clear();
            storeData(products);

            return { products, account, shop, city };

        case SET_TOKEN:

            const token = action.payload.token;
            account.token = token;
            if(token != null){
                storeToken(token);
            }
            return { products, account, shop, city };

        case SET_SHOP:
            const shop_id = action.payload.id;
            const shop_address = action.payload.address;
            shop.id = shop_id;
            shop.address = shop_address;
            storeShop(JSON.stringify(shop));
            return { products, account, shop, city };


        case SET_CITY:
            const city_name = action.payload.city_name;
            city.name = city_name;
            storeCity(city_name);
            return { products, account, shop, city };

        default:
            return state
    }
};

export default combineReducers({ appStore: appReducer });