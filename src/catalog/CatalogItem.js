import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {colorOrange} from '../Colors'

import ShevronRightSolid from '../../svg/chevron-right-solid';

const itemStyles = StyleSheet.create({
    catalogItem: {
        height: 50,
    },
    catalogButton: {
        flex: 113,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
});

const CatalogItem = ({title, action}) => (
    <View style={itemStyles.catalogItem}>
        <TouchableOpacity
            style={itemStyles.catalogButton}
            onPress={action}
        >
            <View style={{flex: 32}} />
            <View style={{flex: 741}}>
                <Text style={{ fontSize: 16 }}>{title}</Text>
            </View>
            <View style={{flex: 30}}>
                <ShevronRightSolid color={colorOrange} />
            </ View>
            <View style={{flex: 25}} />
        </TouchableOpacity>
        <View style={{ flex: 4 }} />
    </View>
);


export default CatalogItem;