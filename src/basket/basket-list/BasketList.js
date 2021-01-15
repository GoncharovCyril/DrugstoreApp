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

const SwipeableRow = ({ item, id, separators, products, navigation }) => {
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
                                    navigation={navigation}
                                    id={item.id}
                                    name={item.name}
                                    dealer={item.dealer}
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
                        renderItem={({item, id, separators}) => (
                            <SwipeableRow 
                                item={item} 
                                id={id} 
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
            </ View>
        </View>
    );
};


export default MedicineList;