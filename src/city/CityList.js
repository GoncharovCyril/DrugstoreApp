// import 'react-native-gesture-handler';
import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import {SET_CITY} from '../redux/types';

import { CityListData } from './CityListData';


const medicineListStyles = StyleSheet.create({

});

const Footer = () => (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    </View>
)

const Header = () => (
    <View style={{
        flexDirection: 'row',
        height: 25,
        justifyContent: 'space-around',
        marginTop: 5
    }}>
    </View>
);

const CityList = ({ navigation }) => {

    const dispatch = useDispatch();

    const getData = (cities) => {
        const letterSet = new Set();
        cities.map(value => letterSet.add(value[0]));

        const data = [];

        for (let item of letterSet) {
            const dataItem = {
                letter: item,
                data: [],
            };
            for (let city of cities) {
                if (city[0] == item) {
                    dataItem.data.push(city)
                }
            }
            data.push(dataItem);
        }

        return data;
    }

    const setCity = (city) => {
        dispatch({type: SET_CITY, payload: {city_name: city}})
    }

    const data = getData(CityListData);

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 2 }} />
                        <View style={{ flex: 8 }}>
                            <TouchableOpacity 
                            style={{
                                flex: 1,
                                height: 30,
                                justifyContent: "center",
                                alignItems: "flex-start",
                            }}
                            onPress={()=> {
                                setCity('Донецк');
                                navigation.goBack();
                            }}
                            >
                                <View style={{ marginLeft: "5%" }}>
                                    <Text style={{ fontSize: 16 }}>Донецк</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={{
                                flex: 1,
                                height: 30,
                                justifyContent: "center",
                                alignItems: "flex-start",
                            }}
                            onPress={()=> {
                                setCity('Все города');
                                navigation.goBack();
                            }}
                            >
                                <View style={{ marginLeft: "5%" }}>
                                    <Text style={{ fontSize: 16 }}>Все города</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{height: 20}} />

                    {
                        data.map(item => {
                            return (
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <View style={{ flex: 2, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: "30%" }}>{item.letter}</Text>
                                    </View>
                                    <View style={{ flex: 8 }}>
                                        {
                                            item.data.map(city => (
                                                <TouchableOpacity style={{
                                                    flex: 1,
                                                    // width: "100%",
                                                    height: 30,
                                                    justifyContent: "center",
                                                    alignItems: "flex-start",
                                                }}
                                                onPress={()=> {
                                                    setCity(city);
                                                    navigation.goBack();
                                                }}
                                                >
                                                    <View style={{ marginLeft: "5%" }}>
                                                        <Text style={{ fontSize: 16 }}>{city}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            ))
                                        }
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};


export default CityList;