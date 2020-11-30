import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const styles = StyleSheet.create({

});

const ListItem = ({title, action}) => (
    <TouchableOpacity 
        style={{}}
        onPress={action}
    >
        <View style={{flex: 115, backgroundColor: 'white',}}>
            <Text>{title}</Text>
        </View>
        <View style={{flex: 2}} />
    </TouchableOpacity>
);

const BuyButton = ({ navigation }) => {
    return (
            <TouchableOpacity
                style={{
                    alignItems: "center",
                    justifyContent: 'center',
                    backgroundColor: "rgb(92,158,36)",
                    borderRadius: 18,
                    flex: 1
                }}
                onPress={() => {
                    navigation.navigate('ShopsList');
                }}
            >
                <Text style={{
                    color: "white",
                    alignSelf: "center",
                    textAlignVertical: 'center',
                    fontSize: 16
                }}>Купить</Text>
            </TouchableOpacity>
    );
};

const DrugView = ({navigation, id, description, dealer, price, availability}) => {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Drug');
            }}
            style={{
                height: 180,
                flex: 1,
                flexDirection: "row",
            }}
        >
            <View style={{flex:0.3}} />
            <View style={{flex:9}} >
                <View style={{flex:0.5}} />
                <View style={{
                    backgroundColor: "white",
                    flexDirection: "column",
                    borderRadius: 18,
                    flex: 9,

                    shadowColor: 'rgb(92,158,36)',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 5,
                    shadowRadius: 5,
                    elevation: 5,
                }}>
                    <View style={{flex:6}} />
                    <View style={{
                        flex:88,
                        flexDirection: "row",
                    }}>
                        <View style={{flex: 3}} />
                        <View style={{
                            flex: 24,
                            alignItems: "center",
                            justifyContent: "space-around"
                        }}>
                            <View style={{
                                width: "100%",
                                flex: 5,
                                borderWidth: 1
                            }}>
                                <Image
                                    style={{
                                        width: "100%",
                                        height: "100%"
                                    }}
                                    source = {require('./drug1.jpg')}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={{
                                flex:5,
                                color: "rgb(106,106,106)",
                                borderWidth: 1,
                                textAlign: 'center',
                                fontSize: 12
                            }}>
                                {availability}
                            </Text>
                        </ View>
                        <View style={{flex: 2}} />
                        <View style={{flex: 68}}>
                            <View style={{flex: 160, borderWidth: 1}}>
                                <Text style={{fontSize: 13}}>{description}</Text>
                                <Text style={{color:"rgb(106,106,106)", fontSize: 13}}>{dealer}</Text>
                            </View>


                            <View style={{flexDirection:"row", flex: 63+73}}>
                                <View style={{flex:7}} />
                                <View style={{flex:5, borderWidth: 1, flexDirection: 'column'}}>
                                        <Text style={{
                                            alignSelf: "flex-end",
                                            borderWidth: 1,
                                            flex:1,
                                            textAlignVertical: 'center',
                                            borderWidth: 1,
                                            fontWeight: 'bold',
                                        }}>
                                            {price}
                                            </Text>
                                    <BuyButton navigation={navigation}/>
                                </View>
                            </View>

                        </View>
                        <View style={{flex: 3}} />
                    </View>
                    <View style={{flex:6}} />
                </View>
                <View style={{flex:0.5}} />
            </ View>
            <View style={{flex:0.3}} />


        </TouchableOpacity>
    );
};


export default DrugView;