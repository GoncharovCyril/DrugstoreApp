import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

import mainHeader from './MainHeader';

import MedicineItemScreen from '../medicine-item-screen/MedicineItemScreen';
import MedicineItemHeader from '../medicine-item-screen/MedicineItemHeader';
import MedicineItemSubScreen from '../medicine-item-screen/MedicineItemSubScreen';
import MedicineItemSubHeader from '../medicine-item-screen/MedicineItemSubHeader';

import SearchScreen from '../search/SearchScreen';
import SearchHeader from '../search/SearchInputHeader';

import CallbackScreen from '../callback/Callback';
import CallbackHeader from '../callback/CallbackHeader';
import OrderHelpScreen from '../order-help/OrderHelp';
import OrderHelpHeader from '../order-help/OrderHelpHeader';

import ShopsListScreen from '../shopslist/ShopsList';

import PersonalAreaScreen from '../personal-area/PersonalArea';

import MainScreen from './MainScreen';

import ChooseCityScreen from '../city/ChooseCityScreen';
import ChooseCityHeader from '../menu/MenuHeader';


const MainStack = createStackNavigator();

const Main = ({navigation, route}) => {


    return (
        <MainStack.Navigator initialRouteName="MainScreen" screenOptions={{headerShown: true}}>
            <MainStack.Screen name="MainScreen" component={MainScreen} options={mainHeader}/>

            <MainStack.Screen name="MedicineItemScreen" component={MedicineItemScreen} options={MedicineItemHeader} />
            <MainStack.Screen name="MedicineItemSubScreen" component={MedicineItemSubScreen} options={MedicineItemSubHeader} />

            <MainStack.Screen name="ChooseCityScreen" component={ChooseCityScreen} options={ChooseCityHeader} />

            <MainStack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}} />
            <MainStack.Screen name="CallbackScreen" component={CallbackScreen} options={CallbackHeader} />
            <MainStack.Screen name="OrderHelpScreen" component={OrderHelpScreen} options={OrderHelpHeader} />

            <MainStack.Screen name="ShopsListScreen" component={ShopsListScreen} options={{headerShown: false}} />

            <MainStack.Screen name="PersonalAreaScreen" component={PersonalAreaScreen} options={{headerShown: false}} />
        </MainStack.Navigator>
    )
};



export default Main;
