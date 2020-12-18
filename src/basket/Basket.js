import React from 'react';
import { useSelector } from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

import BasketScreen from './BasketScreen';
import BasketHeader from './BasketHeader';


{/* <MedicineList navigation={navigation} data={sectionData}/> */}

{/* <MedicineList /> */}


const BasketStack = createStackNavigator();

const Basket = ({navigation}) => {

    return (
        <BasketStack.Navigator initialRouteName="BasketScreen">
                <BasketStack.Screen name="BasketScreen" component={BasketScreen} options={BasketHeader} />
            </BasketStack.Navigator>
    );
};

export default Basket;
