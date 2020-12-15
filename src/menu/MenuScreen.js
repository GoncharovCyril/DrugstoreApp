import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addProduct, removeProduct } from '../redux/ProductsActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ADD_PRODUCT, REMOVE_PRODUCT, LOAD_PRODUCTS, CLEAR_ALL_PRODUCTS } from '../redux/types';
import { getSize } from '../redux/Methods';

import CityPicker from './CityPicker';
import MenuButtons from './MenuButtons';
import RoundButtons from './RoundButtons';

const menuStyles = StyleSheet.create({

});


const MenuScreen = ({ navigation }) => {
    const products = useSelector((state) => {
        return state.products;
    });
    const dispatch = useDispatch();


    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('Products')
            dispatch({ type: LOAD_PRODUCTS, payload: {data: jsonValue}})
            return null;
        } catch (e) {
            return null;
        }
    };

    // getData();
    // dispatch({ type: LOAD_PRODUCTS, payload: {data: 'data'}});

    return (
        <View style={{
            justifyContent: 'flex-start',
            width: '100%',
            flex: 1,
        }}>
            <View style={{ flex: 1390, backgroundColor: 'rgb(240,240,240)' }}>
                <CityPicker navigation={navigation} />
                <View style={{ flex: 60 }} />
                <MenuButtons navigation={navigation} />
                <View style={{ flex: 39 }} />
                <RoundButtons navigation={navigation} />
                <View style={{ flex: 370 }} >
                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text>current: {products.current.size}</Text>
                            <Button title="dispatch" onPress={() =>
                                            dispatch({ type: CLEAR_ALL_PRODUCTS, payload: null })
                                        } />
                            {
                                // products.current.map((product, index) => (
                                //     <Button key={product} title={`Remove ${product}`}
                                //         onPress={() =>
                                //             dispatch({ type: REMOVE_PRODUCT, payload: index })
                                //         }
                                //     />
                                // ))
                            }
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text>possible: {getSize(products.current)}</Text>
                            {
                                // products.possible.map((product, index) => (
                                //     <Button key={product} title={`Add ${product}`}
                                //         onPress={() =>
                                //             dispatch({ type: ADD_PRODUCT, payload: index })
                                //         }
                                //     />
                                // ))
                            }
                        </View>
                    </View>
                </View>
            </ View>
        </View>
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
