import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { headerStyles, smallHeight, searchHeigt, shopHeight } from "../navigationHeadStyles";
import { colorOrange, colorDarkGrey, colorLightYellow } from '../Colors';


import { SET_SHOP } from '../redux/types';

import PlusSolid from '../../svg/rounds/plus-solid-round';
import ShevronRightSolid from '../../svg/chevron-right-solid';


const headStyles = StyleSheet.create({
    drugstorePickerContainer: {
        flexDirection: 'row',
        backgroundColor: colorLightYellow,
        // flex: 3,
        height: shopHeight,
    },
    drugstorePicker: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        flex: 1,
    },
    drugstorePicked: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1,
    },
});



const Space = (props) => {
    return (
        <View style={{ width: props.width, height: props.height }} />
    );
};

const EmptyShop = ({ navigation, route }) => {
    return (
        <TouchableOpacity style={headStyles.drugstorePickerContainer}
            onPress={() => {
                navigation.navigate('ShopsListScreen', {baseRouteName: route.name});
            }}
        >
            <View style={headStyles.drugstorePicker}>
                <Space width="3%" />
                <View style={{ height: '45%', justifyContent: "center", alignSelf: "center" }}>
                    <PlusSolid color="white" />
                </ View>
                <Space width="3%" />
                <Text style={{ flex: 8, alignSelf: 'center', justifyContent: 'center', color: colorDarkGrey, fontSize: 16 }}>Выберите аптеку, чтобы искать товары только в ней</Text>
                <View style={{ height: '30%', justifyContent: "center", alignSelf: 'center', }}>
                    <ShevronRightSolid color={colorOrange} />
                </ View>
                <Space width="3%" />
            </View>
        </TouchableOpacity>
    )
};

const Shop = ({ navigation, shop, route }) => {

    const dispatch = useDispatch();

    const setNoShop = React.useCallback(()=> {
        dispatch({ type: SET_SHOP, payload: {id: null, address: null } });
        // navigation.navigate(route.name);
    }, [dispatch])

    return (
        <TouchableOpacity style={headStyles.drugstorePickerContainer}
            onPress={() => {
                console.log(route['name'])
                navigation.navigate('ShopsListScreen', {baseRouteName: route.name});
            }}
        >
            <View style={headStyles.drugstorePicked}>
                <View style={{ flex: 10 }} />
                <View>
                    <Text style={{
                        color: colorDarkGrey,
                        fontSize: 16,
                        textAlign: 'center'
                    }}>Выбрана аптека по адресу</Text>
                    <Text style={{
                        color: colorDarkGrey,
                        fontSize: 17,
                        fontWeight: 'bold', 
                        textAlign: 'center'}}>{shop}</Text>
                </View>

                <View style={{ flex: 10, alignItems: 'flex-end'}}>
                    <TouchableOpacity style={{marginRight: "15%", marginTop: -5}} onPress={setNoShop}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>X</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </TouchableOpacity>
    )
}

const ShopHead = ({ navigation, route }) => {

    const selectedShop = useSelector(state => state.appStore.shop.id);
    const selectedShopAddress = useSelector(state => state.appStore.shop.address);

    return (
        selectedShop != null ? <Shop route={route} navigation={navigation} shop={selectedShopAddress} /> : <EmptyShop route={route} navigation={navigation} />
    );
};


export default ShopHead;
