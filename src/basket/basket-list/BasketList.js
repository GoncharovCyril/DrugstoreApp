// import 'react-native-gesture-handler';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import {REMOVE_ALL_THIS_PRODUCT} from '../../redux/types';

import ListItem from './MedicineItemView';
import MedicineSwipeableRow from './MedicineSwipeableRow';

const medicineListStyles=StyleSheet.create({

});


const MedicineList = ({navigation, data}) => {


    const appStore = useSelector(state => state.appStore);
    const dispatch = useDispatch();
    

    const SwipeableRow = ({ item }) => {
        
        return (
            appStore.products.has(item.id) 
            ?
                <View>
                    {
                        <MedicineSwipeableRow action={() => {
                            dispatch({ type: REMOVE_ALL_THIS_PRODUCT, payload: { id: item.id } });
                        }}>
                            <ListItem
                                navigation={navigation}
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
        )
    };

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
                        renderItem={SwipeableRow}
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