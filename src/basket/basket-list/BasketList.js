// import 'react-native-gesture-handler';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import {REMOVE_ALL_THIS_PRODUCT, REMOVE_PRICE_FROM_SUM} from '../../redux/types';
import { postCart, delCart } from '../../requests/BasketRequests';

// import ListItem from './MedicineItemView';
import ListItem from '../../medicine-list/MedicineItemView'
import MedicineSwipeableRow from './MedicineSwipeableRow';

const medicineListStyles=StyleSheet.create({

});

const SwipeableRow = ({ item, navigation}) => {
    const product = useSelector(state => state.appStore.products.get(item.id.toString()));
    const storedToken = useSelector(state => state.appStore.account.token);
    
    const dispatch = useDispatch();

    const removeAllProduct = async (id)=>{
        delCart(id, storedToken);
        dispatch({ type: REMOVE_ALL_THIS_PRODUCT, payload: { id: id } });
        const tempPrice = item.count *
            (
                (item.price != undefined && item.price != null && item.price != '')
                    ? item.price : item.min_price
            )
        dispatch({ type: REMOVE_PRICE_FROM_SUM, payload: {price: tempPrice} });

    };


    return (
        <View>
            {
                product != undefined 
                ?
                    <View>
                        {
                            <MedicineSwipeableRow action={()=>{removeAllProduct(item.id.toString())}}>
                                <ListItem
                                    navigation={navigation}
                                    id={item.id}
                                    name_rus={item.name_rus}
                                    manufacturer={item.manufacturer}
                                    price={item.price}
                                    min_price={item.min_price}
                                    availability={item.availability}
                                    count={item.count}
                                />
                            </MedicineSwipeableRow>
                        }
                    </View>      
                : undefined
            }
        </View>   
    )
};

const BasketList = ({navigation, data, token, products}) => {




    const [sumPrice, setSumPrice] = React.useState()

    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <SafeAreaView style={{ flex: 6 }}>
                <FlatList
                    data={data}
                    // ListFooterComponent={Footer}
                    // ListHeaderComponent={
                    //     headVisible ? Header : undefined
                    // }
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
                // refreshing={refreshing} 
                // onEndReached={onRefresh}
                // onEndReachedThreshold={1}
                />
            </SafeAreaView>
        </View>
    );
};


export default BasketList;