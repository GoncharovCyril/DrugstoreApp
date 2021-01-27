import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TabActions } from '@react-navigation/native';

import {colorOrange} from '../Colors';

const bRadius = 15;

const EmptyBasket = ({route, navigation}) => {
    const jumpToCatalog = TabActions.jumpTo('Catalog', {});

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 10}} />
            <View style={{flex: 592, justifyContent: 'center'}}>
                <Text style={{fontSize: 16}}>В вашей корзине пока ничего нет</Text>
            </View>
            <View style={{flex: 10}} />
            <TouchableOpacity 
            style={{
                flex: 85, 
                width: "70%", 
                borderWidth: 2,
                borderColor: colorOrange, 
                borderRadius: bRadius,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colorOrange
                }}

            onPress={() => {
                navigation.dispatch(jumpToCatalog);
            }}
            
            >
                    <Text style={{fontSize: 18, color: 'white'}}>Перейти в каталог</Text>
            </TouchableOpacity>
            <View style={{flex: 10}} />
            <TouchableOpacity 
            style={{
                flex: 85, 
                width: "70%", 
                borderWidth: 2, 
                borderColor: colorOrange, 
                borderRadius: bRadius,
                justifyContent: 'center',
                alignItems: 'center'
                }}
            onPress={() => {
                navigation.navigate('SearchScreen')
            }}
            >
                <Text style={{fontSize: 18, color: colorOrange}}>Найти лекарство</Text>
            </TouchableOpacity>
            <View style={{flex: 10}} />
        </View>
    );
};

export default EmptyBasket;
