import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { colorGreen } from '../Colors';


const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        flex: 1,
        backgroundColor: colorGreen
    },
    textButton: {
        color: "white",
        alignSelf: "center",
        textAlignVertical: 'center',
        fontSize: 16,
    }
});



const AcceptButton = ({ onPress, title }) => {

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text numberOfLines={1} style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    );
};


export default AcceptButton;
