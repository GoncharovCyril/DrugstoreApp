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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    buttonContainer: {
        flex: 1,
        marginLeft: '5%',
        marginRight: '5%',
        justifyContent: 'center',
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
                <TouchableOpacity style={styles.buttonContainer} onPress={openVk}>
                    <VkBrandsRound color="white" roundColor={colorGreen}/>
                </ TouchableOpacity>
            {/* <BoxShadow setting={shadowOpt} > */}
                <TouchableOpacity style={styles.buttonContainer} onPress={openTelegram}>
                    <TelegramPlaneBrandsRound color="white" roundColor={colorGreen}/>
                </ TouchableOpacity>
            {/* </BoxShadow> */}
                <TouchableOpacity style={styles.buttonContainer} onPress={openOk}>
                    <OdnoklassnikiBrandsRound color="white" roundColor={colorGreen}/>
                </ TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={openInstagram}>
                    <InstagramBrandsRound color="white" roundColor={colorGreen}/>
                </ TouchableOpacity>
        </View>
    );
};

export default RoundButtons;