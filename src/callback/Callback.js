import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platfrom, SafeAreaView} from 'react-native';

import RoundButtons from './RoundButtons';
import PhoneInfo from './PhoneInfo';
import Report from './Report';
import { ScrollView } from 'react-native-gesture-handler';

const bW = 0;
const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    socButtonContainer: {
        borderWidth: bW,
        // flex: 1,
        height: 50,
        marginTop: '5%',
        marginRight: '10%',
        marginLeft: '10%',
    },
    phoneInfoContainer: {
        borderWidth: bW,
        // flex: 4,
        height: 220,
    },
    reportContainer: {
        borderWidth: bW,
        // flex: 5
        height: 350,
        marginBottom: '5%'

    }
});


const CallbackScreen = ({navigation}) => {
    return (
            <SafeAreaView style={styles.screenContainer}>
                <ScrollView>
                    <View style={styles.socButtonContainer}>
                        <RoundButtons />
                    </View>
                    <View style={styles.phoneInfoContainer}>
                        <PhoneInfo />
                    </View>
                    <View style={styles.reportContainer}>
                        <Report navigation={navigation} />
                    </View>
                </ScrollView>
            </SafeAreaView>   
    );
};


export default CallbackScreen;
