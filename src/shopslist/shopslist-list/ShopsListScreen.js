import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import MedicineStoreList from './MedicineStoreList';

const ShopsListScreen = ({route, navigation}) => {
    
    const shopsData = route.params.data;

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
               <MedicineStoreList data={shopsData} navigation={navigation} />
        </View>
    )
};

export default ShopsListScreen;
