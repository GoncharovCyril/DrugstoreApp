// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import catalogHeader from './CatalogHeader';
import subcatalogHeader from './SubCatalogHeader';
import CatalogItem from './CatalogItem';

import CatalogData from './data/CatalogData';
import SubData from './data/SubData';

const catalogStyles = StyleSheet.create({

});


const MainCatalog = ({navigation, route}) => {

    const renderItem = ({ item }) => (
        <CatalogItem title={item.title} action={() =>{
            // navigation.navigate(item.next);
            navigation.navigate("SubCatalog", {
                id: item.id,
                data: SubData[item.id]
            });
        }} />
    );

    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <View style={{flex: 6}} >
                <SafeAreaView style={{flex: 1246}}>
                    <FlatList 
                        ListHeaderComponent={<View style={{height: 8}} />}
                        data={route.params.data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </ View>
        </View>
    );
};

const SubCatalog = ({navigation, route}) => {
    
    const renderItem = ({ item }) => (
        <CatalogItem title={item.title} action={() =>{
            // navigation.navigate(item.next);
            // alert(route.params);
        }} />
    );

    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <View style={{flex: 6}} >
                <SafeAreaView style={{flex: 1246}}>
                    <FlatList 
                        ListHeaderComponent={<View style={{height: 8}} />}
                        data={route.params.data}
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
                <CatalogStack.Screen name="MainCatalog" initialParams={{data: CatalogData}} component={MainCatalog} options={catalogHeader} />
                <CatalogStack.Screen name="SubCatalog" component={SubCatalog} options={subcatalogHeader} />
            </CatalogStack.Navigator>
    );
};



export default Catalog;
