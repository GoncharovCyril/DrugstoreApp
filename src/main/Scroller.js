import React from 'react';
import { StyleSheet, View } from 'react-native';

import MedicineSectionList from "../medicine-list/MedicineSectionList";
import sectionData from "../medicine-list/testMedicineSectionData";



const scrollStyles = StyleSheet.create({
    scrollContainer: {
        flex: 6,
        backgroundColor: 'rgba(240,240,240,1.0)'
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
