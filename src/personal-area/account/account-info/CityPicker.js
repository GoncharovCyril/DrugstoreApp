import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { colorDarkGrey, colorGreen, colorOrange } from '../../../Colors';

import MapMarketAltSolid from '../../../../svg/map-market-alt-solid';
import ShevronRightSolid from '../../../../svg/chevron-right-solid';

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
            <View style={{
                flex: 46,
                }}>
                <MapMarketAltSolid color={colorOrange} />
            </ View>

            <View style={{
                flex: 670,
                marginLeft: '2%'
            }}>
                <Text style={{color: colorGreen, fontSize: 18}}>{cityName}</Text>
            </View>
            <View style={{flex: 46, height: '50%', marginRight: '1%'}}>
                <ShevronRightSolid color={colorOrange} />
            </ View>
        </TouchableOpacity>
    );
};

export default CityPicker;