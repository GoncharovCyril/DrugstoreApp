import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ActivityIndicator, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import AccountInfo from './AccountInfo';

import {getUser} from '../requests/AccountRequests'; 

import { colorOrange } from '../Colors';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({

});

const AccountScreen = ({ navigation, route }) => {

    const [isLoading, setLoading] = React.useState(true);
    const [accountData, setAccountData] = React.useState({});
    const storedToken = useSelector(state => state.appStore.account.token)

    useFocusEffect(
        React.useCallback(() => {
            getUser(storedToken)
                .then(([status, json]) => {
                    console.log('request')
                    console.log(json);
                    switch (status) {
                        case 401:
                            navigation.navigate("PhoneNumberScreen");
                            break;

                        case 200:
                            console.log(json);
                            console.log('succes')
                            setAccountData(json);
                            break;
                        default:
                            alert(`${status}:\n${json}`);
                    }
                })
                .finally(()=>{
                    setLoading(false);
                })
        }, [storedToken])
    );

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            {
                isLoading ?
                    <ActivityIndicator color={colorOrange} size='large' />
                    : <AccountInfo navigation={navigation} accountData={accountData} />
            }
        </View>
    );
};


export default AccountScreen;
