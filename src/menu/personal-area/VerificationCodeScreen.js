import React, {useRef, useEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Animated, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { getUser, login, sendVerificationCode } from '../../requests/AccountRequests';

const styles = StyleSheet.create({
   
});

const VerificationCodeScreen = ({navigation, route}) => {
    // const [phone, setPhone] = React.useState(route.params.phone)
    const phone = "380713344850";
    const [vcode, setVcode] = React.useState("6666");

    const dispatch = useDispatch();

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TextInput 
                style={{borderWidth: 1, width: 200}} 
                value={vcode}
                onChangeText={text => setVcode(text)}
            />
            <View style={{height: 15}} />
            <Button 
                title="Получить код"
                onPress={() => {
                    login(phone, vcode, navigation, dispatch);
                }}
            />
        </View>
    );
};


export default VerificationCodeScreen;
