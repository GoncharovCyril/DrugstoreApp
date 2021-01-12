import React from 'react';
import { StyleSheet, View, TouchableOpacity, Linking } from 'react-native';

import VkBrandsRound from '../../svg/rounds/vk-brands-round';
import TelegramPlaneBrandsRound from '../../svg/rounds/telegram-plane-brands-round';
import OdnoklassnikiBrandsRound from '../../svg/rounds/odnoklassniki-brands-round';
import InstagramBrandsRound from '../../svg/rounds/instagram-brands-round';

import { BoxShadow } from 'react-native-shadow';

import {colorGreen, colorOrange} from '../Colors';

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
    color: colorGreen,
    border: 4,
    radius: buttonSize/2,
    opacity: 0.6,
    x: 0,
    y: 0,
    style: {}
};


const openSite = (url) => {
    return React.useCallback(async () => {
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
            await Linking.openURL(url);
        }
        else {
            alert("Don't know how to open this URL");
        }
    }, [url]);
}

const RoundButtons = ({ navigation }) => {
    
    const openVk = openSite("https://vk.com/club172375146");
    const openTelegram = openSite("https://www.facebook.com/groups/696310800761799/");
    const openOk = openSite("https://ok.ru/group/54231360864470");
    const openInstagram = openSite("https://www.instagram.com/aptekanarodnaya/");

    return (
        <View style={styles.roundButtonsContainer}>
            <View style={{ width: 10 }} />
            <BoxShadow setting={shadowOpt} >
                <TouchableOpacity style={{ height: buttonSize, width: buttonSize }} onPress={openVk}>
                    <VkBrandsRound color="white" roundColor={colorOrange}/>
                </ TouchableOpacity>
            </BoxShadow>

            <View style={{ width: 10 }} />
            <BoxShadow setting={shadowOpt} >
                <TouchableOpacity style={{ height: buttonSize, width: buttonSize }} onPress={openTelegram}>
                    <TelegramPlaneBrandsRound color="white" roundColor={colorOrange}/>
                </ TouchableOpacity>
            </BoxShadow>
            <View style={{ width: 10 }} />
            <BoxShadow setting={shadowOpt} >
                <TouchableOpacity style={{ height: buttonSize, width: buttonSize }} onPress={openOk}>
                    <OdnoklassnikiBrandsRound color="white" roundColor={colorOrange}/>
                </ TouchableOpacity>
            </BoxShadow>
            <View style={{ width: 10 }} />
            <BoxShadow setting={shadowOpt} >
                <TouchableOpacity style={{ height: buttonSize, width: buttonSize }} onPress={openInstagram}>
                    <InstagramBrandsRound color="white" roundColor={colorOrange}/>
                </ TouchableOpacity>
            </BoxShadow>
            <View style={{ width: 10 }} />
        </View>
    );
};

export default RoundButtons;