// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import catalogHeader from './CatalogHeader';
import subcatalogHeader from './SubCatalogHeader';
import CatalogItem from './CatalogItem';

import CatalogData from './data/CatalogData';
import Data1 from './data/Data1';


const catalogStyles = StyleSheet.create({

});


const MainCatalog = ({navigation}) => {

    const renderItem = ({ item }) => (
        <CatalogItem title={item.title} action={() =>{
            navigation.navigate(item.next);
        }} />
    );

    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <View style={{flex: 6}} >
                <SafeAreaView style={{flex: 1246}}>
                    <FlatList 
                        ListHeaderComponent={<View style={{height: 8}} />}
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
            <View style={{flex: 6}} >
                <SafeAreaView style={{flex: 1246}}>
                    <FlatList 
                        ListHeaderComponent={<View style={{height: 8}} />}
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
                <CatalogStack.Screen name="MainCatalog" component={MainCatalog} options={catalogHeader} />
                <CatalogStack.Screen name="Catalog1" component={Catalog1} options={subcatalogHeader} />
            </CatalogStack.Navigator>
    );
};



export default Catalog;
