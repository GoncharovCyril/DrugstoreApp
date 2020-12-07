import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import VkBrandsRound from '../../svg/rounds/vk-brands-round';
import TelegramPlaneBrandsRound from '../../svg/rounds/telegram-plane-brands-round';
import OdnoklassnikiBrandsRound from '../../svg/rounds/odnoklassniki-brands-round';
import InstagramBrandsRound from '../../svg/rounds/instagram-brands-round';

import { BoxShadow } from 'react-native-shadow';

const styles = StyleSheet.create({

    roundButtonsContainer: {
        flex: 81,
        flexDirection: 'row'
    },
});

const buttonSize = 40;

const shadowOpt = {
    width: buttonSize,
    height: buttonSize,
    color: "#ACCA92",
    border: 4,
    radius: buttonSize/2,
    opacity: 0.6,
    x: 0,
    y: 0,
    style: {}
}

const RoundButtons = ({ navigation }) => {
    return (
        <View style={styles.roundButtonsContainer}>
            <View style={{ width: 10 }} />
            <BoxShadow setting={shadowOpt} >
                <TouchableOpacity style={{ height: buttonSize, width: buttonSize }} >
                    <VkBrandsRound color="white" roundColor="rgb(226,94,18)"/>
                </ TouchableOpacity>
            </BoxShadow>

            <View style={{ width: 10 }} />
            <BoxShadow setting={shadowOpt} >
                <TouchableOpacity style={{ height: buttonSize, width: buttonSize }} >
                    <TelegramPlaneBrandsRound color="white" roundColor="rgb(226,94,18)"/>
                </ TouchableOpacity>
            </BoxShadow>
            <View style={{ width: 10 }} />
            <BoxShadow setting={shadowOpt} >
                <TouchableOpacity style={{ height: buttonSize, width: buttonSize }} >
                    <OdnoklassnikiBrandsRound color="white" roundColor="rgb(226,94,18)"/>
                </ TouchableOpacity>
            </BoxShadow>
            <View style={{ width: 10 }} />
            <BoxShadow setting={shadowOpt} >
                <TouchableOpacity style={{ height: buttonSize, width: buttonSize }} >
                    <InstagramBrandsRound color="white" roundColor="rgb(226,94,18)"/>
                </ TouchableOpacity>
            </BoxShadow>
            <View style={{ width: 10 }} />
        </View>
    );
};

export default RoundButtons;