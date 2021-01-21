// import 'react-native-gesture-handler';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import {REMOVE_ALL_THIS_PRODUCT, ADD_PRODUCT, REMOVE_PRODUCT} from '../../redux/types';
import { postCart, delCart } from '../../requests/BasketRequests';

// import ListItem from './MedicineItemView';
import ListItem from '../../medicine-list/MedicineItemView'
import MedicineSwipeableRow from './MedicineSwipeableRow';

const medicineListStyles=StyleSheet.create({

});

const SwipeableRow = ({ item, id, separators, products, navigation, addProduct, removeProduct, removeAllProduct }) => {
    // const product = useSelector(state => state.appStore.products.get(item.id));
    
    return (
        <View>
            {
                products.get(item.id.toString()) != undefined 
                ?
                    <View>
                        {
                            <MedicineSwipeableRow action={()=>{removeAllProduct(item.id)}}>
                                <ListItem
                                    navigation={navigation}
                                    id={item.id}
                                    name_rus={item.name_rus}
                                    manufacturer={item.manufacturer}
                                    price={item.price}
                                    min_price={item.min_price}
                                    availability={item.availability}
                                    products={products}
                                    count={item.count}
                                    addProduct={addProduct}
                                    removeProduct={removeProduct}
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


    // const productsCounter = useSelector(state => {
    //     return state.appStore.products;
    // });



    const dispatch = useDispatch();
    const addProduct = async (id) => {
        const count = products.get(id) != undefined ? products.get(id).count : 0

        await postCart(id, count+1, token).then(([status, text]) => {
            console.log(status);
        })

        dispatch({ type: ADD_PRODUCT, payload: {id: id} });
    };
    const removeProduct = async (id)=>{
        const count = products.get(id) != undefined ? products.get(id).count : 0
        await postCart(id, count-1, token).then(([status, text]) => {
            console.log(status);
        })
        dispatch({ type: REMOVE_PRODUCT, payload: {id: id} });
    };

    const removeAllProduct = async (id)=>{
        await delCart(id, token).then(([status, text]) => {
            console.log(status);
        })
        dispatch({ type: REMOVE_ALL_THIS_PRODUCT, payload: { id: id } });
    };

    // console.log(products);


    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <View style={{flex: 6}} >
                <SafeAreaView style={{flex: 1}}>
                    <FlatList 
                        data={data}
                        // ListFooterComponent={Footer}
                        // ListHeaderComponent={
                        //     headVisible ? Header : undefined
                        // }
                        renderItem={({item, id, separators}) => (
                            <SwipeableRow 
                                item={item} 
                                id={id} 
                                separators={separators} 
                                products={products}
                                navigation={navigation}

                                addProduct = {addProduct}
                                removeProduct = {removeProduct}
                                removeAllProduct={removeAllProduct}
                            />
                        )}
                        keyExtractor={item => item.id.toString()}
                        // refreshing={refreshing} 
                        // onEndReached={onRefresh}
                        // onEndReachedThreshold={1}
                    />
                </SafeAreaView>
            </ View>
        </View>
    );
};


export default BasketList;