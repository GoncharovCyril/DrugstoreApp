import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import { BoxShadow } from 'react-native-shadow';


const styles = StyleSheet.create({

});

const BuyButton = ({ navigation }) => {
    return (
            <TouchableOpacity
                style={{
                    alignItems: "center",
                    justifyContent: 'center',
                    backgroundColor: "rgb(92,158,36)",
                    borderRadius: 15,
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
                    fontSize: 15
                }}>Купить</Text>
            </TouchableOpacity>
    );
};


const viewH = 180;
const viewW = 345;

const shadowOpt = {
    width: viewW,
    height: viewH,
    color:"#ACCA92",
    border:4,
    radius:15,
    opacity:0.4,
    x:0,
    y:0,
    style:{}
}

const DrugView = ({navigation, id, description, dealer, price, availability}) => {
    return (
        <View style={{
            height: viewH + 20,
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <BoxShadow setting={shadowOpt}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Drug');
                    }}
                    style={{

                        backgroundColor: "white",
                        flexDirection: "column",
                        borderRadius: 18,
                        height: viewH,
                        width: viewW,
                    }}>
                    <View style={{ flex: 10 }} />
                    <View style={{
                        flex: 84,
                        flexDirection: "row",
                    }}>
                        <View style={{ flex: 5 }} />
                        <View style={{
                            flex: 22,
                            alignItems: "center",
                            justifyContent: "space-around",
                        }}>
                            <View style={{
                                width: "100%",
                                flex: 5,
                            }}>
                                <Image
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    source={require('../../img/drug4.png')}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={{ flex: 0.5 }} />
                            <Text style={{
                                flex: 4.5,
                                color: "rgb(106,106,106)",
                                textAlign: 'center',
                                fontSize: 11
                            }}>
                                {availability}
                            </Text>
                        </ View>
                        <View style={{ flex: 2 }} />
                        <View style={{ flex: 67 }}>
                            <View style={{ flex: 160 }}>
                                <View style={{ flex: 6., flexDirection: 'row' }}>
                                    <View style={{ width: 2 }} />
                                    <Text style={{ fontSize: 12.5 }}>{description}</Text>
                                </View>
                                <View style={{ flex: 4 }}>
                                    <Text style={{ color: "rgb(106,106,106)", fontSize: 12 }}>{dealer}</Text>
                                </View>
                            </View>


                            <View style={{ flexDirection: "row", flex: 63 + 73 }}>
                                <View style={{ flex: 7 }} />
                                <View style={{ flex: 5, flexDirection: 'column' }}>
                                    <Text style={{
                                        alignSelf: "flex-end",
                                        flex: 1,
                                        textAlignVertical: 'center',
                                        fontWeight: 'bold',
                                    }}>
                                        {price}
                                    </Text>
                                    <BuyButton navigation={navigation} />
                                </View>
                            </View>

                        </View>
                        <View style={{ flex: 4 }} />
                    </View>
                    <View style={{ flex: 6 }} />
                </TouchableOpacity>
            </BoxShadow>

        </View>
    );
};


export default DrugView;