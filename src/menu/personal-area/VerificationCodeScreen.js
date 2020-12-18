import React, {useRef, useEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Animated, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { getUser, login, sendVerificationCode } from '../../requests/AccountRequests';

import { SET_TOKEN } from '../../redux/types';

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
                    login(phone, vcode, navigation, dispatch)
                    .then(([status, json]) => {
                        console.log(status, '\t', json);
                        console.log("PHONE=", phone);

                        switch (status) {
                            case 401:
                                alert(status);
                                alert(JSON.stringify(json));
                                break;
                            case 202:
                                dispatch({ type: SET_TOKEN, payload: { token: json.token } });
                                alert(status);
                                alert(JSON.stringify(json));
                                getUser(json.token, navigation)
                                    .then(([status, json]) => {
                                        console.log(status, '\t', json);
                                        switch (status) {
                                            case 200:
                                                console.log("Show acc");
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
