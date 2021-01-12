import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { colorOrange } from '../../Colors';
import MedicineStoreList from './MedicineStoreList';
import { getPharmacies } from '../../requests/ShopsRequests';

const ShopsListScreen = ({route, navigation}) => {
    const city = useSelector(state => state.appStore.city);
    const [isLoading, setLoading] = React.useState(true);
    // const shopsData = route.params.data;
    const [shopsData, setShopsData] = React.useState(
        // route.params.hasOwnProperty('data') ? route.params['data'] : []
        []
        );

    const getShopsByCity = (json) => {

        if (city.name == 'Все города') return json;

        return json.filter(object => object.city === city.name);
    };

    useFocusEffect(
        React.useCallback(()=> {
            setShopsData([]);
            setLoading(true);
            getPharmacies()
                .then(([status, json]) => {
                    switch (status) {
                        case 200:
                            setShopsData(getShopsByCity(json));
                            break;
                        default:
                            alert(`${status}:\n${json}`);
                            break;
                    }
                })
                .finally(() => {
                    setLoading(false);
                })
        },[])
    );


    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                {
                    isLoading ? <View style={{ flex: 1, justifyContent: 'center' }}>
                        <ActivityIndicator size="large" color={colorOrange} />
                        <Text style={{ textAlign: 'center', fontSize: 18 }}>Загружаем список аптек</Text>
                    </View>
                        : <MedicineStoreList data={shopsData} navigation={navigation} />
                }
               
        </View>
    )
};

export default ShopsListScreen;
