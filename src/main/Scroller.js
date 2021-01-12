import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colorLightGrey } from '../Colors';

import MedicineSectionList from "../medicine-list/MedicineSectionList";
import sectionData from "../medicine-list/testMedicineSectionData";



const scrollStyles = StyleSheet.create({
    scrollContainer: {
        flex: 6,
        backgroundColor: colorLightGrey
    },
});


const Scroller = ({ navigation }) => {
    return (
        <View style={scrollStyles.scrollContainer}>
            <MedicineSectionList navigation={navigation} data={sectionData}/>
        </View>
    );
};

export default Scroller;
