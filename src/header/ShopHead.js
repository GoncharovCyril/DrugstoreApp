import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';


import { headerStyles, smallHeight, searchHeigt, shopHeight } from "../navigationHeadStyles";

import PlusSolid from '../../svg/rounds/plus-solid-round';
import ShevronRightSolid from '../../svg/chevron-right-solid';

//orange
const colorO = "rgba(236,111,39,1.0)";
//green
const colorG = '#4db141';

const headStyles = StyleSheet.create({
    drugstorePickerContainer: {
        flexDirection: 'row',
        backgroundColor: '#fdfde8',
        // flex: 3,
        height: shopHeight,
    },
    drugstorePicker: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        flex: 1,
    },
});



const Space = (props) => {
    return (
        <View style={{ width: props.width, height: props.height }} />
    );
};

const ShopHead = ({ navigation}) => {
    return (
        <TouchableOpacity style={headStyles.drugstorePickerContainer}
            onPress={() => {
                navigation.navigate('Drug');
            }}
        >
            <View style={headStyles.drugstorePicker}>
                <Space width="3%" />
                <View style={{ height: '45%', justifyContent: "center", alignSelf: "center" }}>
                    <PlusSolid color="white" />
                </ View>
                <Space width="3%" />
                <Text style={{ flex: 8, alignSelf: 'center', justifyContent: 'center', color: "rgb(106,106,106)", fontSize: 16 }}>Выберите аптеку, чтобы искать товары только в ней</Text>
                <View style={{ height: '30%', justifyContent: "center", alignSelf: 'center', }}>
                    <ShevronRightSolid color={colorO} />
                </ View>
                <Space width="3%" />
            </View>
        </TouchableOpacity>
    );
};


export default ShopHead;
