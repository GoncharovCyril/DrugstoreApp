import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import BasketScreen from './BasketScreen';
import BasketHeader from './BasketHeader';
import BasketSelectedShopHeader from './BasketSelectedShopHeader';

import SearchScreen from '../search/SearchScreen';
import SearchHeader from '../search/SearchInputHeader';

import MedicineItemScreen from '../medicine-item-screen/MedicineItemScreen';
import MedicineItemHeader from '../medicine-item-screen/MedicineItemHeader';
import MedicineItemSubScreen from '../medicine-item-screen/MedicineItemSubScreen';
import MedicineItemSubHeader from '../medicine-item-screen/MedicineItemSubHeader';


const BasketStack = createStackNavigator();

const Basket = ({navigation}) => {

    const selectedShop=useSelector(state => state.appStore.shop.id);
    
    return (
        <BasketStack.Navigator initialRouteName="BasketScreen">
            <BasketStack.Screen name="BasketScreen" component={BasketScreen} options={selectedShop == null ? BasketHeader : BasketSelectedShopHeader} />
            <BasketStack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}}/>

            <BasketStack.Screen name="MedicineItemScreen" component={MedicineItemScreen} options={MedicineItemHeader} />
            <BasketStack.Screen name="MedicineItemSubScreen" component={MedicineItemSubScreen} options={MedicineItemSubHeader} />
        </BasketStack.Navigator>
    );
};

export default Basket;
