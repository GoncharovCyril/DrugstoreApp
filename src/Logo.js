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
        <View style={{
            alignSelf: 'center',
            justifyContent: 'center',
            flex: parseFloat(props.flex),
            borderWidth: 1,
        }}>
            <Text style={{fontSize: 30}}>LOGO</Text>

        </View>
    );
};

export default Logo;
