import React from 'react';
import { View, ActivityIndicator, Text, Alert } from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { colorOrange } from '../../Colors';
import MedicineStoreList from './MedicineStoreList';
import { getPharmacies } from '../../requests/ShopsRequests';

import {getDistanceFromLatLonInKm} from '../funcs/distanceFunc'

import * as Location from 'expo-location';



const ShopsListScreen = ({route, navigation}) => {
    const city = useSelector(state => state.appStore.city);
    const [isLoading, setLoading] = React.useState(true);
    // const shopsData = route.params.data;
    const [shopsData, setShopsData] = React.useState(
        // route.params.hasOwnProperty('data') ? route.params['data'] : []
        []
        );

    const [location, setLocation] = React.useState(null);



    const getShopsByCity = (json) => {

        if (city.name == 'Все города') return json;

        return json.filter(object => object.city === city.name);
    };
    const getDistance = (latit1, longit1, latit2, longit2) => {
        return Math.pow((
            Math.pow(latit1-latit2, 2)
            +
            Math.pow(longit1-longit2, 2)
        ),0.5)
    }

    useFocusEffect(
        React.useCallback(()=> {
            const load = async() => {
                let {status} = await Location.requestPermissionsAsync();
                let location = null;
                if (status === 'granted') {
                    location = await Location.getCurrentPositionAsync({});
                } else {
                    Alert.alert(
                        "Внимание",
                        "Аптеки не будут отсортированы по близости к вашему устройству",
                        [],
                        {cancelable: true}
                    )
                }
                setLocation(location);
                setShopsData([]);
                setLoading(true);
                await getPharmacies()
                    .then(([status, json]) => {
                        switch (status) {
                            case 200:
                                const tempShops = getShopsByCity(json).slice();

                                if (location != null){

                                    tempShops.forEach((item, index, array) =>{
                                        const [latit, longit] = item.coordinates.split(', ');
                                        const latitU = location['coords']['latitude']
                                        const longitU = location['coords']['longitude']

                                        array[index]['distance'] = getDistanceFromLatLonInKm(latit,longit,latitU,longitU);
                                    })

                                    tempShops.sort((a, b)=>{

                                        if (a.distance < b.distance) {
                                            return -1
                                        }
                                        if (a.distance > b.distance) {
                                            return 1
                                        }
                                        return 0                                        
                                    })
                                }
                                
                                setShopsData(tempShops.slice());
                                break;
                            default:
                                alert(`${status}:\n${json}`);
                                break;
                        }
                    })
                    .finally(() => {
                        setLoading(false);
                    })
            };

            load();
            
        },[])
    );


    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                {
                    isLoading ? <View style={{ flex: 1, justifyContent: 'center' }}>
                        <ActivityIndicator size="large" color={colorOrange} />
                        <Text style={{ textAlign: 'center', fontSize: 18 }}>Загружаем список аптек</Text>
                    </View>
                        : <MedicineStoreList data={shopsData} navigation={navigation} route={route} />
                }
               
        </View>
    )
};

export default ShopsListScreen;
