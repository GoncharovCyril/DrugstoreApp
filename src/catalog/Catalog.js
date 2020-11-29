// import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './CatalogHeader';

import CatalogData from './CatalogData';
import Data1 from './Data1';


const catalogStyles = StyleSheet.create({
    catalogItem: {
        height: 40,
    },
});

const CatalogItem = ({title, action}) => (
    <TouchableOpacity 
        style={catalogStyles.catalogItem}
        onPress={action}
    >
        <View style={{flex: 115, backgroundColor: 'white',}}>
            <Text>{title}</Text>
        </View>
        <View style={{flex: 2}} />
    </TouchableOpacity>
);


const MainCatalog = ({navigation}) => {

    const renderItem = ({ item }) => (
        <CatalogItem title={item.title} action={() =>{
            navigation.navigate(item.next);
        }} />
    );

    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <Header />
            <View style={{flex: 6}} >
                <View style={{flex: 19}} />
                <SafeAreaView style={{flex: 1246}}>
                    <FlatList 
                        data={CatalogData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </ View>
        </View>
    );
};

const Catalog1 = ({navigation}) => {
    
    const renderItem = ({ item }) => (
        <CatalogItem title={item.title} action={item.action} />
    );

    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <Header />
            <View style={{flex: 6}} >
                <View style={{flex: 19}} />
                <SafeAreaView style={{flex: 1246}}>
                    <FlatList 
                        data={Data1}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </ View>
        </View>
    );
};

const CatalogStack = createStackNavigator();

const Catalog = () => {
    return(
            <CatalogStack.Navigator initialRouteName="MainCatalog">
                <CatalogStack.Screen name="MainCatalog" component={MainCatalog} />
                <CatalogStack.Screen name="Catalog1" component={Catalog1} />
            </CatalogStack.Navigator>
    );
};



export default Catalog;
