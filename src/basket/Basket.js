import React from 'react';
import { useSelector } from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View, TextInput, Image, Button, ActivityIndicator } from 'react-native';

import BasketScreen from './BasketScreen';
import BasketHeader from './BasketHeader';

import DATA from '../medicine-list/testMedicineData';


{/* <MedicineList navigation={navigation} busketData={sectionbusketData}/> */}

{/* <MedicineList /> */}


const BasketStack = createStackNavigator();

const loadData = async (appStore) => {
    let resultData = [];
    for (let item of DATA) {
        // console.log(appStore.products.has(item.id));
        if (appStore.products.has(item.id)){
            resultData.push(item);
        }
        // busketData.push(appStore.products.get(item.id));
    }
    return resultData;
}

const Basket = ({navigation}) => {

    const appStore = useSelector(state => state.appStore);
    const [isLoading, setLoading] = React.useState(true);
    const [busketData, setBusketData] = React.useState([]);
    // React.useEffect(()=>{
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

    const loadBasket = () => {
        setBusketData([]);
        loadData(appStore)
        .then(resultData => {
            setBusketData(resultData);
        })
        .finally(() => {
            setLoading(false);
            // console.log(busketData);
        })
        // console.log(busketData);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }} onLayout={loadBasket} >
            {isLoading
                ? <ActivityIndicator size="large" color="rgb(236,111,39)" />
                : <BasketStack.Navigator initialRouteName="BasketScreen">
                    <BasketStack.Screen initialParams={{data: busketData}} name="BasketScreen" component={BasketScreen} options={BasketHeader} />
                </BasketStack.Navigator>
            }
        </View>
    );
};

export default Basket;
