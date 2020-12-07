import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ShopsListHeader from './ShopsListHeader';
import ShopsListTabBar from './ShopsTabBar';



const ShopsStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();




const ShopsListScreen = ({navigation}) => {
    return (
        <View style={{flex:1, justifyContent: 'center'}}>
           
        </View>
    );
};
const ShopsListScreen2 = ({navigation}) => {
    return (
        <View style={{flex:1, justifyContent: 'center'}}>
           
        </View>
    );
};

// tabBar={props => <ShopsListTabBar {...props} />}
{/* <Tab.Navigator initialRouteName="ShopsListScreen" tabBarOptions={{
    indicatorStyle: {width: "25%", left: "12.5%", backgroundColor: color, height: "24%"
    }}} > */}
const color="rgb(226,94,18)";
const ShopsListTabs = ({navigation}) => (
    <Tab.Navigator initialRouteName="ShopsListScreen" tabBar={props => <ShopsListTabBar {...props} />} >
        <Tab.Screen name="ShopsListScreen" component={ShopsListScreen} options={{ tabBarLabel: 'Списком' }} />
        <Tab.Screen name="ShopsListScreen2" component={ShopsListScreen2} options={{ tabBarLabel: 'На карте' }} />
    </Tab.Navigator>
);

const ShopsList = ({navigation}) => (
    <ShopsStack.Navigator initialRouteName="ShopsListTabs">
        <ShopsStack.Screen name="ShopsListTabs" component={ShopsListTabs} options={ShopsListHeader}/>
    </ShopsStack.Navigator>
);



 export default ShopsList;
