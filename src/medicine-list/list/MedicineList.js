// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

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

const MedicineList = ({ route, navigation, setLoading, sourceData }) => {


    const [refreshing, setRefreshing] = React.useState(false);
    const [shownData, setShownData] = React.useState([])
    const [bottom, setBottom] = React.useState(undefined);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [selectedSorter, setSelectedSorter] = React.useState(3)

    let dataCopy = sourceData;

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


        if (shownData.length < dataCopy.length) {
            setRefreshing(true);
            setBottom(<Footer />)

            setShownData(shownData.concat(dataCopy.slice(shownData.length, shownData.length + 1)));
            // console.log(shownData.length)

            setBottom(undefined);
            setRefreshing(false)
        }

    }, [refreshing, bottom, shownData]);


    const dispatch = useDispatch();


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
        />
    );

    useFocusEffect(React.useCallback(() => {
        console.log(dataCopy.length);
        // setShownData([])
        setRefreshing(false);
        setLoading(true)

        dataCopy.sort(Sorters.find((element, index, array)=> {
            return element.id  == selectedSorter;
        }).compareFunction);

        setShownData(dataCopy.slice(0, 10));
        setLoading(false);


    }, []))

    const sortData = (sortId, sortFunction) => {
        setRefreshing(false);
        setModalVisible(false);
        setLoading(true)
        setSelectedSorter(sortId);
        dataCopy.sort(sortFunction);
        setShownData(dataCopy.slice(0, 10));
        setLoading(false);
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
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { }}>
                <Text style={{ fontSize: 15, color: colorDarkGrey }}>Фильтр  </Text>
                <View style={{ height: 12, alignSelf: 'center' }}>
                    <FilterSolid color={colorDarkGrey} />
                </View>
            </TouchableOpacity>
        </View>
    );


    return (
        shownData.length > 0 ?
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
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                        refreshing={refreshing}
                        onEndReached={onRefresh}
                        onEndReachedThreshold={1}
                    />
                </SafeAreaView>
            </View>
            : <View />
    );
};


export default MedicineList;