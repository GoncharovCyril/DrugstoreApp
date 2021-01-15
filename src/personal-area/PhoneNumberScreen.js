import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { SET_PHONE } from '../redux/types';

import { sendVerificationCode } from '../requests/AccountRequests';

const styles = StyleSheet.create({
   
});

const PersonalAreaScreen = ({navigation}) => {
    const [phone, setPhone] = React.useState("380713344850")

    const dispatch = useDispatch();

    const getVerificationCode = React.useCallback(() => {
        sendVerificationCode(phone)
            .then(([status, json]) => {
                switch (status) {
                    case 202:
                        dispatch({ type: SET_PHONE, payload: { phone: phone } });
                        navigation.navigate('VerificationCodeScreen');
                        break;
                    default:
                        alert(`${status}\n${JSON.stringify(json)}`)
                        break;
                }
            })
        
    }, [dispatch]);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TextInput 
                style={{borderWidth: 1, width: 200}} 
                value={phone}
                keyboardType='phone-pad'
                onChangeText={text => setPhone(text)}
            />
            <View style={{height: 15}} />
            <Button 
                title="Получить код"
                onPress={getVerificationCode}
            />
        </View>
    );
};


export default PersonalAreaScreen;
