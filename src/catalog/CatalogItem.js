import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

const itemStyles = StyleSheet.create({
    catalogItem: {
        height: 40,
    },
});

const CatalogItem = ({title, action}) => (
    <TouchableOpacity 
        style={itemStyles.catalogItem}
        onPress={action}
    >
        <View style={{flex: 115, backgroundColor: 'white', justifyContent: 'center'}}>
            <Text>{title}</Text>
        </View>
        <View style={{flex: 2}} />
    </TouchableOpacity>
);

export default CatalogItem;