import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { getUser, login } from '../requests/AccountRequests';

import { SET_TOKEN } from '../redux/types';

const styles = StyleSheet.create({
   
});

const VerificationCodeScreen = ({navigation, route}) => {
    // const [phone, setPhone] = React.useState(route.params.phone)
    const phone = route.params.phone;
    const [vcode, setVcode] = React.useState("");

    const dispatch = useDispatch();

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TextInput 
                style={{borderWidth: 1, width: 200}} 
                value={vcode}
                keyboardType='number-pad'
                onChangeText={text => setVcode(text)}
            />
            <View style={{height: 15}} />
            <Button 
                title="Получить код"
                onPress={() => {
                    login(phone, vcode)
                    .then(([status, json]) => {
                        switch (status) {
                            case 401:
                                alert(status);
                                alert(JSON.stringify(json));
                                break;
                            case 202:
                                dispatch({ type: SET_TOKEN, payload: { token: json.token } });
                                alert(status);
                                alert(JSON.stringify(json));
                                getUser(json.token)
                                    .then(([status, json]) => {
                                        switch (status) {
                                            case 200:
                                                alert(status,'\n',JSON.stringify(json));
                                                navigation.navigate("AccountScreen", {
                                                    account: json
                                                });
                                                break;
                                            default:
                                                alert(status);
                                                alert(JSON.stringify(json));
                                                break;
                                        }
                                    })
        //             getUser(json.token, navigation);
                                break;

                            default:
                                alert(status);
                                alert(JSON.stringify(json));
                                break;
                        }



                    });
                }}
            />
        </View>
    );
};


export default VerificationCodeScreen;
