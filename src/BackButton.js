import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import ShevronLeftSolid from '../svg/chevron-left-solid';

const BackButton = ({action, color}) => {
    return(
        <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} onPress={action}>
            <View style={{flex: 20}} />
            <View style={{flex: 40}} >
                <ShevronLeftSolid color="white" />
            </View>
            <View style={{flex: 40}} />
        </ TouchableOpacity>
    );
};

export default BackButton;