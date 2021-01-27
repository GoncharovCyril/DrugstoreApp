import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';


import { colorDarkGrey, colorGreen, colorLightGrey } from './Colors';


const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        flex: 1,
        backgroundColor: colorDarkGrey
    },
    textButton: {
        color: "white",
        alignSelf: "center",
        textAlignVertical: 'center',
        fontSize: 16,
    },
    textButtonBig: {
        color: "white",
        alignSelf: "center",
        textAlignVertical: 'center',
        fontSize: 20,
    },
});



const UnactiveButton = ({ title, isBig }) => {

    return (
        <View
            style={styles.button}
        >
            <Text numberOfLines={1} style={isBig ? styles.textButtonBig : styles.textButton}>{title}</Text>
        </View>
    );
};


export default UnactiveButton;
