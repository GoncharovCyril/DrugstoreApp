import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import BackButton from "../BackButton";
import TitleHead from '../header/TitleHead';

import { headerStyles, smallHeight, searchHeigt } from "../navigationHeadStyles";
import { colorOrange } from '../Colors';


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
                colors={[colorOrange, 'white']}
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

const menuHeader = {
    headerMode: "screen",
    headerStyle: headerStyles.menuHeader,
    header: ({ scene, previous, navigation }) => {
        const { options } = scene.descriptor;

        return (
            <View style={options.headerStyle} >
                <Header title={"Ввод кода\nSMS"} navigation={navigation} backButton={
                    previous ? <BackButton action={navigation.goBack} /> : undefined
                } />  
            </View>
            
        );
    },
};

export default menuHeader;
