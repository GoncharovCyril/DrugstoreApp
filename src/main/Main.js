import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import Header from './Header.js';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'rgba(96,165,38,1.0)',
        //alignItems: 'stretch',
        justifyContent: 'flex-start',
        width: '100%',
    },
    other: {
        flex: 6,
        backgroundColor: 'rgba(20,180,180,1.0)'
    },
});


const bottomStyles = StyleSheet.create({
    bottomContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(96,165,38,1.0)',
    },
});



const Bottom = () => {
    return (
        <View style={bottomStyles.bottomContainer   }>
        </View>
    );
};

const Main = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.other}>
                <ScrollView>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                    <Text> OTHER </Text>
                </ScrollView>
            </View>
            <Bottom />
        </ View>
    );
};

export default Main;
