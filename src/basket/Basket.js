import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

import BackButton from '../BackButton';

import MedicineList from '../medicine-list/MedicineSectionList';
import medicineData from '../medicine-list/testMedicineData';
import sectionData from '../medicine-list/testMedicineSectionData';


{/* <MedicineList navigation={navigation} data={sectionData}/> */}


const Bucket = ({navigation}) => {
    return (
        <View style={{flex:1}}> 
            <BackButton color="red" />
            
        </View>
    );
};

export default Bucket;
