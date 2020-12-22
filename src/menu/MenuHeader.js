import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

import LittleLogo from '../LittleLogo';

import BackButton from "../BackButton";

import { headerStyles } from "../navigationHeadStyles";

const headStyles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const Header = ({navigation, backButton, title}) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: "row", alignItems: 'center' }}>
                <View style={{ flex: 20 }}>
                    {backButton}
                </View>
                <View style={{flex: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                    <View style={{ height: 40, width: 40}}>
                        <LittleLogo />
                    </View>
                        <Text style={{ 
                            color: 'white', 
                            fontSize: 22, 
                            }}> {title}</Text>
                </View>
                <View style={{flex: 20}} />
            </View>
        </View>
    );
};

const titles={
    MenuScreen: "Меню",
    PersonalAreaScreen: "Личный кабинет",
    OrdersScreen: "Заказы",
    PromotionsScreen: "Акции",
    ReviewScreen: "Оставьте отзыв",
    CallbackScreen: "Обратная связь",

    PhoneNumberScreen: "Ввод номера телефона",
    VerificationCodeScreen: "Ввод кода SMS",
    AccountScreen: "Личный кабинет",
};

const menuHeader = {
    headerMode: "screen",
    headerStyle: headerStyles.menuHeader,
    header: ({ scene, previous, navigation }) => {
        const { options } = scene.descriptor;

        const title=titles[scene.route.name];

        return (
            <View style={options.headerStyle} >
                <Header title={title} navigation={navigation} backButton={
                    previous ? <BackButton action={navigation.goBack} /> : undefined
                } />  
            </View>
            
        );
    },
};

export default menuHeader;
