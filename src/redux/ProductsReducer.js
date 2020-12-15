import {combineReducers} from 'redux';
import { ADD_PRODUCT, REMOVE_PRODUCT, LOAD_PRODUCTS, CLEAR_ALL_PRODUCTS } from './types';

import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (map) => {
    try {
        const jsonValue = JSON.stringify(Object.fromEntries(map));

        await AsyncStorage.setItem('Products', jsonValue);

    } catch (e){
        alert(e);
    }
};

const INITIAL_STATE = {
    current: new Map(),
    possible: [
    ],
};

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

            storeData(current);

            console.log(current);
            
            return {current, possible};

        case REMOVE_PRODUCT:

            id = action.payload.id;
            if(current.has(id)){
                current.set(id, current.get(id)-1);
                if(current.get(id)==0){
                    current.delete(id);
                }
                storeData(current);
                console.log(current);
            }

            return {current, possible};

        case LOAD_PRODUCTS:
            const jsonValue = action.payload.data;
        
            for (const [key, value] of Object.entries(JSON.parse(jsonValue))){
                current.set(key, value);
            }

            console.log(current);

            return {current, possible};

        case CLEAR_ALL_PRODUCTS:

            current.clear();


            console.log(current);
            storeData(current);         
            
            return { current, possible };

        default:
            return state
    }
};

export default combineReducers({products: productsReducer});