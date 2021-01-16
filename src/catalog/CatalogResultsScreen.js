import React from 'react';
import {View} from 'react-native';
import MedicineList from '../medicine-list/list/MedicineList';

const CatalogResultScreen = ({route, navigation}) => {


    return (

        <View style={{flex: 1}}>
            <MedicineList data={route.params.data} navigation={navigation} />
            
        </View>
    )
}

export default CatalogResultScreen;