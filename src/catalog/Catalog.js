import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import Header from './CatalogHeader';

import CatalogData from './CatalogData';


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


const Catalog = ({navigation}) => {

    const [data, setData] = useState(CatalogData);
    

    const renderItem = ({ item }) => (
        <CatalogItem title={item.title} action={(item) => {
            setData(item.data);
        }} />
    );

    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <Header />
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

export default Catalog;
