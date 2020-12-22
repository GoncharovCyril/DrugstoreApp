import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

import Logo from '../Logo';

import { headerStyles, smallHeight, searchHeigt, shopHeight } from "../navigationHeadStyles";

//orange
const colorO = "rgba(236,111,39,1.0)";
//green
const colorG = '#4db141';

const headStyles = StyleSheet.create({
    headContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    topContainer: {
        // flex: 4, 
        height: smallHeight,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 4,
    },
    middleContainer: {
        // flex:2,
        height: searchHeigt,
        flexDirection: 'row',
        backgroundColor: colorG,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //alignSelf: 'center',
        flex: 1,
    },
    searchInput: {
        backgroundColor: 'rgba(240,240,240,1.0)',
        borderRadius: 20,
        flexDirection: 'row',
        height: "80%",
        flex: 0.90,
    },
    drugstorePickerContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,1.0)',
        // flex: 3,
        height: shopHeight,
    },
    drugstorePicker: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        flex: 1,
    },
});

const BigLogoHeader = ({ navigation, backButton }) => {
    return (
        <View style={headStyles.topContainer}>
            <View style={{ flex: 5 }}>
                {backButton}
            </View>
            <View style={{ flex: 90, justifyContent: 'center', alignItems: 'center', height: '90%' }}>
                <View style={{
                    flex: 1,
                    borderRadius: 10,
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}>
                    <Logo />
                </View>
            </View>
            <View style={{ flex: 5 }} />
        </View>
    );
};


export default BigLogoHeader;
