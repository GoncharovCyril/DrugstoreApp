import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';


const logoStyles = StyleSheet.create({
    logoContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 4,
    }
});

// <Image
//     style={{
//         width: "100%",
//         height: "100%"
//     }}
//     source = {require('../img/littleLogo.png')}
//     resizeMode="contain"
// />

const Logo = (props) => {
    return (
        <View>
            <Text style={{fontSize: 30, textAlign: 'center'}}>LOGO</Text>
        </View>
    );
};

export default Logo;
