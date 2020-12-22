import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

import LittleLogo from '../LittleLogo';

import BackButton from "../BackButton";


import {headerStyles} from "../navigationHeadStyles";

const headStyles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const Header = ({navigation, backButton}) => {
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
                            }}> Меню</Text>
                </View>
                <View style={{flex: 20}} />
            </View>
        </View>
    );
};

const titles={
    MenuScreen: "",
    PersonalAreaScreen: "",
    OrdersScreen: "",
    PromotionsScreen: "",
    ReviewScreen: "",
    CallbackScreen: "",
};

const submenuHeader = {
    headerMode: "screen",
    headerStyle: headerStyles.menuHeader,
    header: ({ scene, previous, navigation }) => {
        const { options } = scene.descriptor;
        const title = options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title
            : scene.route.name;

        return (
            <View style={options.headerStyle} >
                <Header navigation={navigation} backButton={
                    previous ? <BackButton action={navigation.goBack} /> : undefined
                } />  
            </View>
            
        );
    },
};

export default submenuHeader;
