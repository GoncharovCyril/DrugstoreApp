import React from 'react';
import { useSelector } from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

import MedicineList from '../medicine-list/MedicineList';


{/* <MedicineList navigation={navigation} data={sectionData}/> */}

{/* <MedicineList /> */}


const basketStack = createStackNavigator();

const Basket = ({route, navigation}) => {

    // const data = 

    return (
        <View style={{flex:1}}> 
        </View>
    );
};

export default Basket;
