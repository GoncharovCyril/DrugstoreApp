import {combineReducers} from 'redux';
import { ADD_PRODUCT, REMOVE_PRODUCT, LOAD_PRODUCTS } from './types';

import { AsyncStorage } from '@react-native-async-storage/async-storage';


const storeData = async (map) => {
    try {
        const jsonValue = Object.fromEntries(map);
        await AsyncStorage.setItem('@Products', jsonValue);
    } catch (e){
        
    }
};

const getData = async () => {
    // try { 
    //     const jsonValue = await AsyncStorage.getItem('@Products');
    //     // return jsonValue != null 
    //     //     ? Object.entries(jsonValue)
    //     //     : null;
        
    //     return null;
    // } catch (e) {
    //     return null;

    // }
    return null;
};

const INITIAL_STATE = {
    current: new Map(),
    possible: [
        'Продукт 1',
        "Продукт 2"
    ],
};


const getNull = async () => null;



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

            // alert(getNull()===null);

            // for(let count of getData().values()){
            //     alert(count);
            // }
            
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

        case LOAD_PRODUCTS:

            const data = action.payload.data;

            current=new Map(data);

            return {current, possible};

        default:
            return state
    }
};

export default combineReducers({products: productsReducer});