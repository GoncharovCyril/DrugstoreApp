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

//orange
const colorO="rgba(236,111,39,1.0)";
//green
const colorG='#4db141';

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
                        <View style={{ flex: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <View style={{ height: `75%`, flex: 2,  }}>
                                <LittleLogo />
                            </View>
                            <View style={{ flex: 8, alignItems: 'center' }}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 22,
                                    textAlign: 'center'
                                }}>{title}</Text>
                            </View>
                            <View style={{flex: 2}} />
                        </View>
                        <View style={{ flex: 10 }}>
                            {trashButton}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default TitleHead;
