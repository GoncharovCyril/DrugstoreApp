// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';

import { colorDarkGrey, colorOrange, colorLightGrey } from '../../Colors';

import {useSelector} from 'react-redux';
import { createSelector } from 'reselect';


import ListItem from '../MedicineItemView';
import Footer from './SectionListFooter';
// import AdSlider from './AdSlider';


import ShevronRightSolid from '../../../svg/chevron-right-solid';

const medicineListStyles=StyleSheet.create({
    scrollContainer: {
        flex: 6,
        backgroundColor: colorLightGrey
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
        color: colorDarkGrey,
        fontSize: 16
    },
});

const SectionHeader = ({title, navigation}) => (
    <TouchableOpacity
        onPress={() => {
            navigation.navigate('MedicineItemScreen');
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
            <ShevronRightSolid color={colorOrange} />
        </ View>
        <View style={{ flex: 3 }} />
    </TouchableOpacity>
);


const MedicineList = ({navigation, data}) => {

    const productSelector = createSelector(
        state => {
            return state.appStore.products.entries()
        },
        mapArray => new Map(mapArray)
    )

    // const productsCounter = useSelector(state => {
    //     console.log('ping', id)
    //     return state.appStore.products;
    // });

    const products = useSelector(productSelector);

    const renderItem = ({ item }) => (
        <ListItem products={products} navigation={navigation} id={item.id} name={item.name} dealer={item.dealer} price={item.price} availability={item.availability} />
    );

    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <View style={{flex: 6}} >
                <SafeAreaView style={{flex: 1}}>
                    <SectionList 
                        // ListHeaderComponent={
                        //     <AdSlider navigation={navigation} />
                        // }

                        sections={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
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