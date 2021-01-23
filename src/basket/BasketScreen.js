import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect, TabActions } from '@react-navigation/native';

import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';

import {SET_PRODUCTS_SUM_PRICE} from '../redux/types';

import { getMedicineItem } from '../requests/ProductsRequests';
import { getCart } from '../requests/BasketRequests';

import { colorGreen, colorOrange } from '../Colors';

import BasketList from './basket-list/BasketList';

import DATA from '../medicine-list/test-data/testMedicineData';
import EmptyBasket from './EmptyBasket';
import SelectShopFooter from './SelectShopFooter';


{/* <MedicineList navigation={navigation} data={sectionData}/> */}

{/* <MedicineList /> */}

const loadData = async (products, token) => {
    let resultData = [];
    let sumPrice = 0;

    let isAuth = false;


    await getCart(token).then(([status, text])=>{
        switch (status) {
            case 200:
                try{
                    resultData = JSON.parse(text).cart;
                    sumPrice = JSON.parse(text).sum;
                    isAuth=true;
                }
                catch(error){
                    resultData=[];
                    isAuth=false;
                }
                break;
            case 401:
                isAuth=false;
                break;
            default:
                break;
        }
    })

    if (!isAuth){
        for (let [key, value] of products){
            await getMedicineItem(key, null)
            .then(([status, json]) => {
                switch (status) {
                    case 200:
                        resultData.push({
                            id: json[0]['id'].toString(),
                            name_rus: json[0]['name_rus'],
                            manufacturer: json[0]['manufacturer'],
                            price: json[0]['price'],
                            min_price: json[0]['min_price'],
                            availability: 'Неизвестно',
                            count: json[0]['count']
                        })
                        sumPrice = sumPrice + (
                            (json[0]['price'] != null && json[0]['price'] != undefined && json[0]['price'] != '')
                            ? parseFloat(json[0]['price']) : parseFloat(json[0]['min_price'])
                            )
                        break;
                    default:
                        alert(status)
                        alert(json)
                        break;
                }
            })
        }
    }
   

    return [resultData, sumPrice];
}

// const SelectShopFooter = ({navigation}) => {
//     const jumpToCatalog = TabActions.jumpTo('ShopsList', {});
//     return (
//     <TouchableOpacity
//         style={{
//             flex: 1,
//             borderColor: colorOrange,
//             borderRadius: 15,
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: colorOrange,
//             marginRight: '6%',
//             marginTop: '3%'
//         }}

//         onPress={() => {
//             navigation.dispatch(jumpToCatalog);
//         }}

//     >
//         <Text style={{ fontSize: 18, color: 'white' }}>Выбрать аптеку</Text>
//     </TouchableOpacity>)
// }

const BasketScreen = ({route, navigation}) => {
    const products = useSelector(state => state.appStore.products);
    const productsCounter = useSelector(state => state.appStore.products.size);
    const selectedShop = useSelector(state => state.appStore.shop.id);
    const storedToken = useSelector(state => state.appStore.account.token)
    const storedSumPrice = useSelector(state => state.appStore.productsPrice.sumPrice);
    const [isLoading, setLoading] = React.useState(true);
    const [busketData, setBusketData] = React.useState([]);

    const dispatch = useDispatch();

    useFocusEffect(
        React.useCallback(()=>{
            const loadScreen = async () => {
                setLoading(true);
                setBusketData([]);
                await loadData(products, storedToken)
                    .then(([resultData, sumPrice]) => {
                        setBusketData(resultData.slice());
                        dispatch({ type: SET_PRODUCTS_SUM_PRICE, payload: {sumPrice: sumPrice} });
                    })
                    .finally(() => {
                        setLoading(false);
                    })
            }

            loadScreen();
            
        },[storedToken, products, dispatch])
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
                        <View style={{flex: 725}}>
                            <BasketList 
                                navigation={navigation} 
                                data={busketData}
                                token={storedToken}
                                products={products}
                            />
                        </View>
                        <View style={{flex: 75, alignItems: 'center', flexDirection: 'row'}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Text 
                                style={{
                                    color: colorGreen,
                                    fontSize: 20
                                }}>{`${storedSumPrice} руб.`}</Text>
                            </View>
                            <View style={{flex: 1}}>
                            {
                                selectedShop == null ?
                                <SelectShopFooter navigation={navigation}/>
                                // !!! Сюда вставить кнопку оформления заказа
                                : undefined
                            }
                            </View>
                            
                        </View>
                        <View style={{flex: 10}} />
                        
                    </View>
                    : <EmptyBasket navigation={navigation} />
            }
        </View>
    );
};

export default BasketScreen;
