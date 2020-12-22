import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListItem from './MedicineItemView';
import Footer from './SectionListFooter';


import ShevronRightSolid from '../../svg/chevron-right-solid';
import CommentMedicalSolid from '../../svg/comment-medical-solid';
import PlusSolid from '../../svg/plus-solid';
import VirusSolid from '../../svg/virus-solid';

const adSliderStyles=StyleSheet.create({
    adSlider: {
        height: 200,
    },
});

const images = [
    require('../../img/drug1.jpg'),
    require('../../img/drug2.png'),
];

const AdSlider = ({ navigation }) => {
    return (
        <View style={adSliderStyles.adSlider}>
            <View style={{flex: 19, backgroundColor: "white",}}>
                <SliderBox
                    images={images}
                    dotColor="rgb(226,94,18)"
                    inactiveDotColor="#4db141"
                    resizeMode="stretch"

                    onCurrentImagePressed={ index => {
                        // alert(index);
                        navigation.navigate("Drug");

                    }}
                />
            </View>
            
            <View style={{flex: 1,}} />
        </View>
    );
};

export default AdSlider;