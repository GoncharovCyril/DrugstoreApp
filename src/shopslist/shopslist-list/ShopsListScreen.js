import React from 'react';
import { View } from 'react-native';

import MedicineStoreList from './MedicineStoreList';

const ShopsListScreen = ({navigation}) => {

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <MedicineStoreList data={[{}]} />
        </View>
    )
};

export default ShopsListScreen;
