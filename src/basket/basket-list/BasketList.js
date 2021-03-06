// import 'react-native-gesture-handler';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import {REMOVE_ALL_THIS_PRODUCT} from '../../redux/types';

import ListItem from './MedicineItemView';
import MedicineSwipeableRow from './MedicineSwipeableRow';

const medicineListStyles=StyleSheet.create({

});

const SwipeableRow = ({ item, index, separators, products }) => {
    // const product = useSelector(state => state.appStore.products.get(item.id));
    const dispatch = useDispatch();

    const removeAllProduct = React.useCallback(()=>{
        dispatch({ type: REMOVE_ALL_THIS_PRODUCT, payload: { id: item.id } });
    }, [dispatch]);

    return (
        <View>
            {
                products.get(item.id) != undefined 
                ?
                    <View>
                        {
                            <MedicineSwipeableRow action={removeAllProduct}>
                                <ListItem
                                    index={item.id}
                                    description={item.description}
                                    dealer={item.description}
                                    price={item.price}
                                    availability={item.availability}
                                    products={products}
                                />
                            </MedicineSwipeableRow>
                        }
                    </View>      
                : undefined
            }
        </View>   
    )
};

const MedicineList = ({navigation, data}) => {

    const productSelector = createSelector(
        state => {
            return state.appStore.products.entries()
        },
        mapArray => new Map(mapArray)
    )

    // const productsCounter = useSelector(state => {
    //     console.log('ping', index)
    //     return state.appStore.products;
    // });

    const products = useSelector(productSelector);

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
                        renderItem={({item, index, separators}) => (
                            <SwipeableRow 
                                item={item} 
                                index={index} 
                                separators={separators} 
                                products={products}
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


export default MedicineList;