import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { SET_SHOP } from '../../redux/types';


const colorG = '#4db141'

const styles = StyleSheet.create({
    button1: {
        alignItems: "center",
        justifyContent: 'center',
        // borderWidth: 2,
        borderColor: colorG,
        backgroundColor: colorG,
        borderBottomRightRadius: 15,
        height: "100%",
        width: "100%"
    },
    button2: {
        alignItems: "center",
        justifyContent: 'center',
        // borderWidth: 2,
        borderColor: colorG,
        backgroundColor: colorG,
        borderBottomRightRadius: 15,
        height: "100%",
        width: "100%"
    },
    button1Text: {
        color: 'white',
        alignSelf: "center",
        textAlignVertical: 'center',
        fontSize: 17
    },
    button2Text: {
        color: 'white',
        alignSelf: "center",
        textAlignVertical: 'center',
        fontSize: 17
    },

});


const ChooseButton = ({ navigation, system_id, address }) => {

    const appStore = useSelector((state) => {
        return state.appStore;
    });

    const dispatch = useDispatch();


    const Button1 = ({ navigation }) => (
        <TouchableOpacity
            style={styles.button1}
            onPress={() => {
                dispatch({ type: SET_SHOP, payload: {id: system_id, address: address } });
            }}
        >
            <Text style={styles.button1Text}>Выбрать</Text>
        </TouchableOpacity>
    );

    const Button2 = ({ navigation }) => (
        <TouchableOpacity
            style={styles.button2}
            onPress={() => {
                dispatch({ type: SET_SHOP, payload: {id: null, address: null } });
            }}
        >
            <Text style={styles.button2Text}>Отменить</Text>
        </TouchableOpacity>
    );


    return (
        appStore.shop.id!==system_id ? <Button1 navigation={navigation} /> : <Button2 navigation={navigation} />
        // <Button1 navigation={navigation} />
    );
};


export default ChooseButton;
