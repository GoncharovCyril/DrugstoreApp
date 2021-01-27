import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TabActions } from '@react-navigation/native';

import AcceptButton from '../../AcceptButton';
import UnactiveButton from '../../UnactiveButton';
import { colorDarkGrey } from '../../Colors';
import { makeOrder } from '../../requests/OrderRequests';
import { CLEAR_ALL_PRODUCTS } from '../../redux/types'

const styles = StyleSheet.create({
    footerContainer: {
        marginTop: '1%'

    },
    sumPriceContainer: {
        marginLeft: '3%',
        marginRight: '3%',
        flexDirection: 'row'

    },
    sumPriceLabelText: {
        color: colorDarkGrey,
        fontSize: 18,
        flex: 1
    },
    sumPriceText: {
        color: colorDarkGrey,
        fontSize: 18,
        flex: 1,
        textAlign: 'right'
    },
    confirmButtonContainer: {
        height: 55,
        marginLeft: '3%',
        marginRight: '3%',
        marginBottom: '2%',
        marginTop: '6%'
    }
})

const ListFooter = ({route, navigation})=>{
    const sumPrice = useSelector(state => state.appStore.productsPrice.sumPrice)
    const token = useSelector(state => state.appStore.account.token)
    const chosenShop = useSelector(state => state.appStore.shop.id)
    const productsSize = useSelector(state => state.appStore.products.size);

    const dispatch = useDispatch();

    const confirmOrder = () =>{
        console.log(`token=${token}`)
        console.log(`chosenShop=${chosenShop}`)
        console.log(`productsSize=${productsSize}`)

        if (productsSize>0){
            if (chosenShop != null) {
                makeOrder(token, chosenShop).then(([status, json])=> {
                    console.log(status)
                    console.log(json);
                    switch(status){
                        case 200:
                            dispatch({ type: CLEAR_ALL_PRODUCTS, payload: {} });
                            Alert.alert(
                                "",
                                "Заказ успешно оформлен",
                                [],
                                {cancelable: true}
                            )
                            navigation.dispatch(TabActions.jumpTo('Main', {}))
                            // navigation.jumpTo('Main')
                            
                            break;
                        case 401:
                            Alert.alert(
                                "Внимание",
                                "Ошибка авторизации",
                                [],
                                {cancelable: true}
                            )
                            break;
                        default:
                            Alert.alert(
                                status,
                                JSON.stringify(json),
                                [],
                                {cancelable: true}
                            )
                            break;
                    }
                })
            } else {
                Alert.alert(
                    "Внимание",
                    "Не выбрана аптека получения заказа. Невозможно оформить заказ",
                    [],
                    {cancelable: true}
                )
            }
            
        } else {
            Alert.alert(
                "Внимание",
                "Не выбрано ни одного товара. Невозможно оформить заказ",
                [],
                {cancelable: true}
            )
        }

        

        
    }


    return (
        <View style={styles.footerContainer}>
            <View style={styles.sumPriceContainer}>
                <Text style={styles.sumPriceLabelText}>Итого к оплате</Text>
                <Text style={styles.sumPriceText}>{`${sumPrice} руб.`}</Text>
            </View>
            <View style={styles.confirmButtonContainer}>
                {
                    productsSize>0 && chosenShop!=null ?
                    <AcceptButton title="Подтвердить заказ" isBig={true} onPress={confirmOrder} />
                    :
                    <UnactiveButton title="Подтвердить заказ" isBig={true} />
                }
                

            </View>
        </View>
    )
}

export default ListFooter;