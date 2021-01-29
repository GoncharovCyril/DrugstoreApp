import React from 'react';

import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ChevronLeftSolid from '../../svg/chevron-left-solid';

import ShevronRightSolid from '../../svg/chevron-right-solid';
import PlusSolid from '../../svg/plus-solid';
import { colorDarkGrey, colorOrange } from '../Colors';

const bW = 0;
const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'white',
        // flex: 1,
        height: 65,
        marginTop: '1%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainer: {
        borderWidth: bW, 
        flex: 1,
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: '20%',
        marginBottom: '20%',
        height: '40%',
        alignItems: 'center'
    },
    textContainer: {
        borderWidth: bW,
        flex: 8,
    },
    chevronIconContainer: {
       borderWidth: bW, 
       flex: 1,
       marginLeft: '2%',
       height: '30%',
       alignItems: 'center'
    },
    titleText: {
        fontSize: 18,
        color: colorDarkGrey
    }

});


const MainButton = ({title, navigation, onPress, icon}) => {
    return (
        <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={onPress}
        >
            <View style={styles.iconContainer}>
                {icon}
            </View>
            <View style={styles.textContainer}>
                <Text 
                    numberOfLines={1}
                    style={styles.titleText}
                >{title}</Text>
            </View>
            <View style={styles.chevronIconContainer}>
                <ShevronRightSolid color={colorOrange} />
            </View>
        </TouchableOpacity>
    )
}

export default MainButton;