import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { getPharmacies } from '../../requests/ShopsRequests'; 



import MedicineStoreList from './MedicineStoreList';

const ShopsListScreen = ({navigation}) => {
    const [isLoading, setLoading] = React.useState(true);
    const [shopsData, setShopsData] = React.useState([]);
    const appStore = useSelector(state => state.appStore);
    

    const getShopsByCity = (json) => {
        const choosenCity = appStore.city.name;
        const filteredData = [];

        if(choosenCity == 'Все города') return json;

        json.map(object => {
            console.log(object);
            if(object.city == choosenCity){
                filteredData.push(object);
            }
            
        })

        return filteredData;
    };

    useFocusEffect(
        React.useCallback(()=> {
            setShopsData([]);
            setLoading(true);
            getPharmacies()
                .then(([status, json]) => {
                    console.log(status, '\t', json);
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
        }, [])
    );

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            {isLoading
                ? <View style={{}}>
                    <ActivityIndicator size="large" color="rgb(236,111,39)" />
                    <Text style={{ textAlign: 'center', fontSize: 18 }}>Загружаем список аптек</Text>
                </View>
                : <MedicineStoreList data={shopsData} navigation={navigation} />
            }
        </View>
    )
};

export default ShopsListScreen;
