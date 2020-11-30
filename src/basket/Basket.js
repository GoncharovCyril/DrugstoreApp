import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

import MedicineList from '../medicine-list/MedicineSectionList';
import medicineData from '../medicine-list/testMedicineData';
import sectionData from '../medicine-list/testMedicineSectionData';


const Bucket = ({navigation}) => {
    return (
        <View style={{flex:1}}> 
            <MedicineList navigation={navigation} data={sectionData}/>
        </View>
    );
};

export default Bucket;
