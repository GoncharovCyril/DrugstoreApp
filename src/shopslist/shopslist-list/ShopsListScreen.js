import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MedicineStoreList from './MedicineStoreList';
import { getPharmacies } from '../../requests/ShopsRequests';

const ShopsListScreen = ({route, navigation}) => {
    const appStore = useSelector(state => state.appStore);
    const [isLoading, setLoading] = React.useState(true);
    // const shopsData = route.params.data;
    const [shopsData, setShopsData] = React.useState(
        // route.params.hasOwnProperty('data') ? route.params['data'] : []
        []
        );

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


    React.useEffect(() => {
        navigation.addListener('focus', () => {
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
        });
    })


    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                {
                    isLoading ? <View style={{ flex: 1, justifyContent: 'center' }}>
                        <ActivityIndicator size="large" color="rgb(236,111,39)" />
                        <Text style={{ textAlign: 'center', fontSize: 18 }}>Загружаем список аптек</Text>
                    </View>
                        : <MedicineStoreList data={shopsData} navigation={navigation} />
                }
               
        </View>
    )
};

export default ShopsListScreen;
