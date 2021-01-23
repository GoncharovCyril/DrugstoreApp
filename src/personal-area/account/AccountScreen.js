import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ActivityIndicator, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import AccountInfo from './account-info/AccountInfo';

import {getUser} from '../../requests/AccountRequests'; 
import {delAllCart, postCart} from '../../requests/BasketRequests'

import { colorOrange } from '../../Colors';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({

});


const synchronizeBaskets = async(products, token) =>{

    await delAllCart(token);

    for (let [key, value] of products){
        await postCart(key, value, token);
    }
}

const AccountScreen = ({ navigation, route }) => {

    const [isLoading, setLoading] = React.useState(true);
    const [accountData, setAccountData] = React.useState({});
    const storedToken = useSelector(state => state.appStore.account.token)
    const storedProducts = useSelector(state => state.appStore.products);

    useFocusEffect(
        React.useCallback(() => {
            const loadScreen = async() => {
                getUser(storedToken)
                .then(async ([status, json]) => {
                    switch (status) {
                        case 401:
                            navigation.navigate("PhoneNumberScreen");
                            break;

                        case 200:
                            setAccountData(json);


                            await synchronizeBaskets(storedProducts, storedToken);




                            //!!! СИНХРОНИЗАЦИЯ ЛОКАЛЬНОЙ КОРЗИНЫ С СЕРВЕРНОЙ






                            
                            
                            
                            
                            
                            setLoading(false);
                            break;
                        default:
                            alert(`${status}:\n${json}`);
                    }
                })

            }
            loadScreen();
            
        }, [storedToken])
    );

    return (
        <View style={{ justifyContent: 'center', alignItems: 'stretch', flex: 1, width: '100%' }}>
            {
                isLoading ?
                    <ActivityIndicator color={colorOrange} size='large' />
                    : <AccountInfo navigation={navigation} accountData={accountData} />
            }
        </View>
    );
};


export default AccountScreen;
