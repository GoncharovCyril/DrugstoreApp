import React, {useRef, useEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Animated, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { getUser, login, sendVerificationCode } from '../../requests/AccountRequests';

const styles = StyleSheet.create({
   
});

const AccountScreen = ({navigation, route}) => {
    // const [phone, setPhone] = React.useState(route.params.phone)
    const phone = "380713344850";
    const [vcode, setVcode] = React.useState("6866");

    const account = route.params.account;
    console.log(account);

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
