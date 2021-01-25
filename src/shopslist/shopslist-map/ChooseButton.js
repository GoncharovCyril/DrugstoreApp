import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import BaseRouteContext from '../BaseRouteContext';

import {colorGreen} from '../../Colors';

const styles = StyleSheet.create({
    button1: {
        alignItems: "center",
        justifyContent: 'center',
        // borderWidth: 2,
        borderColor: colorGreen,
        backgroundColor: colorGreen,
        borderRadius: 15,
        height: "100%",
        width: "100%"
    },
    button2: {
        alignItems: "center",
        justifyContent: 'center',
        // borderWidth: 2,
        borderColor: colorGreen,
        backgroundColor: colorGreen,
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


const ChooseButton = ({ id, system_id, address, shopItem, navigation }) => {

    // const shopId = useSelector(state => state.appStore.shop.id);


    const shopId = useSelector(state => state.appStore.shop.id);

    const dispatch = useDispatch();
    const baseRouteName = React.useContext(BaseRouteContext)

    const setShop = React.useCallback(()=> {
        dispatch({ type: SET_SHOP, payload: {id: shopItem['id'], address: address } });
        if (baseRouteName != undefined) {
            navigation.navigate(baseRouteName);
        }
    }, [dispatch]);
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
        shopId !== shopItem['id'] ? <Button1 /> : <Button2 />
    );
};


export default ChooseButton;
