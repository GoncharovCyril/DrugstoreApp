import {combineReducers} from 'redux';
import { ADD_PRODUCT, REMOVE_PRODUCT, LOAD_PRODUCTS, CLEAR_ALL_PRODUCTS, SET_TOKEN } from './types';

import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (map) => {
    try {
        const jsonValue = JSON.stringify(Object.fromEntries(map));

        await AsyncStorage.setItem('Products', jsonValue);

    } catch (e){
        alert(e);
    }
};

const storeToken = async (value) => {
    try {
        await AsyncStorage.setItem('Token', value);

    } catch (e){
        alert(e);
    }
};

const INITIAL_STATE = {
    products: new Map(),
    account: {
        token: "token",
    },
};

const appReducer = (state = INITIAL_STATE, action) => {
    const {
        products,
        account,
    } = state;
    let id, count;
    switch (action.type) {
        case ADD_PRODUCT:

            id = action.payload.id;
            count = products.get(id);
            count = count===undefined ? 0 : count;
            products.set(id, count+1);

            storeData(products);

            console.log(products);
            
            return {products, account};

        case REMOVE_PRODUCT:

            id = action.payload.id;
            if(products.has(id)){
                products.set(id, products.get(id)-1);
                if(products.get(id)==0){
                    console.log("delete")
                    products.delete(id);
                }
                storeData(products);
                console.log(products);
            }

            return {products, account};

        case LOAD_PRODUCTS:
            const jsonValue = action.payload.data;
        
            for (const [key, value] of Object.entries(JSON.parse(jsonValue))){
                products.set(key, value);
            }

            console.log(products);

            return {products, account};

        case CLEAR_ALL_PRODUCTS:

            products.clear();


            console.log(products);
            storeData(products);         
            
            return { products, account };

        case SET_TOKEN:

            const token = action.payload.token;
            account.token = token;
            storeToken(token);

            return { products, account };

        case "CLEAR_STORE":
            AsyncStorage.clear();


            return { products, account };

        default:
            return state
    }
};

export default combineReducers({appStore: appReducer});