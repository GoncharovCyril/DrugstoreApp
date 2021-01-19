// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import {ADD_PRODUCT, REMOVE_PRODUCT} from '../../redux/types';

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
//     console.log('ping', id)
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
    let dataCopy = [];

    // console.log(shownData)


    // let dataCopy = sourceData;

    const productSelector = createSelector(
        state => {
            return state.appStore.products.entries()
        },
        mapArray => {
            return new Map(mapArray)
        }
    )
    const products = useSelector(productSelector);

    const onRefresh = React.useCallback(() => {

        console.log(nonshownData.length,';',shownData.length)

        if (shownData.length < nonshownData.length) {
            setRefreshing(true);
            setBottom(<Footer />)
            console.log('refresh')

            setShownData(shownData.concat(nonshownData.slice(shownData.length, shownData.length + 1)));
            // console.log(shownData.length)

            setBottom(undefined);
            setRefreshing(false)
        }

    }, [refreshing, bottom, shownData]);


    const dispatch = useDispatch();
    const addProduct = (id) => {
        dispatch({ type: ADD_PRODUCT, payload: {id: id} });
    };
    const removeProduct = (id)=>{
        dispatch({ type: REMOVE_PRODUCT, payload: {id: id} });
    };

    const renderItem = ({ item }) => (
        <ListItem
            products={products}
            navigation={navigation}
            id={item.id}
            name={item.name}
            dealer={item.manufacturer}
            price={item.min_price}
            availability={'item.availability'}
            dispatch={dispatch}

            addProduct={addProduct}
            removeProduct={removeProduct}
        />
    );


    useFocusEffect(React.useCallback(() => {
        // dataCopy = sourceData;
        // console.log(dataCopy.length);
        // setShownData([])
        setRefreshing(false);
        setLoading(true)
        // setDataCopy(sourceData);
        // dataCopy=sourceData.slice();

        console.log()

        


        setNonshownData(sourceData.slice());

        let filters={
            manufacturer: [],
            country: [],
            release_form: []
        };

        initPossibleFilters();
        if (route['params'] != undefined) {
            // console.log('params')
            // console.log(route.params['activeFilters'])
            if (route.params['activeFilters'] != undefined) {
                filters = route.params['activeFilters'];
                setActiveFilters(route.params['activeFilters']);
            }
            
        }

        // console.log('before filter',nonshownData.length);

        // console.log(Object.entries(activeFilters))

        // for (let [filterKey, filterValue] of Object.entries(activeFilters)) {
        //     console.log(filterKey, ':\t', filterValue)
        // }

        // const tempArrForFilter = sourceData.filter((item) => {

        //     for (let [filterKey, filterValue] of Object.entries(activeFilters)){
        //         // console.log(filterKey,':\t',filterValue)
        //         if (filterValue.length>0){
        //             // console.log(filterValue, item[filterKey])
        //             // console.log('check-',item[filterKey],':\t',filterValue.indexOf(item[filterKey]) != -1)
        //             if (filterValue.indexOf(item[filterKey]) == -1){
        //                 return false;
        //             }
        //             // return filterValue.indexOf(item[filterKey]) != -1
        //         }
        //         // else {
        //         //     // console.log(filterKey, '-filter is empty')
        //         //     return true;
        //         // }
        //     }
        //     return true;
        // }).slice();


        // *******************ТЕСТ ФИЛЬТРАЦИИ*******************
        // console.log('before sort', sourceData.length)
        // console.log(filters)
        // console.log('after sort ', sourceData
        //     .filter((item) => {

        //         for (let [filterKey, filterValue] of Object.entries(filters)) {
        //             // console.log(filterKey,':\t',filterValue)
        //             if (filterValue.length > 0) {
        //                 // console.log(filterValue, item[filterKey])
        //                 // console.log('check-',item[filterKey],':\t',filterValue.indexOf(item[filterKey]) != -1)
        //                 if (filterValue.indexOf(item[filterKey]) == -1) {
        //                     return false;
        //                 }
        //                 // return filterValue.indexOf(item[filterKey]) != -1
        //             }
        //             // else {
        //             //     // console.log(filterKey, '-filter is empty')
        //             //     return true;
        //             // }
        //         }
        //         return true;
        //     })
        //     .sort(Sorters.find((element, index, array) => {
        //         return element.id == selectedSorter;
        //     }).compareFunction).length)
        // // *******************ТЕСТ ФИЛЬТРАЦИИ*******************


        setNonshownData(
            sourceData
            .filter((item) => {

            for (let [filterKey, filterValue] of Object.entries(filters)){
                // console.log(filterKey,':\t',filterValue)
                if (filterValue.length>0){
                    // console.log(filterValue, item[filterKey])
                    // console.log('check-',item[filterKey],':\t',filterValue.indexOf(item[filterKey]) != -1)
                    if (filterValue.indexOf(item[filterKey]) == -1){
                        return false;
                    }
                    // return filterValue.indexOf(item[filterKey]) != -1
                }
                // else {
                //     // console.log(filterKey, '-filter is empty')
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
                // console.log(filterKey,':\t',filterValue)
                if (filterValue.length>0){
                    // console.log(filterValue, item[filterKey])
                    // console.log('check-',item[filterKey],':\t',filterValue.indexOf(item[filterKey]) != -1)
                    if (filterValue.indexOf(item[filterKey]) == -1){
                        return false;
                    }
                    // return filterValue.indexOf(item[filterKey]) != -1
                }
                // else {
                //     // console.log(filterKey, '-filter is empty')
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
        // console.log('temp len = ',tempArrForFilter.length);

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
        // console.log('shown_data',shownData.slice());

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