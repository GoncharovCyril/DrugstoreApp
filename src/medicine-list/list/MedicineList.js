// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import {ADD_PRODUCT, REMOVE_PRODUCT} from '../../redux/types';
import {postCart} from '../../requests/BasketRequests'

import { colorOrange, colorDarkGrey } from '../../Colors';

import ListItem from '../MedicineItemView';

import FilterSolid from '../../../svg/filter-solid';
import ChevronBottomSolid from '../../../svg/chevron-bottom-solid'
import { useFocusEffect } from '@react-navigation/native';

import SortersView from './SortersView';
import { Sorters} from './Sorters';
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';


const medicineListStyles = StyleSheet.create({

});

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}
const Footer = () => (<ActivityIndicator size="large" color={colorOrange} />);


// const productsCounter = useSelector(state => {
//     return state.appStore.products;
// });


const initFilters={
    manufacturer: [],
    country: [],
    release_form: []
}

const MedicineList = ({ route, navigation, setLoading, sourceData }) => {

    const [refreshing, setRefreshing] = React.useState(false);
    const [shownData, setShownData] = React.useState(sourceData.slice(0,10));
    const [nonshownData, setNonshownData] = React.useState([]);
    const [bottom, setBottom] = React.useState(undefined);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [selectedSorter, setSelectedSorter] = React.useState(3);
    const [possibleFilters, setPossibleFilters] = React.useState({
        manufacturer: [],
        country: [],
        release_form: []
    });
    const [activeFilters, setActiveFilters] = React.useState({
        manufacturer: [],
        country: [],
        release_form: []
    });
    const storedToken = useSelector(state => state.appStore.account.token);
    let dataCopy = [];


    // let dataCopy = sourceData;

    const onRefresh = React.useCallback(() => {


        if (shownData.length < nonshownData.length) {
            setRefreshing(true);
            setBottom(<Footer />)

            setShownData(shownData.concat(nonshownData.slice(shownData.length, shownData.length + 1)));

            setBottom(undefined);
            setRefreshing(false)
        }

    }, [refreshing, bottom, shownData]);


    const renderItem = ({ item }) => (
        <ListItem
            navigation={navigation}
            id={item.id.toString()}
            name_rus={item.name}
            manufacturer={item.manufacturer}
            min_price={item.min_price}
            price={item['price']}
            count={item['count']}
            availability={item.count > 0 ? 'В наличии' : 'Отсутствует'}

        />
    );


    useFocusEffect(React.useCallback(() => {
        // dataCopy = sourceData;
        // setShownData([])
        setRefreshing(false);
        setLoading(true)
        // setDataCopy(sourceData);
        // dataCopy=sourceData.slice();
        


        setNonshownData(sourceData.slice());

        let filters={
            manufacturer: [],
            country: [],
            release_form: []
        };

        initPossibleFilters();
        if (route['params'] != undefined) {
            if (route.params['activeFilters'] != undefined) {
                filters = route.params['activeFilters'];
                setActiveFilters(route.params['activeFilters']);
            }
            
        }


        // const tempArrForFilter = sourceData.filter((item) => {

        //     for (let [filterKey, filterValue] of Object.entries(activeFilters)){
        //         if (filterValue.length>0){
        //             if (filterValue.indexOf(item[filterKey]) == -1){
        //                 return false;
        //             }
        //             // return filterValue.indexOf(item[filterKey]) != -1
        //         }
        //         // else {
        //         //     return true;
        //         // }
        //     }
        //     return true;
        // }).slice();


        setNonshownData(
            sourceData
            .filter((item) => {

            for (let [filterKey, filterValue] of Object.entries(filters)){
                if (filterValue.length>0){
                    if (filterValue.indexOf(item[filterKey]) == -1){
                        return false;
                    }
                    // return filterValue.indexOf(item[filterKey]) != -1
                }
                // else {
                //     return true;
                // }
            }
            return true;
        })
        .sort(Sorters.find((element, index, array)=> {
            return element.id  == selectedSorter;
        }).compareFunction)
        )

        setShownData(sourceData
            .filter((item) => {

            for (let [filterKey, filterValue] of Object.entries(filters)){
                if (filterValue.length>0){
                    if (filterValue.indexOf(item[filterKey]) == -1){
                        return false;
                    }
                    // return filterValue.indexOf(item[filterKey]) != -1
                }
                // else {
                //     return true;
                // }
            }
            return true;
        })
        .sort(Sorters.find((element, index, array)=> {
            return element.id  == selectedSorter;
        }).compareFunction)
        .slice(0,10)
        )
        
        // ФИЛЬТРАЦИЯ ДАННЫХ
        // setDataCopy(tempArrForFilter);
        // dataCopy = tempArrForFilter.slice()

        // setDataCopy(dataCopy.sort(Sorters.find((element, index, array)=> {
        //     return element.id  == selectedSorter;
        // }).compareFunction));
        // setNonshownData(nonshownData.sort(Sorters.find((element, index, array)=> {
        //     return element.id  == selectedSorter;
        // }).compareFunction))
        // dataCopy.sort(Sorters.find((element, index, array)=> {
        //     return element.id  == selectedSorter;
        // }).compareFunction);

        // setShownData(nonshownData.slice(0, 10));

        setLoading(false);
    }, []))

    const sortData = (sortId, sortFunction) => {
        setRefreshing(false);
        setModalVisible(false);
        setLoading(true)
        setSelectedSorter(sortId);
        // setDataCopy(dataCopy.sort(sortFunction));
        // dataCopy.sort(sortFunction)
        setShownData(nonshownData.sort(sortFunction).slice(0, 10));
        setLoading(false);
    }

    const initPossibleFilters = () => {
        sourceData.forEach((item, index, array) => {

            for (let key of Object.keys(possibleFilters)){
                if(possibleFilters[key].indexOf(item[key]) == -1){
                    possibleFilters[key].push(item[key]);
                }
            }

        })
    }

    const Header = () => (
        <View style={{
            flexDirection: 'row',
            height: 25,
            justifyContent: 'space-around',
            marginTop: 12
        }}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => {
                setModalVisible(!modalVisible);
            }} >
                <Text style={{ fontSize: 15, color: colorDarkGrey }}>{Sorters.find((element, index, array)=> {
                    return element.id  == selectedSorter;
                }).title}  </Text>
                <View style={{ height: 12, alignSelf: 'center' }}>
                    <ChevronBottomSolid color={colorDarkGrey} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => {
                navigation.navigate('FilterScreen', {
                    baseRouteName: route.name,
                    activeFilters: activeFilters,
                    possibleFilters: possibleFilters,
                    initFilters: initFilters,
                })
            }}>
                <Text style={{ fontSize: 15, color: colorDarkGrey }}>Фильтр  </Text>
                <View style={{ height: 12, alignSelf: 'center' }}>
                    <FilterSolid color={colorDarkGrey} />
                </View>
            </TouchableOpacity>
        </View>
    );


    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.");
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(1,1,1,0.5)',
                        }}
                        onPress={() => {
                            setModalVisible(false)
                        }}
                        activeOpacity={0}
                    >
                        <TouchableOpacity
                            style={{
                                height: Sorters.length*40,
                                width: '90%',
                                backgroundColor: 'white',
                                borderRadius: 15
                            }}
                            activeOpacity={1}
                        >
                            <SortersView selectedId={selectedSorter} sortData={sortData} sortersData={Sorters} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>


                <SafeAreaView style={{ flex: 1 }}>
                    <FlatList
                        data={shownData}
                        ListFooterComponent={bottom}
                        ListHeaderComponent={Header}
                        ListEmptyComponent={()=><View style={{flex: 1, backgroundColor: 'red'}}></View>}
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