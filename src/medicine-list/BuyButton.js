import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import { colorGreen} from '../Colors';

import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_PRICE_TO_SUM, REMOVE_PRICE_FROM_SUM } from '../redux/types';
import {postCart} from '../requests/BasketRequests';

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



const BuyButton = ({ navigation, id, products, price /*dispatch, addProduct, removeProduct*/}) => {

    const count = useSelector(state => state.appStore.products.get(id.toString()));
    const storedToken = useSelector(state => state.appStore.account.token);

    const dispatch = useDispatch();

    const addProduct = async (id) => {
        const tempCount = count == undefined ? 0 : count;
        postCart(id, tempCount+1, storedToken);

        dispatch({ type: ADD_PRODUCT, payload: {id: id.toString(), price: price} });

        // dispatch({ type: ADD_PRICE_TO_SUM, payload: {price: price} });
    };
    const removeProduct = async (id)=>{
        const tempCount = count == undefined ? 0 : count;
        postCart(id, tempCount-1, storedToken);

        dispatch({ type: REMOVE_PRODUCT, payload: {id: id.toString(), price: price} });

        // dispatch({ type: REMOVE_PRICE_FROM_SUM, payload: {price: price} });
    };

    const Button1 = ({ navigation}) => (
        <TouchableOpacity
            style={styles.button1}
            onPress={()=>{
                addProduct(id)
            }}
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
        <View
            style={styles.button2}
            onPress={() => {
                
            }}
        >
            <TouchableOpacity 
                style={{ flex: 30, flexDirection: 'row' }}
                onPress={() => {
                    removeProduct(id);
                }}
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
                }}>{count}</Text>
            </View>
            <TouchableOpacity 
                style={{ flex: 30, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}
                onPress={() => {
                    addProduct(id);
                }}
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
        </View>
    );


    return (
        count == undefined ? <Button1 navigation={navigation} id={id} /> : <Button2 navigation={navigation} id={id} />
    );
};


export default BuyButton;
