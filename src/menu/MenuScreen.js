import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addProduct, removeProduct } from '../redux/ProductsActions';

import { ADD_PRODUCT, REMOVE_PRODUCT } from '../redux/types';

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
                            <Text>current: {products.current.length}</Text>
                            {
                                products.current.map((product, index) => (
                                    <Button key={product} title={`Remove ${product}`}
                                        onPress={() =>
                                            dispatch({ type: REMOVE_PRODUCT, payload: index })
                                        }
                                    />
                                ))
                            }
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text>possible: {products.possible.length}</Text>
                            {
                                products.possible.map((product, index) => (
                                    <Button key={product} title={`Add ${product}`}
                                        onPress={() =>
                                            dispatch({ type: ADD_PRODUCT, payload: index })
                                        }
                                    />
                                ))
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
