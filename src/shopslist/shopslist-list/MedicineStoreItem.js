import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Text, Image } from 'react-native';
import { TabActions } from '@react-navigation/native';
import { BoxShadow } from 'react-native-shadow';

import ChooseButton from './ChooseButton';
import LittleLogo from '../../LittleLogo';


const styles = StyleSheet.create({

});

const viewH = 130;
const viewW = 345;
const windowW = Dimensions.get('window').width;

//orange
const colorO = "rgba(236,111,39,1.0)";
//green
const colorG = '#4db141';
const colorB = '#4e6a79';

const shadowOpt = {
    width: viewW,
    height: viewH,
    color: "#4db141",
    border: 4,
    radius: 15,
    opacity: 0.4,
    x: 0,
    y: 0,
    style: {}
}

const MedicineStoreItem = ({ navigation, id, system_id, name, city, address, coordinates, photo, phone, working_time }) => {

    const [viewWidth, setWidth] = React.useState(windowW * 0.94);
    const jumpToMaps = TabActions.jumpTo('ShopsListMapScreen', {
        selectedShop: {
            id: id,
            system_id: system_id,
            name: name,
            city: city,
            address: address,
            coordinates: coordinates,
            photo,
            phone: phone,
            working_time: working_time,
        }   
    });

    return (
        <View
            style={{
                height: viewH + 20,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}

        >
            <BoxShadow setting={{
                width: viewWidth,
                height: viewH,
                color: "#4db141",
                border: 4,
                radius: 15,
                opacity: 0.4,
                x: 0,
                y: 0,
                style: {}
            }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.dispatch(jumpToMaps);
                    }}
                    style={{

                        backgroundColor: "white",
                        flexDirection: "row",
                        borderRadius: 15,
                        height: viewH,
                        width: viewWidth - 2,
                        marginLeft: 1
                    }}>
                    <View style={{ flex: 2 }}>
                        <View style={{ flex: 1, marginLeft: "5%", marginTop: '3%' }}>
                            <Text style={{ fontSize: 14, color: colorB }}>{city}</Text>
                            <Text style={{ fontSize: 18, color: colorG }}>{name}</Text>
                            <Text style={{ fontSize: 16, color: colorB }}>{address}</Text>
                            <View style={{ height: 10, color: colorB }} />
                            <Text style={{ fontSize: 16, color: colorB }}>{phone}</Text>
                            <Text style={{ fontSize: 16, color: colorB }}>{working_time}</Text>
                        </View>

                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 6, width: '100%' }}>
                            {
                                photo != null ?
                                    <Image
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            borderTopRightRadius: 15,
                                        }}
                                        source={{
                                            uri: 'http://195.133.145.14/storage/' + photo,
                                        }}
                                        resizeMode='cover'
                                    />
                                    : <View style={{ borderLeftWidth: 0, borderLeftColor: colorG }}>
                                        <LittleLogo />
                                    </View>
                            }
                        </View>
                        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'stretch', width: '100%' }}>
                            <View style={{ height: "100%", width: '100%' }}>
                                <ChooseButton system_id={system_id} address={address} />
                            </View>

                        </View>

                    </View>

                </TouchableOpacity>
            </BoxShadow>

        </View>
    );
};


const MedicineStoreItem2 = ({ navigation, id, system_id, name, city, address, coordinates, photo, phone, working_time }) => {

    const [viewWidth, setWidth] = React.useState(windowW * 0.94);

    return (
        <View
            style={{
                height: 200+20,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}

        >
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('MedicineItemScreen');
                }}
                style={{

                    backgroundColor: "white",
                    flexDirection: "column",
                    borderRadius: 15,
                    borderWidth: 2,
                    borderColor: colorG,
                    height: 200,
                    width: viewWidth,
                }}>
                <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 6, width: '100%' }}>
                        {
                            photo != null ?
                                <Image
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        borderTopRightRadius: 15,
                                    }}
                                    source={{
                                        uri: 'http://195.133.145.14/storage/' + photo,
                                    }}
                                    resizeMode='cover'
                                />
                                : <View style={{ borderLeftWidth: 0, borderLeftColor: colorG }}>
                                    <LittleLogo />
                                </View>
                        }
                    </View>
                   

                </View>
                <View style={{ flex: 6 }}>
                    <View style={{ flex: 1, alignItems: 'center', marginTop: '3%' }}>
                        <Text style={{ fontSize: 18, color: colorG }}>{name}</Text>
                        <Text style={{ fontSize: 16, color: colorB }}>{city}, {address}</Text>
                        <Text style={{ fontSize: 16, color: colorB }}>{phone}</Text>
                        <Text style={{ fontSize: 16, color: colorB }}>{working_time}</Text>
                    </View>

                </View>
                

            </TouchableOpacity>
        </View>
    );
};


export default MedicineStoreItem;