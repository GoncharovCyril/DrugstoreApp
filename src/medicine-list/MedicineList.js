// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListItem from './MedicineItemView';

import DATA from "./testMedicineData";


const medicineListStyles=StyleSheet.create({

});



const MedicineList = ({navigation, data}) => {

    const renderItem = ({ item }) => (
        <ListItem navigation={navigation} id={item.id} description={item.description} dealer={item.description} price={item.price} availability={item.availability} />
    );

    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <View style={{flex: 6}} >
                <View style={{flex: 19}} />
                <SafeAreaView style={{flex: 1246}}>
                    <FlatList 
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </ View>
        </View>
    );
};


export default MedicineList;