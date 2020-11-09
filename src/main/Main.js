import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import Header from './Header.js';
import Scroller from './Scroller.js';
import Bottom from './Bottom.js';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'rgba(96,165,38,1.0)',
        //alignItems: 'stretch',
        justifyContent: 'flex-start',
        width: '100%',
    },
});


const Main = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Scroller />
            <Bottom />
        </ View>
    );
};

export default Main;
