// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ShevronRightSolid from '../../svg/chevron-right-solid';
import CommentMedicalSolid from '../../svg/comment-medical-solid';
import PlusSolid from '../../svg/plus-solid';
import VirusSolid from '../../svg/virus-solid';


const footerStyles=StyleSheet.create({
    scrollContainer: {
        flex: 6,
        backgroundColor: 'rgba(240,240,240,1.0)'
    },
    adSlider: {
        height: 180,
        backgroundColor: "white",
    },
    virusPicker: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    bottomMenuText: {
        flex:8,
        alignSelf: 'center',
        justifyContent: 'center',
        color:"rgb(106,106,106)",
        fontSize: 16
    },
});

const Footer = ({navigation}) => (
    <View>
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Drug');
            }}
            style={{
                height: 50,
                backgroundColor: "white",
                flexDirection: "row",
            }}
        >
            <View style={{ flex: 0.3 }} />
            <View style={{ height: '50%', justifyContent: "center", alignSelf: "center" }}>
                <PlusSolid color="rgba(236,111,39,1.0)" />
            </ View>
            <View style={{ flex: 0.2 }} />
            <Text style={footerStyles.bottomMenuText}>Лучшие лекарства</Text>
            <View style={{ height: '30%', justifyContent: "center", alignSelf: 'center', }}>
                <ShevronRightSolid color="rgba(236,111,39,1.0)" />
            </ View>
            <View style={{ flex: 0.2 }} />
        </TouchableOpacity>

        <View style={{ height: 5 }} />

        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Drug');
            }}
            style={{
                height: 50,
                backgroundColor: "white",
                flexDirection: "row",
            }}
        >
            <View style={{ flex: 0.3 }} />
            <View style={{ height: '50%', justifyContent: "center", alignSelf: "center" }}>
                <VirusSolid color="rgba(236,111,39,1.0)" />
            </ View>
            <View style={{ flex: 0.2 }} />
            <Text style={footerStyles.bottomMenuText}>COVID-2019</Text>
            <View style={{ height: '30%', justifyContent: "center", alignSelf: 'center', }}>
                <ShevronRightSolid color="rgba(236,111,39,1.0)" />
            </ View>
            <View style={{ flex: 0.2 }} />
        </TouchableOpacity>

        <View style={{ height: 5 }} />

        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Drug');
            }}
            style={{
                height: 50,
                backgroundColor: "white",
                flexDirection: "row",
            }}
        >
            <View style={{ flex: 0.3 }} />
            <View style={{ height: '50%', justifyContent: "center", alignSelf: "center" }}>
                <CommentMedicalSolid color="rgba(236,111,39,1.0)" />
            </ View>
            <View style={{ flex: 0.2 }} />
            <Text style={footerStyles.bottomMenuText}>Обратная связь</Text>
            <View style={{ height: '30%', justifyContent: "center", alignSelf: 'center', }}>
                <ShevronRightSolid color="rgba(236,111,39,1.0)" />
            </ View>
            <View style={{ flex: 0.2 }} />
        </TouchableOpacity>
    </View>
);

export default Footer;