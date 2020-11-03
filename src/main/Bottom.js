import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';


import HomeSolid from '../../svg/home-solid';
import ListUlSolid from '../../svg/list-ul-solid';
import ShoppingBasketSolid from '../../svg/shopping-basket-solid';
import MapMarketAltSolid from '../../svg/map-market-alt-solid';
import BarsSolid from '../../svg/bars-solid';


const bottomStyles = StyleSheet.create({
    bottomContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,1.0)',
        flexDirection: 'row',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 2,
    },
    buttonContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        width: '40%',
        justifyContent: "center"
    },
    text: {
        justifyContent: 'flex-end'
    }
});

const activeColor="rgba(226,94,18,1.0)";
const color="rgba(106,106,106,1.0)";


const Bottom = () => {
    return (
        <View style={bottomStyles.bottomContainer}>
            <View style={bottomStyles.buttonContainer}>
                <View style={bottomStyles.button}>
                    <HomeSolid color={activeColor} />
                </ View>
                <Text>Главная</Text>
            </View>
            <View style={bottomStyles.buttonContainer}>
                <View style={bottomStyles.button}>
                    <ListUlSolid color={color} />
                </ View>
                <Text>Каталог</Text>
            </View>
            <View style={bottomStyles.buttonContainer}>
                <View style={bottomStyles.button}>
                    <ShoppingBasketSolid color={color} />
                </ View>
                <Text>Корзина</Text>
            </View>
            <View style={bottomStyles.buttonContainer}>
                <View style={bottomStyles.button}>
                    <MapMarketAltSolid color={color} />
                </ View>
                <Text style={bottomStyles.text}>Аптеки</Text>
            </View>
            <View style={bottomStyles.buttonContainer}>
                <View style={bottomStyles.button}>
                    <BarsSolid color={color} />
                </ View>
                <Text>Меню</Text>
            </View>
        </View>
    );
};

export default Bottom;
