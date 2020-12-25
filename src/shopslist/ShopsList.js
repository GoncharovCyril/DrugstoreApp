import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity, ActivityIndicator } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { getPharmacies } from '../requests/ShopsRequests';

import ShopsListHeader from './ShopsListHeader';
import ShopsListTabBar from './ShopsTabBar';

import ShopsListScreen from './shopslist-list/ShopsListScreen';
import ShopsListMapScreen from './shopslist-map/ShopsListMapScreen';


const ShopsStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


// tabBar={props => <ShopsListTabBar {...props} />}
{/* <Tab.Navigator initialRouteName="ShopsListScreen" tabBarOptions={{
    indicatorStyle: {width: "25%", left: "12.5%", backgroundColor: color, height: "24%"
    }}} > */}

// const ShopsListTabs = ({navigation}) => (
//     <Tab.Navigator initialRouteName="ShopsListScreen" tabBar={props => <ShopsListTabBar {...props} />} >
//         <Tab.Screen name="ShopsListScreen" component={ShopsListScreen} options={{ tabBarLabel: 'Списком' }} />
//         <Tab.Screen name="ShopsListScreen2" component={ShopsListScreen2} options={{ tabBarLabel: 'На карте' }} />
//     </Tab.Navigator>
// );

//orange
const colorO = "rgb(236,111,39)";
//green
const colorG = '#4db141';
// const activeColor = "rgb(226,94,18)";
const activeColor = colorG;
const inactiveColor = "rgb(106,106,106)";

const ShopsListTabs = ({route, navigation }) => {

    return (
        <Tab.Navigator
            initialRouteName="ShopsListScreen"
            tabBarOptions={{
                activeTintColor: activeColor,
                inactiveTintColor: inactiveColor,
                indicatorStyle: {
                    width: "25%",
                    left: "12.5%",
                    backgroundColor: activeColor,
                    height: "10%",
                    borderRadius: 2,
                },
                labelStyle: {
                    textTransform: 'none',
                    fontSize: 16,
                    textAlignVertical: 'top',
                    marginTop: 0
                },
                tabStyle: {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                },
                style: {
                    height: 40,
                    justifyContent: 'flex-start',
                }
            }} >
            <Tab.Screen name="ShopsListScreen" initialParams={{ data: route.params.cityShops }} component={ShopsListScreen} options={{ tabBarLabel: 'Списком' }} />
            <Tab.Screen name="ShopsListMapScreen" initialParams={{ data: route.params.allShops }} component={ShopsListMapScreen} options={{ tabBarLabel: 'На карте' }} />
        </Tab.Navigator>
    )
}

const ShopsList = ({ navigation }) => {
    const [isLoading, setLoading] = React.useState(true);
    const [shopsData, setShopsData] = React.useState([]);
    const [allshopsData, setAllshopsData] = React.useState([]);
    const appStore = useSelector(state => state.appStore);


    const getShopsByCity = (json) => {
        const choosenCity = appStore.city.name;
        const filteredData = [];

        if (choosenCity == 'Все города') return json;

        json.map(object => {
            if (object.city == choosenCity) {
                filteredData.push(object);
            }

        })
        return filteredData;
    };

    useFocusEffect(
        React.useCallback(() => {
            setShopsData([]);
            setLoading(true);
            getPharmacies()
                .then(([status, json]) => {
                    switch (status) {
                        case 200:
                            setShopsData(getShopsByCity(json));
                            setAllshopsData(json);
                            break;
                        default:
                            alert(`${status}:\n${json}`);
                            break;
                    }
                })
                .finally(() => {
                    setLoading(false);
                })
        }, [])
    );

    return (
            isLoading ? <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size="large" color="rgb(236,111,39)" />
                    <Text style={{ textAlign: 'center', fontSize: 18 }}>Загружаем список аптек</Text>
                </View>
                : <ShopsStack.Navigator initialRouteName="ShopsListTabs">
                    <ShopsStack.Screen
                        name="ShopsListTabs"
                        initialParams={{
                            cityShops: shopsData,
                            allShops: allshopsData,
                        }}
                        component={ShopsListTabs} options={ShopsListHeader} />
                </ShopsStack.Navigator>
    )
}



export default ShopsList;
