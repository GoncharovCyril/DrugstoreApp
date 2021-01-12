import React from 'react';
import { StyleSheet, View } from 'react-native';

import {colorLightGrey} from '../Colors'

import CityPicker from './CityPicker';
import MenuButtons from './MenuButtons';
import RoundButtons from './RoundButtons';

const menuStyles = StyleSheet.create({

});


const MenuScreen = ({ navigation }) => {
    return (
        <View style={{
            justifyContent: 'flex-start',
            width: '100%',
            flex: 1,
        }}>
            <View style={{ flex: 1390, backgroundColor: colorLightGrey }}>
                <CityPicker navigation={navigation} />
                <View style={{ flex: 60 }} />
                <MenuButtons navigation={navigation} />
                <View style={{ flex: 39 }} />
                <RoundButtons navigation={navigation} />
                <View style={{ flex: 370 }} />
            </ View>
        </View>
    )
};

export default MenuScreen;
