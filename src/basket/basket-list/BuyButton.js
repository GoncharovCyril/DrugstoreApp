import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { useDispatch } from 'react-redux';

import {colorGreen} from '../../Colors'

import { ADD_PRODUCT, REMOVE_PRODUCT } from '../../redux/types';

const styles = StyleSheet.create({
    button1: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: colorGreen,
        borderRadius: 15,
        height: "100%",
        width: "100%"
    },
    button2: {
        alignItems: "center",
        justifyContent: 'center',
        borderColor: colorGreen,
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 15,
        flex: 1,
        flexDirection: 'row',
        height: "100%",
        width: "100%"
    }

});


const BuyButton = ({ navigation, id, products }) => {

    // const  productsCounter = useSelector(state => state.appStore.products.get(id));

    const dispatch = useDispatch();

    const addProduct = React.useCallback(() => {
        dispatch({ type: ADD_PRODUCT, payload: {id: id} });
    }, [dispatch]);

    const removeProduct = React.useCallback(()=>{
        dispatch({ type: REMOVE_PRODUCT, payload: {id: id} });
    }, [dispatch]);


    const Button1 = ({ navigation}) => (
        <TouchableOpacity
            style={styles.button1}
            onPress={addProduct}
        >
            <Text style={{
                color: "white",
                alignSelf: "center",
                textAlignVertical: 'center',
                fontSize: 15
            }}>Купить</Text>
        </TouchableOpacity>
    );

    const Button2 = ({ navigation}) => (
        <TouchableOpacity
            style={styles.button2}
            onPress={() => {
                
            }}
        >
            <TouchableOpacity 
                style={{ flex: 30, flexDirection: 'row' }}
                onPress={removeProduct}
            >
                <View style={{ flex: 15 }} />
                <Text style={{
                    flex: 85,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontSize: 32,
                    color: colorGreen
                    
                }}>
                    ‒
                </Text>
            </TouchableOpacity>
            <View style={{ flex: 40}}>
                <Text style={{
                    color: "black",
                    alignSelf: "center",
                    textAlignVertical: 'center',
                    fontSize: 15,
                    flex: 1
                }}>{products.get(id.toString())}</Text>
            </View>
            <TouchableOpacity 
                style={{ flex: 30, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}
                onPress={addProduct}
            >
                <Text style={{
                    flex: 85,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontSize: 32,
                    color: colorGreen
                }}>
                    +
                </Text>
                <View style={{ flex: 15 }} />
            </TouchableOpacity>
        </TouchableOpacity>
    );


    return (
        products.get(id.toString()) == undefined ? <Button1 navigation={navigation} id={id} /> : <Button2 navigation={navigation} id={id} />
    );
};

export default BuyButton;
