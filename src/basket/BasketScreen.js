import React from 'react';
import { useSelector } from 'react-redux';
import { useFocusEffect, TabActions } from '@react-navigation/native';

import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';

import BasketList from './basket-list/BasketList';

import DATA from '../medicine-list/testMedicineData';
import EmptyBasket from './EmptyBasket';


{/* <MedicineList navigation={navigation} data={sectionData}/> */}

{/* <MedicineList /> */}

const loadData = async (products) => {
    let resultData = [];
    for (let item of DATA) {
        if (products.has(item.id)){
            resultData.push(item);
        }
        // busketData.push(appStore.products.get(item.id));
    }
    return resultData;
}

const Footer = ({navigation}) => {
    const jumpToCatalog = TabActions.jumpTo('ShopsList', {});
    return (<TouchableOpacity
        style={{
            flex: 1,
            width: "94%",
            borderColor: "rgb(236,111,39)",
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "rgb(236,111,39)"
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
                    <ActivityIndicator size="large" color="rgb(236,111,39)" />
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
