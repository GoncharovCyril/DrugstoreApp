import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BasketScreen from './BasketScreen';
import BasketHeader from './BasketHeader';

import SearchScreen from '../search/SearchScreen';
import SearchHeader from '../search/SearchHeader';



const BasketStack = createStackNavigator();

const Basket = ({navigation}) => {
    return (
        <BasketStack.Navigator initialRouteName="BasketScreen">
            <BasketStack.Screen name="BasketScreen" component={BasketScreen} options={BasketHeader} />
            <BasketStack.Screen name="SearchScreen" component={SearchScreen} options={SearchHeader} />
        </BasketStack.Navigator>
    );
};

export default Basket;
