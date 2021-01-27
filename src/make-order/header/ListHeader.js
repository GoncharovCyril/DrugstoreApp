import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { colorOrange, colorDarkGrey, colorGreen } from '../../Colors';

import { getPharmacies } from '../../requests/ShopsRequests';

import {getDistanceFromLatLonInKm} from '../../shopslist/funcs/distanceFunc'

import * as Location from 'expo-location';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    headerContainer: {

    },
    shopContainer: {
        backgroundColor: 'white',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    shopTitleContainer: {
        marginLeft: '3%',
        marginTop: '5%',
        marginRight: '3%',
        flexDirection: 'row',
    },
    shopInfoContainer: {
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '3%'
    },
    orderStructureContainer: {
        marginLeft: '3%',
        marginTop: '5%',
        marginBottom: '3%'
    },
    alertContainer: {
        marginLeft: '3%',
        marginTop: '5%',
        marginRight: '3%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    alertText: {
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'center'
    },
    changeShopContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    changeShopText: {
        color: colorGreen,
        fontSize: 16
    }
})

const ListHeader = ({ route, navigation }) => {
    const [isLoading, setLoading] = React.useState(true);
    const [shopItem, setShopItem] = React.useState({});
    const shopId = useSelector(state => state.appStore.shop.id)

    useFocusEffect(React.useCallback(() => {
        setLoading(true)
        const load = async () => {
            let { status } = await Location.requestPermissionsAsync();
            let location = null;
            if (status === 'granted') {
                location = await Location.getCurrentPositionAsync({});
            } else {
                Alert.alert(
                    "Внимание",
                    "Аптеки не будут отсортированы по близости к вашему устройству",
                    [],
                    { cancelable: true }
                )
            }

            console.log('shopId',shopId);
            if(shopId != null){
                getPharmacies().then(([status, json]) => {
                    switch (status) {
                        case 200:
                            const tempShop = json.find((element, index, array) => element['id'] == shopId);
                            if (location != null && tempShop != undefined){
    
                                const [latit, longit] = tempShop.coordinates.split(', ');
                                const latitU = location['coords']['latitude']
                                const longitU = location['coords']['longitude']
    
                                tempShop['distance'] = getDistanceFromLatLonInKm(latit, longit, latitU, longitU);
                            }
    
                            setShopItem(tempShop)
    
                            setLoading(false)
                            break;
                        default:
                            break;
                    }
                })
            } else{
                setLoading(false)
            }
            
        }
        load();

    }, []))

    return (
        <View style={styles.headerContainer}>
            <View style={styles.shopContainer} >
                <View style={styles.shopTitleContainer}>
                    <View style={{flex: 1}}>
                        <Text style={styles.titleText}>Аптека</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style={styles.changeShopContainer}
                        onPress={()=>{
                            navigation.navigate('ShopsListScreen', {baseRouteName: route.name})
                        }}
                    >
                        <View style={{borderWidth: 1, height: 16, width: 16}}></View>
                        <Text style={styles.changeShopText}>Изменить</Text>
                    </TouchableOpacity>
                </View>
                {
                    isLoading ?
                        <ActivityIndicator color={colorOrange} size="large" />
                        :
                        shopId != null ?
                            <View style={styles.shopInfoContainer}>
                                <Text numberOfLines={1} style={{ fontSize: 16, color: colorDarkGrey }}
                                >{shopItem['city']}</Text>
                                <Text numberOfLines={1} style={{ fontSize: 18, color: colorGreen }}
                                >{shopItem['name']}</Text>
                                <Text numberOfLines={2} style={{ fontSize: 16, color: colorDarkGrey }}
                                >{shopItem['address']}</Text>
                                {
                                    shopItem['distance'] != undefined ?
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ height: 16, width: 16, borderWidth: 1 }}>

                                            </View>
                                            <Text numberOfLines={1} style={{ fontSize: 16, color: colorDarkGrey, marginLeft: '3%' }}
                                            >{shopItem['distance'] != undefined ?
                                                `${shopItem['distance'].toFixed(2)} км`
                                                : undefined}</Text>
                                        </View>
                                        : undefined
                                }

                                <Text numberOfLines={1} style={{ fontSize: 16, color: colorDarkGrey }}
                                >{shopItem['phone']}</Text>
                                <Text numberOfLines={1} style={{ fontSize: 16, color: colorDarkGrey }}
                                >{shopItem['working_time']}</Text>
                            </View>
                            :
                            <View style={styles.alertContainer}>
                                <Text style={styles.alertText}>Для оформления заказа необходимо выбрать магазин</Text>
                            </View>
                }

            </View>
            <View style={styles.orderStructureContainer}>
                <Text style={styles.titleText}>Состав заказа</Text>
            </View>
        </View>
    )
}

export default ListHeader;