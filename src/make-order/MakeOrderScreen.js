import React from 'react';
import { View, ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { colorOrange } from '../Colors';

import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect, TabActions } from '@react-navigation/native';

import { SET_PRODUCTS_SUM_PRICE } from '../redux/types';

import { getCart } from '../requests/BasketRequests';

import SwipeableRow from './basket-list/SwipeableRow'
import ListHeader from './header/ListHeader';
import ListFooter from './footer/ListFooter';
import EmptyBasket from './basket-list/EmptyBasket';

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    safeAreaView: {
        flex: 1
    }

})

const loadData = async (token) => {
    let resultData = [];
    let sumPrice = 0;

    let isAuth = false;


    await getCart(token).then(([status, text]) => {
        switch (status) {
            case 200:
                try {
                    resultData = JSON.parse(text).cart;
                    sumPrice = JSON.parse(text).sum;
                    isAuth = true;
                }
                catch (error) {
                    resultData = [];
                    isAuth = false;
                }
                break;
            case 401:
                isAuth = false;
                break;
            default:
                break;
        }
    })

    return [resultData, sumPrice, isAuth];
}

const MakeOrderScreen = ({ route, navigation }) => {

    const products = useSelector(state => state.appStore.products);
    const productsCounter = useSelector(state => state.appStore.products.size);
    const selectedShop = useSelector(state => state.appStore.shop.id);
    const storedToken = useSelector(state => state.appStore.account.token)
    const storedSumPrice = useSelector(state => state.appStore.productsPrice.sumPrice);
    const [isLoading, setLoading] = React.useState(true);
    const [basketData, setBasketData] = React.useState([]);

    const dispatch = useDispatch();

    useFocusEffect(
        React.useCallback(() => {
            const loadScreen = async () => {
                setLoading(true);
                setBasketData([]);
                await loadData(storedToken)
                    .then(([resultData, sumPrice, isAuth]) => {
                        if (isAuth){
                            setBasketData(resultData.slice());
                            dispatch({ type: SET_PRODUCTS_SUM_PRICE, payload: { sumPrice: sumPrice } });
                        }
                        else {
                            navigation.navigate('PersonalAreaScreen', {baseRouteName: route.name})
                        }
                        
                    })
                    .finally(() => {
                        setLoading(false);
                    })
            }

            loadScreen();

        }, [storedToken, products, dispatch])
    );


    return (
        <View style={styles.screenContainer}>
            {isLoading ?
                <ActivityIndicator color={colorOrange} size="large" />
                :
                <SafeAreaView style={styles.safeAreaView}>
                    <FlatList
                        data={basketData}
                        ListFooterComponent={<ListFooter navigation={navigation} route={route} />}
                        ListHeaderComponent={<ListHeader navigation={navigation} route={route} />}
                        ListEmptyComponent={<EmptyBasket route={route} navigation={navigation} />}
                        renderItem={({ item, id, separators }) => (
                            <SwipeableRow
                                item={item}
                                // id={id} 
                                separators={separators}
                                products={products}
                                navigation={navigation}
                            />
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </SafeAreaView>
            }
        </View>
    )
}

export default MakeOrderScreen;