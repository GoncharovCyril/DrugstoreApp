import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

import mainHeader from './MainHeader';

import MedicineItemScreen from '../medicine-item-screen/MedicineItemScreen';
import MedicineItemHeader from '../medicine-item-screen/MedicineItemHeader';

import SearchScreen from '../search/SearchScreen';
import SearchHeader from '../search/SearchInputHeader';

import Scroller from './Scroller';
import { searchHeigt } from '../navigationHeadStyles';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'stretch',
        justifyContent: 'flex-start',
        width: '100%',
    },
});


const Main = ({ navigation }) => {
    return (
        <View style={{flex: 1,
        backgroundColor: 'white',
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
            <MainStack.Screen name="MedicineItemScreen" component={MedicineItemScreen} options={MedicineItemHeader} />
            <MainStack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}} />
        </MainStack.Navigator>
    )
};



export default MainScreen;
