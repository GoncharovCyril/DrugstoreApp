import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { colorOrange } from '../../Colors';

import { getPharmacies } from '../../requests/ShopsRequests';
import * as Location from 'expo-location';

const styles = StyleSheet.create({
    headerContainer: {

    },
    shopContainer: {
        backgroundColor: 'white'
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    shopTitleContainer: {
        marginLeft: '3%',
        flexDirection: 'row'
    },
    shopInfoContainer: {
        marginLeft: '3%'
    },
    orderStructureContainer: {
        marginLeft: '3%'
    }
})

const ListHeader = ({ route, navigation }) => {
    const [isLoading, setLoading] = React.useState(true);
    const [shopItem, setShopItem] = React.useState({});

    useFocusEffect(React.useCallback(() => {
        setLoading(true)
        let { status } = await Location.requestPermissionsAsync();
        let location = null;
        if (status === 'granted') {
            location = await Location.getCurrentPositionAsync({});
        } else {
            Alert.alert(
                "Внимание",
                "Аптеки не будут отсортированы по близости к вашему устройству",
                [],
                { cancelable: true }
            )
        }
        
        getPharmacies().then(([status, json])=>{
            switch(status) {
                case 200:
                    setLoading(false)
                    break;
                default:
                    break;
            }
        })
    }, []))

    return (
        isLoading
            ? <ActivityIndicator color={colorOrange} size="large" />
            : <View style={styles.headerContainer}>

                <View style={styles.shopContainer} >
                    <View style={styles.shopTitleContainer}>
                        <Text style={styles.titleText}>Аптека</Text>
                    </View>
                    <View style={styles.shopInfoContainer}>

                    </View>
                </View>
                <View style={styles.orderStructureContainer}>
                    <Text style={styles.titleText}>Состав заказа</Text>
                </View>

            </View>
    )
}

export default ListHeader;