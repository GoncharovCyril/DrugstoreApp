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
    const phone = "380713344850";
    const [vcode, setVcode] = React.useState("6666");

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

                        switch (status) {
                            case 401:
                                
                                break;

                            case 202:
                                dispatch({ type: SET_TOKEN, payload: { token: json.token } });

                                getUser(json.token, navigation)
                                    .then(([status, json]) => {
                                        console.log(status, '\t', json);
                                        switch (status) {
                                            case 200:
                                                console.log("Show acc");
                                                navigation.navigate("AccountScreen", {
                                                    account: json
                                                });
                                                break;
                                            default:
                                                alert(`${status}:\n${json}`);
                                        }
                                    })

        //             getUser(json.token, navigation);
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


export default VerificationCodeScreen;
