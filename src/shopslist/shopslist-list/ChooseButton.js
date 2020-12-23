import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';


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
        borderColor: "#4db141",
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 15,
        flex: 1,
        flexDirection: 'row',
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


const ChooseButton = ({ navigation, index }) => {

    const appStore = useSelector((state) => {
        return state.appStore;
    });

    const dispatch = useDispatch();


    const Button1 = ({ navigation}) => (
        <TouchableOpacity
            style={styles.button1}
            onPress={() => {
                // dispatch({ type: ADD_PRODUCT, payload: {id: index} });
            }}
        >
            <Text style={styles.button1Text}>Выбрать</Text>
        </TouchableOpacity>
    );

    const Button2 = ({ navigation}) => (
        <TouchableOpacity
            style={styles.button2}
            onPress={() => {
                // dispatch({ type: ADD_PRODUCT, payload: {id: index} });
            }}
        >
            <Text style={styles.button2Text}>Отменить</Text>
        </TouchableOpacity>
    );


    return (
        !appStore.products.has(index) ? <Button1 navigation={navigation} index={index} /> : <Button2 navigation={navigation} index={index} />
    );
};


export default ChooseButton;
