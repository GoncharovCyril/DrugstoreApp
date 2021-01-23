import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Text, Image } from 'react-native';
import { TabActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {SET_SELECTED_SHOP} from '../../redux/types';
import { BoxShadow } from 'react-native-shadow';

import { colorGreen, colorDarkGrey } from '../../Colors';

import ChooseButton from './ChooseButton';
import LittleLogo from '../../LittleLogo';




const styles = StyleSheet.create({

});

const viewH = 130;
const viewW = 345;

const MedicineStoreItem = ({ 
    navigation, 
    id, 
    system_id, 
    name, city, 
    address, 
    coordinates, 
    photo, 
    phone, 
    working_time,
}) => {

    const [viewWidth, setWidth] = React.useState(Dimensions.get('window').width*0.94);
    const jumpToMaps = TabActions.jumpTo('ShopsListMapScreen', {
        selectedShop: 
        {
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

    const dispatch = useDispatch();

    const setSelectedShop = React.useCallback(()=> {
        dispatch({ type: SET_SELECTED_SHOP, payload: {
            id: id,
            system_id: system_id,
            name: name,
            city: city,
            address: address,
            coordinates: coordinates,
            photo: photo,
            phone: phone,
            working_time: working_time,
        } });
        navigation.dispatch(jumpToMaps);
    }, [dispatch]);

    



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
                color: colorGreen,
                border: 4,
                radius: 15,
                opacity: 0.4,
                x: 0,
                y: 0,
                style: {}
            }}>
                <TouchableOpacity
                    onPress={setSelectedShop}
                    style={{
                        flex: 1,
                        backgroundColor: "white",
                        flexDirection: "row",
                        borderRadius: 15,
                        height: viewH,
                        width: viewWidth,
                        marginLeft: 0,
                        
                        // borderWidth: 1,
                        // borderColor: colorGreen
                    }}>
                    <View style={{ flex: 2 }}>
                        <View style={{ flex: 1, marginLeft: "5%", marginTop: '3%' }}>
                            <Text style={{ fontSize: 14, color: colorDarkGrey }}>{city}</Text>
                            <Text style={{ fontSize: 18, color: colorGreen }}>{name}</Text>
                            <Text style={{ fontSize: 16, color: colorDarkGrey }}>{address}</Text>
                            <View style={{ height: 10, color: colorDarkGrey }} />
                            <Text style={{ fontSize: 16, color: colorDarkGrey }}>{phone}</Text>
                            <Text style={{ fontSize: 16, color: colorDarkGrey }}>{working_time}</Text>
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
                                    : <View style={{ borderLeftWidth: 0, borderLeftColor: colorGreen }}>
                                        <LittleLogo />
                                    </View>
                            }
                        </View>
                        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'stretch', width: '100%' }}>
                            <View style={{ height: "100%", width: '100%' }}>
                                <ChooseButton id={id} system_id={system_id} address={address} />
                            </View>

                        </View>

                    </View>

                </TouchableOpacity>
            </BoxShadow>

        </View>
    );
};

export default MedicineStoreItem;