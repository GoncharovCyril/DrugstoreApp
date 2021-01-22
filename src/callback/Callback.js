import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platfrom} from 'react-native';

import RoundButtons from './RoundButtons';
import PhoneInfo from './PhoneInfo';
import Report from './Report';

const bW = 0;
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        marginTop: '5%',
        marginBottom: '5%'
    },
    socButtonContainer: {
        borderWidth: bW,
        flex: 1,
        marginRight: '10%',
        marginLeft: '10%',
    },
    phoneInfoContainer: {
        borderWidth: bW,
        flex: 4,
    },
    reportContainer: {
        borderWidth: bW,
        flex: 5
    }
});


const CallbackScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.screenContainer}
        >
            <View style={styles.socButtonContainer}>
                <RoundButtons />
            </View>
            <View style={styles.phoneInfoContainer}>
                <PhoneInfo />
            </View>
            <View style={styles.reportContainer}>
                <Report navigation={navigation} />
            </View>
            
        </KeyboardAvoidingView>
    );
};


export default CallbackScreen;
