// import 'react-native-gesture-handler';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import {REMOVE_ALL_THIS_PRODUCT} from '../../redux/types';

import ListItem from './MedicineItemView';
import MedicineSwipeableRow from './MedicineSwipeableRow';

const medicineListStyles=StyleSheet.create({

});

const SwipeableRow = ({ item, index, separators }) => {
    const product = useSelector(state => state.appStore.products.get(item.id));
    const dispatch = useDispatch();

    const removeAllProduct = React.useCallback(()=>{
        dispatch({ type: REMOVE_ALL_THIS_PRODUCT, payload: { id: item.id } });
    }, [dispatch]);

    return (
        <View>
            {
                product != undefined 
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
                            <SwipeableRow item={item} index={index} separators={separators} />
                        )}
                        keyExtractor={item => item.id}
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