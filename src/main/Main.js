import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import Header from './MainHeader';
import Scroller from './Scroller';
import Bottom from './Bottom';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'rgba(96,165,38,1.0)',
        //alignItems: 'stretch',
        justifyContent: 'flex-start',
        width: '100%',
    },
});


const Main = ({ navigation }) => {
    return (
        <View style={{flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'}}>
        <View style={styles.container}>
            <Scroller navigation={navigation} />
        </ View>
        </View>
    );
};

export default Main;
