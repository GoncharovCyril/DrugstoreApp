import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addProduct, removeProduct } from '../redux/ProductsActions';


import CityPicker from './CityPicker';
import MenuButtons from './MenuButtons';
import RoundButtons from './RoundButtons';

const menuStyles = StyleSheet.create({

});


const MenuScreen = ({ navigation }) => {
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
                <View style={{ flex: 370 }} />
            </ View>
        </View>
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
