import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addProduct, removeProduct } from '../redux/ProductsActions';

import { ADD_PRODUCT, REMOVE_PRODUCT } from '../redux/types';

const styles = StyleSheet.create({
    button1: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#4db141",
        borderRadius: 15,
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
    }

});


const BuyButton = ({ navigation, index }) => {

    const appStore = useSelector((state) => {
        return state.appStore;
    });

    const dispatch = useDispatch();

    const [count, setCount] = React.useState(
        !appStore.products.has(index) ? 0 : appStore.products.get(index)
        );


    const Button1 = ({ navigation}) => (
        <TouchableOpacity
            style={styles.button1}
            onPress={() => {
                // setCount(count+1);
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
                    // setCount(count-1);
                    dispatch({ type: REMOVE_PRODUCT, payload: {id: index} });
                }}
            >
                <View style={{ flex: 15 }} />
                <Text style={{
                    flex: 85,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontSize: 32,
                    color: "#4db141"
                    
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
                }}>{appStore.products.get(index)}</Text>
            </View>
            <TouchableOpacity 
                style={{ flex: 30, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}
                onPress={() => {
                    // setCount(count+1);
                    dispatch({ type: ADD_PRODUCT, payload: {id: index} });
                }}
            >
                <Text style={{
                    flex: 85,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontSize: 32,
                    color: "#4db141"
                }}>
                    +
                </Text>
                <View style={{ flex: 15 }} />
            </TouchableOpacity>
        </TouchableOpacity>
    );


    return (
        !appStore.products.has(index) ? <Button1 navigation={navigation} index={index} /> : <Button2 navigation={navigation} index={index} />
    );
};


const mapStateToProps = (state) => {
    const { appStore } = state;
    return { appStore };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addProduct,
        removeProduct,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BuyButton);
