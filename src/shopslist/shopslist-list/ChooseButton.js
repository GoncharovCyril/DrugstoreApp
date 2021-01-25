import React from 'react';
import { useContext } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import BaseRouteContext from '../BaseRouteContext';

import {colorGreen} from  '../../Colors';


import { SET_SHOP } from '../../redux/types';



const styles = StyleSheet.create({
    button1: {
        alignItems: "center",
        justifyContent: 'center',
        // borderWidth: 2,
        borderColor: colorGreen,
        backgroundColor: colorGreen,
        borderBottomRightRadius: 15,
        height: "100%",
        width: "100%"
    },
    button2: {
        alignItems: "center",
        justifyContent: 'center',
        // borderWidth: 2,
        borderColor: colorGreen,
        backgroundColor: colorGreen,
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


const ChooseButton = ({ navigation, id, system_id, address, route }) => {

    const shopId = useSelector(state => state.appStore.shop.id);

    const dispatch = useDispatch();

    const baseRouteName = React.useContext(BaseRouteContext)

    const setShop = React.useCallback(()=> {
        dispatch({ type: SET_SHOP, payload: {id: id, address: address } });
        if (baseRouteName != undefined) {
            navigation.navigate(baseRouteName);
        }
    }, [dispatch,navigation]);
    const setNoShop = React.useCallback(()=>{
        dispatch({ type: SET_SHOP, payload: {id: null, address: null } });
    }, [dispatch]);


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
        shopId !== id ? <Button1 /> : <Button2 />
    );
};


export default ChooseButton;
