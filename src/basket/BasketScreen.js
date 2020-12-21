import React from 'react';
import { useSelector } from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, Image, Button, ActivityIndicator } from 'react-native';

import BasketList from './basket-list/BasketList';

import DATA from '../medicine-list/testMedicineData';


{/* <MedicineList navigation={navigation} data={sectionData}/> */}

{/* <MedicineList /> */}

const loadData = async (appStore) => {
    let resultData = [];
    console.log("MAP=",appStore.products);
    for (let item of DATA) {
        // console.log(appStore.products.has(item.id));
        if (appStore.products.has(item.id)){
            console.log('push=',item.id)
            resultData.push(item);
        }
        // busketData.push(appStore.products.get(item.id));
    }
    return resultData;
}
const wait= (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const BasketScreen = ({route, navigation}) => {
    const appStore = useSelector(state => state.appStore);
    const [isLoading, setLoading] = React.useState(true);
    const [busketData, setBusketData] = React.useState([]);

    // React.useEffect(()=>{
    //     setLoading(true);
    //     setBusketData([]);
    //     loadData(appStore)
    //     .then(resultData => {
    //         setBusketData(resultData);
    //     })
    //     .finally(() => {
    //         setLoading(false);
    //         // console.log(busketData);
    //     })
    //     // console.log(busketData);
    // },[]);

    useFocusEffect(
        React.useCallback(()=> {
            console.log("REFRESH2");
            setLoading(true);
            setBusketData([]);
            loadData(appStore)
                .then(resultData => {
                    setBusketData(resultData);
                })
                .then(()=> wait(2000))
                .finally(() => {
                    setLoading(false);
                    // console.log(busketData);
                })
        }, [])
    );

    return (
        <View style={{flex:1, justifyContent: 'center'}}>
            {isLoading
                ? <View>
                        <ActivityIndicator size="large" color="rgb(236,111,39)" />
                        <Text style={{textAlign: 'center', fontSize: 18}}>Загружаем товары</Text>
                    </View>
                : <BasketList navigation={navigation} data={busketData} /> 
            }
        </View>
    );
};

export default BasketScreen;
