import React from 'react';
import { useSelector } from 'react-redux';
import { useFocusEffect, TabActions } from '@react-navigation/native';

import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';

import {getMedicineItem} from '../requests/ProductsRequests';

import { colorOrange } from '../Colors';

import BasketList from './basket-list/BasketList';

import DATA from '../medicine-list/test-data/testMedicineData';
import EmptyBasket from './EmptyBasket';


{/* <MedicineList navigation={navigation} data={sectionData}/> */}

{/* <MedicineList /> */}

const loadData = async (products) => {
    let resultData = [];

    for (let [key, value] of products){
        await getMedicineItem(key, null)
        .then(([status, json]) => {
            switch (status) {
                case 200:
                    console.log('json')
                    resultData.push({
                        id: json[0]['id'].toString(),
                        name: json[0]['name_rus'],
                        manufacturer: json[0]['manufacturer'],
                        price: json[0]['price'],
                        min_price: json[0]['min_price'],
                        availability: 'availibility',
                    })
                    break;
                default:
                    alert(status)
                    alert(json)
                    break;
            }
        })
    }

    return resultData;
}

const Footer = ({navigation}) => {
    const jumpToCatalog = TabActions.jumpTo('ShopsList', {});
    return (<TouchableOpacity
        style={{
            flex: 1,
            width: "94%",
            borderColor: colorOrange,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colorOrange
        }}

        onPress={() => {
            navigation.dispatch(jumpToCatalog);
        }}

    >
        <Text style={{ fontSize: 18, color: 'white' }}>Выбрать аптеку</Text>
    </TouchableOpacity>)
}

const BasketScreen = ({route, navigation}) => {
    const products = useSelector(state => state.appStore.products);
    const productsCounter = useSelector(state => state.appStore.products.size);
    const selectedShop = useSelector(state => state.appStore.shop.id);
    const [isLoading, setLoading] = React.useState(true);
    const [busketData, setBusketData] = React.useState([]);

    useFocusEffect(
        React.useCallback(()=>{
            setLoading(true);
            setBusketData([]);
            loadData(products)
                .then(resultData => {
                    console.log(resultData)
                    setBusketData(resultData);
                })
                .finally(() => {
                    setLoading(false);
                })
        },[])
    );

    return (
        <View style={{flex:1, justifyContent: 'center'}}>
            {isLoading
                ? <View>
                    <ActivityIndicator size="large" color={colorOrange} />
                    <Text style={{ textAlign: 'center', fontSize: 18 }}>Загружаем товары</Text>
                </View>
                : productsCounter > 0
                    ? <View style={{ flex: 1}}>
                        <View style={{flex: 700}}>
                            <BasketList navigation={navigation} data={busketData} />
                        </View>
                        <View style={{flex: 85, alignItems: 'center'}}>
                            {
                                selectedShop == null ?
                                <Footer navigation={navigation}/>
                                : undefined
                            }
                        </View>
                        <View style={{flex: 10}} />
                        
                    </View>
                    : <EmptyBasket navigation={navigation} />
            }
        </View>
    );
};

export default BasketScreen;
