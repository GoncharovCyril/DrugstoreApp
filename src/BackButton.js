import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import ShevronLeftSolid from '../svg/chevron-left-solid';

const BackButton = ({action, color}) => {
    return(
        <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} onPress={action}>
            <View style={{flex: 35}} />
            <View style={{flex: 30}} >
                <ShevronLeftSolid color="rgba(236,111,39,1.0)" />
            </View>
            <View style={{flex: 35}} />
        </ TouchableOpacity>
    );
};

export default BackButton;