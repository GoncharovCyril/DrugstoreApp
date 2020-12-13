import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addProduct, removeProduct } from '../redux/ProductsActions';
import { getSize } from '../redux/Methods';

import { ADD_PRODUCT, REMOVE_PRODUCT } from '../redux/types';

const styles = StyleSheet.create({
    button1: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "rgb(92,158,36)",
        borderRadius: 15,
        flex: 1
    },
    button2: {
        alignItems: "center",
        justifyContent: 'center',
        borderColor: "rgb(92,158,36)",
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 15,
        flex: 1,
        flexDirection: 'row'
    }

});


const BuyButton = ({ navigation, index }) => {

    const products = useSelector((state) => {
        return state.products;
    });

    const dispatch = useDispatch();


    const Button1 = ({ navigation}) => (
        <TouchableOpacity
            style={styles.button1}
            onPress={() => {
                dispatch({ type: ADD_PRODUCT, payload: {id: index} });
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
        <TouchableOpacity
            style={styles.button2}
            onPress={() => {
                
            }}
        >
            <TouchableOpacity 
                style={{ flex: 30, flexDirection: 'row' }}
                onPress={() => {
                    dispatch({ type: REMOVE_PRODUCT, payload: {id: index} });
                }}
            >
                <View style={{ flex: 15 }} />
                <Text style={{
                    flex: 85,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontSize: 32,
                    color: "rgb(92,158,36)"
                    
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
                }}>{products.current.get(index)}</Text>
            </View>
            <TouchableOpacity 
                style={{ flex: 30, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}
                onPress={() => {
                    dispatch({ type: ADD_PRODUCT, payload: {id: index} });
                }}
            >
                <Text style={{
                    flex: 85,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontSize: 32,
                    color: "rgb(92,158,36)"
                }}>
                    +
                </Text>
                <View style={{ flex: 15 }} />
            </TouchableOpacity>
        </TouchableOpacity>
    );


    return (
        !products.current.has(index) ? <Button1 navigation={navigation} index={index} /> : <Button2 navigation={navigation} index={index} />
    );
};


const mapStateToProps = (state) => {
    const { products } = state;
    return { products };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addProduct,
        removeProduct,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BuyButton);
