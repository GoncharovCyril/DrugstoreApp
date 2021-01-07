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
        borderRadius: 15,
        height: "100%",
        width: "100%"
    },
    button2: {
        alignItems: "center",
        justifyContent: 'center',
        // borderWidth: 2,
        borderColor: colorG,
        backgroundColor: colorG,
        borderRadius: 15,
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


const ChooseButton = ({ system_id, address, storedShopId, shopItem }) => {

    // const shopId = useSelector(state => state.appStore.shop.id);



    const Button1 = () => (
        <TouchableOpacity
            style={styles.button1}
            onPress={setShop}
        >
            <Text style={styles.button1Text}>Выбрать</Text>
        </TouchableOpacity>
    );

    const Button2 = () => (
        <TouchableOpacity
            style={styles.button2}
            onPress={setNoShop}
        >
            <Text style={styles.button2Text}>Отменить</Text>
        </TouchableOpacity>
    );


    return (
        storedShopId !== shopItem['system_id'] ? <Button1 /> : <Button2 />
    );
};


export default ChooseButton;
