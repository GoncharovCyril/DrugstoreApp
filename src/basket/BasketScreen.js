import React from 'react';
import { useSelector } from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

import BasketList from './basket-list/BasketList';


{/* <MedicineList navigation={navigation} data={sectionData}/> */}

{/* <MedicineList /> */}

const BasketScreen = ({route, navigation}) => {
    const data = route.params.data;
    return (
        <View style={{flex:1}}>
            <BasketList navigation={navigation} data={data} /> 
        </View>
    );
};

export default BasketScreen;
