import React from 'react';
import { StyleSheet, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Header from './MenuHeader';
import CityPicker from './CityPicker';
import MenuButtons from './MenuButtons';
import RoundButtons from './RoundButtons';

import PersonalAreaScreen from './personal-area/PersonalArea';
import OrdersScreen from './orders/Orders';
import PromotionsScreen from './promotions/Promotions';
import ReviewScreen from './review/Review';
import CallbackScreen from './callback/Callback';

const menuStyles = StyleSheet.create({

});


const MenuScreen = ({navigation}) => {
    return (
        <View style={{
            justifyContent: 'flex-start',
            width: '100%',
            flex:1,
        }}>
            <View style={{flex:1390, backgroundColor: 'rgb(240,240,240)'}}>
                <CityPicker navigation={navigation} />
                <View style={{flex: 60}} />
                <MenuButtons navigation={navigation} />
                <View style={{flex: 39}} />
                <RoundButtons navigation={navigation} />
                <View style={{flex:370}} />
            </ View>
        </View>
    );
};


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
