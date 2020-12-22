import React from 'react';
import { View } from 'react-native';
import { useFocusEffect, TabActions } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { getPharmacies } from '../../requests/ShopsRequests'; 

import MedicineStoreList from './MedicineStoreList';

const ShopsListScreen = ({navigation}) => {
    const [isLoading, setLoading] = React.useState(true);
    const [shopsData, setShopsData] = React.useState([]);
    const appStore = useSelector(state => state.appStore);

    useFocusEffect(
        React.useCallback(()=> {
            getPharmacies()
                .then(([status, json]) => {
                    console.log(status, '\t', json);
                    switch (status) {
                        case 200:
                            setShopsData(json);
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
            <MedicineStoreList data={shopsData} navigation={navigation} />
        </View>
    )
};

export default ShopsListScreen;
