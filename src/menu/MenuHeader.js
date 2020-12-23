import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import BackButton from "../BackButton";
import TitleHead from '../header/TitleHead';

import { headerStyles, smallHeight, searchHeigt } from "../navigationHeadStyles";


//orange
const colorO="rgba(236,111,39,1.0)";
//green
const colorG='#4db141';

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
            <LinearGradient
                colors={[colorO, 'white']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: smallHeight,
                }}
            />
            <TitleHead title={title} backButton={backButton} navigation={navigation} />
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

    PhoneNumberScreen: "Ввод номера\nтелефона",
    VerificationCodeScreen: "Ввод кода\nSMS",
    AccountScreen: "Личный кабинет",

    ChooseCityScreen: "Выбор города",
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
