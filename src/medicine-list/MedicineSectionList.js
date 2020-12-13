// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListItem from './MedicineItemView';
import Footer from './SectionListFooter';
import AdSlider from './AdSlider';


import ShevronRightSolid from '../../svg/chevron-right-solid';

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

const SectionHeader = ({title, navigation}) => (
    <TouchableOpacity
        onPress={() => {
            navigation.navigate('Drug');
        }}
        style={medicineListStyles.virusPicker}
    >
        <View style={{ flex: 3 }} />
        <Text style={{ 
            flex: 94, 
            alignSelf: 'center', 
            justifyContent: 'center', 
            fontWeight: 'bold', 
            fontSize: 22 
            }}>{title}</Text>
        <View style={{ height: '40%', justifyContent: "center", alignSelf: 'center'}}>
            <ShevronRightSolid color="rgba(236,111,39,1.0)" />
        </ View>
        <View style={{ flex: 3 }} />
    </TouchableOpacity>
);


const MedicineList = ({navigation, data}) => {

    const renderItem = ({ item }) => (
        <ListItem navigation={navigation} index={item.id} description={item.description} dealer={item.dealer} price={item.price} availability={item.availability} />
    );

    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <View style={{flex: 6}} >
                <SafeAreaView style={{flex: 1}}>
                    <SectionList 
                        ListHeaderComponent={
                            <AdSlider navigation={navigation} />
                        }

                        sections={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        renderSectionHeader={({section: {title}}) => (
                            <SectionHeader title={title} navigation={navigation} />
                        )}
                        
                        ListFooterComponent={<Footer navigation={navigation} />}
                    />
                </SafeAreaView>
            </ View>
        </View>
    );
};


export default MedicineList;