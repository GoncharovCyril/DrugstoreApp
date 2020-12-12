import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import mainHeader from './MainHeader';

import Drug from '../drug/Drug';

import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import Scroller from './Scroller';


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

const MainStack = createStackNavigator();

const MainScreen = ({navigation, route}) => {


    return (
        <MainStack.Navigator initialRouteName="Main" screenOptions={{headerShown: true}}>
            <MainStack.Screen name="Main" component={Main} options={mainHeader}/>
            <MainStack.Screen name="Drug" component={Drug} options={mainHeader} />
        </MainStack.Navigator>
    )
};



export default MainScreen;
