import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Animated, Button } from 'react-native';

const styles = StyleSheet.create({
   
});

const AccountScreen = ({navigation, route}) => {
    // const [phone, setPhone] = React.useState(route.params.phone)

    const account = route.params.account;

    return (
        <View style={{justifyContent: 'center', alignItems: 'stretch'}}>
            {
                Object.entries(account).map(([key, value]) => {
                    return (<Text>{key}:   {value}</Text>)
                })
            }
        </View>
    );
};


export default AccountScreen;
