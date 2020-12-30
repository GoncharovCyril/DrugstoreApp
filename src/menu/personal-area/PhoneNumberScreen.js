import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { sendVerificationCode } from '../../requests/AccountRequests';

const styles = StyleSheet.create({
   
});

const PersonalAreaScreen = ({navigation}) => {
    const [phone, setPhone] = React.useState("380713344850")
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
                onPress={() => {
                    sendVerificationCode(phone)
                    .then(([status, json]) => {
                        switch (status) {
                            case 202:
                                navigation.navigate('VerificationCodeScreen', {
                                    "phone": phone
                                });
                                break;
                            default:
                                break;
                        }
                    });
                }}
            />
        </View>
    );
};


export default PersonalAreaScreen;
