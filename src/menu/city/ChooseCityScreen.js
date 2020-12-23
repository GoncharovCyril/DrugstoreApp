import React from 'react';
import { StyleSheet, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import CityList from './CityList';

const styles = StyleSheet.create({

});


const ChooseCityScreen = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <CityList navigation={navigation} />
        </View>
    );
};


export default ChooseCityScreen;
