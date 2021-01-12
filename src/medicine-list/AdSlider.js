import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

import {colorGreen, colorOrange} from '../Colors';

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
                    dotColor={colorOrange}
                    inactiveDotColor={colorGreen}
                    resizeMode="stretch"

                    onCurrentImagePressed={ index => {
                        // alert(index);
                        navigation.navigate("MedicineItemScreen");

                    }}
                />
            </View>
            
            <View style={{flex: 1,}} />
        </View>
    );
};

export default AdSlider;