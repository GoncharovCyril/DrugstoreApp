// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';

import ShevronRightSolid from '../../svg/chevron-right-solid';

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

const Footer = ({navigation, key}) => (
    <View>
        <View style={{height: 12}} />
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
            <View style={{ justifyContent: "center", alignSelf: "center", flex: 0.7 }}>
                <Image source={require("../../img/plus-solid.png")} style={{
                    width: "100%",
                    height: "100%",
                }} resizeMode="contain" />
            </ View>
            <View style={{ flex: 0.2 }} />
            <Text style={footerStyles.bottomMenuText}>Лучшие лекарства</Text>
            <View style={{ height: '30%', justifyContent: "center", alignSelf: 'center', }}>
                <ShevronRightSolid color="rgba(236,111,39,1.0)" />
            </ View>
            <View style={{ flex: 0.2 }} />
        </TouchableOpacity>

        <View style={{ height: 10 }} />

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
            <View style={{ justifyContent: "center", alignSelf: "center", flex: 0.7 }}>
                <Image source={require("../../img/virus-solid.png")} style={{
                    width: "100%",
                    height: "100%",
                }} resizeMode="contain" />
            </ View>
            <View style={{ flex: 0.2 }} />
            <Text style={footerStyles.bottomMenuText}>COVID-2019</Text>
            <View style={{ height: '30%', justifyContent: "center", alignSelf: 'center', }}>
                <ShevronRightSolid color="rgba(236,111,39,1.0)" />
            </ View>
            <View style={{ flex: 0.2 }} />
        </TouchableOpacity>

        <View style={{ height: 10 }} />

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
            <View style={{ justifyContent: "center", alignSelf: "center", flex: 0.7 }}>
                <Image source={require("../../img/comment-medical-solid.png")} style={{
                    width: "100%",
                    height: "100%",
                }} resizeMode="contain" />
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