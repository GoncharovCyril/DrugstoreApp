import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {colorOrange, colorLightGrey} from '../../Colors';


import ShevronRightSolid from '../../../svg/chevron-right-solid';
import CommentMedicalSolid from '../../../svg/comment-medical-solid';

const ConnectButton = ({navigation}) => {
    return(
        <TouchableOpacity
            style={{
                height: 50,
                flexDirection: 'row',
                backgroundColor: 'white',
                alignItems: 'center'
            }}
            onPress={()=>{
                navigation.navigate('CallbackScreen')
            }}
        >
            <View style={{flex: 26}} />
            <View style={{flex: 48, height: '50%'}} >
                <CommentMedicalSolid color={colorOrange} />
            </View>
            <View style={{flex: 17}} />
            <View style={{flex: 682}}>
                <Text style={{fontSize: 16}}>Обратная связь</Text>
            </ View>
            <View style={{flex: 30, height: '30%'}}>
                <ShevronRightSolid color={colorOrange} />
            </ View>
            <View style={{flex: 25}} />
        </ TouchableOpacity>
    );
};

export default ConnectButton;