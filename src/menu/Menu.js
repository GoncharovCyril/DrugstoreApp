import React from 'react';
import { StyleSheet} from 'react-native';
 
import { createStackNavigator } from '@react-navigation/stack';

import Header from './MenuHeader';

import MenuScreen from './MenuScreen';
import PersonalAreaScreen from './personal-area/PersonalArea';
import OrdersScreen from './orders/Orders';
import PromotionsScreen from './promotions/Promotions';
import ReviewScreen from './review/Review';
import CallbackScreen from './callback/Callback';

const menuStyles = StyleSheet.create({

});


const MenuStack = createStackNavigator();

const Menu = () => {
    return(
            <MenuStack.Navigator initialRouteName="MenuScreen">
                <MenuStack.Screen name="MenuScreen" component={MenuScreen} options={Header} />
                <MenuStack.Screen name="PersonalAreaScreen" component={PersonalAreaScreen} options={Header} />
                <MenuStack.Screen name="OrdersScreen" component={OrdersScreen} options={Header} />
                <MenuStack.Screen name="PromotionsScreen" component={PromotionsScreen} options={Header} />
                <MenuStack.Screen name="ReviewScreen" component={ReviewScreen} options={Header} />
                <MenuStack.Screen name="CallbackScreen" component={CallbackScreen} options={Header} />
            </MenuStack.Navigator>
    );
};
export default Menu;
