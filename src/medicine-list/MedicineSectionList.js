// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListItem from './MedicineItemView';


import ShevronRightSolid from '../../svg/chevron-right-solid';
import CommentMedicalSolid from '../../svg/comment-medical-solid';
import PlusSolid from '../../svg/plus-solid';
import VirusSolid from '../../svg/virus-solid';

const medicineListStyles=StyleSheet.create({
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

const images = [
    require('./drug1.jpg'),
    require('./drug2.jpg'),
];

const AdSlider = ({ navigation }) => {
    return (
        <View style={medicineListStyles.adSlider}>
            <SliderBox
                images={images}
                dotColor="rgb(226,94,18)"
                inactiveDotColor="rgb(92,158,36)"
                resizeMode="stretch"

                onCurrentImagePressed={ index => {
                    // alert(index);
                    navigation.navigate("Drug");

                }}
            />
        </View>
    );
};


const SectionHeader = ({title}) => (
    <TouchableOpacity
        onPress={() => {
            navigation.navigate('Drug');
        }}
        style={medicineListStyles.virusPicker}
    >
        <View style={{ flex: 0.4 }} />
        <Text style={{ flex: 9, alignSelf: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 22 }}>{title}</Text>
        <View style={{ height: '50%', justifyContent: "center", alignSelf: 'center', }}>
            <ShevronRightSolid color="rgba(236,111,39,1.0)" />
        </ View>
        <View style={{ flex: 0.3 }} />
    </TouchableOpacity>
);

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
                        <View style={{flex:0.3}} />
                        <View style={{height: '50%', justifyContent: "center", alignSelf: "center"}}>
                            <PlusSolid color="rgba(236,111,39,1.0)" />
                        </ View>
                        <View style={{flex:0.2}} />
                        <Text style={medicineListStyles.bottomMenuText}>Лучшие лекарства</Text>
                        <View style={{height: '30%', justifyContent: "center", alignSelf: 'center',}}>
                            <ShevronRightSolid color="rgba(236,111,39,1.0)" />
                        </ View>
                        <View style={{flex:0.2}} />
                    </TouchableOpacity>

                    <View style={{height: 5}} />

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
            <Text style={medicineListStyles.bottomMenuText}>COVID-2019</Text>
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
            <Text style={medicineListStyles.bottomMenuText}>Обратная связь</Text>
            <View style={{ height: '30%', justifyContent: "center", alignSelf: 'center', }}>
                <ShevronRightSolid color="rgba(236,111,39,1.0)" />
            </ View>
            <View style={{ flex: 0.2 }} />
        </TouchableOpacity>
    </View>
);

const MedicineList = ({navigation, data}) => {

    const renderItem = ({ item }) => (
        <ListItem navigation={navigation} id={item.id} description={item.description} dealer={item.description} price={item.price} availability={item.availability} />
    );

    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <View style={{flex: 6}} >
                <SafeAreaView style={{flex: 1}}>
                    <SectionList 
                        ListHeaderComponent={<AdSlider navigation={navigation} />}

                        sections={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        renderSectionHeader={({section: {title}}) => (
                            <SectionHeader title={title} />
                        )}
                        
                        ListFooterComponent={<Footer navigation={navigation} />}
                    />
                </SafeAreaView>
            </ View>
        </View>
    );
};


export default MedicineList;