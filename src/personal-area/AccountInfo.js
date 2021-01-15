import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ActivityIndicator, Button } from 'react-native';

const styles = StyleSheet.create({
   
});

const AccountInfo = ({navigation, accountData}) => {
    // const [phone, setPhone] = React.useState(route.params.phone)

    // const account = route.params.account;


    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                {JSON.stringify(accountData)}
            </Text>

        </View>
    );
};


export default AccountInfo;
