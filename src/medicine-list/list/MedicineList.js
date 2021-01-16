// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

import {useSelector} from 'react-redux';
import { createSelector } from 'reselect';

import {colorOrange} from '../../Colors';

import ListItem from '../MedicineItemView';

import FilterSolid from '../../../svg/filter-solid';
import ChevronBottomSolid from '../../../svg/chevron-bottom-solid'


const medicineListStyles=StyleSheet.create({

});

const wait= (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const Footer = () => (
    <ActivityIndicator size="large" color={colorOrange} />);

const Header = () => (
    <View style={{
        flexDirection: 'row',
        height: 25,
        justifyContent: 'space-around',
        marginTop: 5
    }}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 15}}>По популярности  </Text>
            <View style={{height: 12, alignSelf: 'center'}}>
                <ChevronBottomSolid color="black" />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 15}}>Фильтр  </Text>
            <View style={{height: 12, alignSelf: 'center'}}>
                <FilterSolid color="black" />
            </View>
        </TouchableOpacity>
    </View>
);

const MedicineList = ({route, navigation}) => {

    const [refreshing, setRefreshing] = React.useState(false);
    // const [data, setData] = React.useState(DATA)
    const [bottom, setBottom] = React.useState(undefined);

    const productSelector = createSelector(
        state => {
            return state.appStore.products.entries()
        },
        mapArray => {
            return new Map(mapArray)
        }
    )

    // const productsCounter = useSelector(state => {
    //     console.log('ping', id)
    //     return state.appStore.products;
    // });

    const products = useSelector(productSelector);
    

    const listData = route.params.data;


    const headVisible = route.params.headVisible===undefined ? true : route.params.headVisible;
    

    const [count, setCount] = React.useState(3);

    const onRefresh = React.useCallback(() => {
            setRefreshing(true);
            setBottom(<Footer />)
            //setData(data.concat(data));
            wait(2000).then(() => {setRefreshing(false); setBottom(undefined)});
    }, []);

    const renderItem = ({ item }) => (
        <ListItem products={products} navigation={navigation} id={item.id} name={item.name} dealer={item.name} price={item.price} availability={item.availability} />
    );

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={listData}
                    ListFooterComponent={bottom}
                    ListHeaderComponent={
                        headVisible ? Header : undefined
                    }
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    refreshing={refreshing}
                    onEndReached={onRefresh}
                    onEndReachedThreshold={1}
                />
            </SafeAreaView>
        </View>
    );
};


export default MedicineList;