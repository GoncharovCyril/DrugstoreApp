import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Logo from '../Logo';

import { headerStyles, smallHeight } from "../navigationHeadStyles";

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
});

const BigLogoHeader = ({ navigation, backButton }) => {
    return (
        <View style={headStyles.topContainer}>
            <StatusBar backgroundColor={headerStyles.statusBarStyle.backgroundColor} barStyle={headerStyles.statusBarStyle.barStyle } />
            <View style={{ flex: 3 }}>
                {backButton}
            </View>
            <View style={{ flex: 94, justifyContent: 'center', alignItems: 'center', height: '86%' }}>
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
            <View style={{ flex: 3 }} />
        </View>
    );
};


export default BigLogoHeader;
