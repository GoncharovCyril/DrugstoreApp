import React from 'react';
import { useSelector } from 'react-redux';
import { useFocusEffect, TabActions } from '@react-navigation/native';

import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';

import { colorGreen, colorOrange } from '../Colors';



const MakeOrderFooter = ({navigation}) => {
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
            navigation.navigate('OrderScreen');

        }}

    >
        <Text style={{ fontSize: 18, color: 'white' }}>Оформить заказ</Text>
    </TouchableOpacity>)
}

export default MakeOrderFooter;