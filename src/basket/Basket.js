import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

import TestRefresh from '../TestRefresh';

import MedicineList from '../medicine-list/MedicineList';
import medicineData from '../medicine-list/testMedicineData';
import sectionData from '../medicine-list/testMedicineSectionData';


{/* <MedicineList navigation={navigation} data={sectionData}/> */}


const Bucket = ({navigation}) => {
    return (
        <View style={{flex:1}}> 
            <MedicineList />
        </View>
    );
};

export default Bucket;
