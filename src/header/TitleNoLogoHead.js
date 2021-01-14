import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { headerStyles } from "../navigationHeadStyles";

import LittleLogo from '../LittleLogo';


const headStyles = StyleSheet.create({
    headContainer: {
        flex: 3,
        justifyContent: 'center',
    },
    topContainer: {
        flex: 4, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'},
    logoContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 4,
    },
});

const TitleHead = ({navigation, backButton, trashButton, title}) => {
    return (
        <View style={headStyles.headContainer}>
            <StatusBar backgroundColor={headerStyles.statusBarStyle.backgroundColor} barStyle={headerStyles.statusBarStyle.barStyle } />
            
            <View style={headStyles.topContainer}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: 'center' }}>
                        <View style={{ flex: 10, height: '60%' }}>
                            {backButton}
                        </View>
                        <View style={{ flex: 90, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <View style={{ flex: 8, alignItems: 'center' }}>
                                <Text 
                                numberOfLines={1}
                                style={{
                                    color: 'white',
                                    fontSize: 22,
                                    textAlign: 'center'
                                }}>{title}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default TitleHead;
