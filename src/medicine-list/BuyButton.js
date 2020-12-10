import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';


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

export default BuyButton;
