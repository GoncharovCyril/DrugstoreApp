import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

import MedicineList from '../medicine-list/MedicineList';
import medicineData from '../medicine-list/testMedicineData';


const Bucket = ({navigation}) => {
    return (
        <View style={{flex:1}}> 
            <MedicineList navigation={navigation} data={medicineData}/>
        </View>
    );
};

export default Bucket;
