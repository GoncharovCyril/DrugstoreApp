import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

import Logo from '../Logo';

const headerStyles = StyleSheet.create({
    header: {
        flex: 275,
        backgroundColor: 'rgb(97,167,38)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cityPicker: {

    },
});



const Header = () => {
    return (
        <View style={headerStyles.header}>
            <Logo flex="152"/>
            <View style={{flex: 63, borderWidth: 1}}>
                <Text style={{color: 'white', fontSize: 20}}>Меню</Text>
            </View>

        </View>
    );
};

export default Header;
