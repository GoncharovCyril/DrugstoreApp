import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import MapMarketAltSolid from '../../svg/map-market-alt-solid';
import ShevronRightSolid from '../../svg/chevron-right-solid';

const styles = StyleSheet.create({
    cityPicker: {
        flex: 167,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
});

const CityPicker = ({navigation}) => {

    const cityName = useSelector(state => state.appStore.city.name);

    return (
        <TouchableOpacity 
            style={styles.cityPicker}
            onPress={() => {
                navigation.navigate("ChooseCityScreen");
            }}
       
        >
            <View style={{flex: 32}} />
            <View style={{
                flex: 46,
                }}>
                <MapMarketAltSolid color="rgba(236,111,39,1.0)" />
            </ View>
            <View style={{flex: 23}} />

            <View style={{flex: 670}}>
                <Text style={{color: 'rgb(106,106,106)', fontSize: 16}}>{cityName}</Text>
            </View>
            <View style={{flex: 30}}>
                <ShevronRightSolid color="rgba(236,111,39,1.0)" />
            </ View>
            <View style={{flex: 25}} />
        </TouchableOpacity>
    );
};

export default CityPicker;