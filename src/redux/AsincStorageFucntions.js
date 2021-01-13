import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (map) => {
    try {
        const jsonValue = JSON.stringify(Object.fromEntries(map));

        await AsyncStorage.setItem('Products', jsonValue);

    } catch (e) {
        alert("STORE_DATA\n"+e);
    }
};

export const storeToken = async (value) => {
    try {
        await AsyncStorage.setItem('Token', value);

    } catch (e) {
        alert("STORE_TOKEN\n"+e);
    }
};

export const storeCity = async (value) => {
    try {
        await AsyncStorage.setItem('City', value);

    } catch (e) {
        alert("STORE_CITY\n"+e);
    }
};

export const storeShop = async (value) => {
    try {
        await AsyncStorage.setItem('Shop', value);

    } catch (e) {
        alert("STORE_SHOP\n"+e);
    }
};

export const storeHistory = async (value) => {
    try {
        await AsyncStorage.setItem('History', JSON.stringify(value));
    } catch (e) {
        alert("STORE_HISTORY\n"+e);
    }
};