import React from 'react';
import { useSelector } from 'react-redux';
import { useFocusEffect, TabActions } from '@react-navigation/native';

import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';

import { colorGreen, colorOrange } from '../Colors';



const SelectShopFooter = ({navigation, route}) => {
    return (
    <TouchableOpacity
        style={{
            flex: 1,
            borderColor: colorOrange,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colorOrange,
            marginRight: '6%',
            marginTop: '3%'
        }}

        onPress={() => {
            // navigation.dispatch(jumpToCatalog);
            navigation.navigate('ShopsListScreen', {baseRouteName: route.name});
        }}

    >
        <Text style={{ fontSize: 18, color: 'white' }}>Выбрать аптеку</Text>
    </TouchableOpacity>)
}

export default SelectShopFooter;