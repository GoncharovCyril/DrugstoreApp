import React from 'react';
import { StyleSheet, View, Alert, Keyboard } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, login, sendVerificationCode } from '../../requests/AccountRequests';

import { SET_TOKEN } from '../../redux/types';

import {colorDarkGrey} from '../../Colors'

import AcceptButton from '../../AcceptButton';
import CancelButton from '../../CancelButton';

const buttonHeight = 45;
const textInputHeight = 50;
const spaceHeight = 2;

const styles = StyleSheet.create({
    container: {
        height: textInputHeight + buttonHeight + buttonHeight + spaceHeight,
        marginLeft: '5%',
        marginRight: '5%'
    },
    goodTextInput: {
        flex: 1,
        marginBottom: '2%',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: colorDarkGrey,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 18,
        color: colorDarkGrey,
    },
    badTextInput: {
        flex: 1,
        marginBottom: '2%',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'red',
        backgroundColor: 'white',
        color: colorDarkGrey,
        textAlign: 'center',
        fontSize: 18,
    },
    acceptButton: {
        height: buttonHeight
    },
    cancelButton: {
        height: buttonHeight
    },
});

const VerificationCodeScreen = ({ navigation, route }) => {
    // const [phone, setPhone] = React.useState(route.params.phone)
    const phone = useSelector(state => state.appStore.account.phone);
    const [vcode, setVcode] = React.useState("");

    const dispatch = useDispatch();

    const authorize = React.useCallback(() => {
        if(vcode.length > 0){
            login(phone, vcode)
            .then(([status, json]) => {
                switch (status) {
                    case 401:
                        Alert.alert(
                            "Ошибка",
                            "Введен неверный код подтверждения",
                            [],
                            {cancelable: true}
                        )
                        break;
                    case 415:
                            Alert.alert(
                                "Ошибка",
                                "Номер должен состоять из 4 цифр",
                                [],
                                {cancelable: true}
                            )
                            break;
                    case 202:
                        dispatch({ type: SET_TOKEN, payload: { token: json.token } });
                        Keyboard.dismiss();
                        navigation.navigate("AccountScreen");

                        // getUser(json.token)
                        //     .then(([status, json]) => {
                        //         switch (status) {
                        //             case 200:
                        //                 // alert(status,'\n',JSON.stringify(json));
                        //                 navigation.navigate("AccountScreen");
                        //                 break;
                        //             default:
                        //                 alert(status);
                        //                 alert(JSON.stringify(json));
                        //                 break;
                        //         }
                        //     })
                        //             getUser(json.token, navigation);
                        break;

                    default:
                        alert(status);
                        alert(JSON.stringify(json));
                        break;
                }



            });
        } else {
            console.log(vcode)
            Alert.alert(
                "Внимание",
                "Для подтверждения введите код",
                [],
                {cancelable: true}
            )
        }
        

    }, [dispatch, vcode]);


    const getVerificationCode = React.useCallback(() => {
        sendVerificationCode(phone)
            .then(([status, json]) => {
                switch (status) {
                    case 202:
                        // dispatch({ type: SET_PHONE, payload: { phone: phone } });
                        // Keyboard.dismiss();
                        // navigation.navigate('VerificationCodeScreen');
                        Alert.alert(
                            "",
                            "Код подтверждения успешно отправлен",
                            [

                            ],
                            { cancelable: true }
                        )
                        break;
                    case 415: 
                        Alert.alert(
                            "Внимание",
                            "Номер должен состоять из 12 цифр",
                            [

                            ],
                            { cancelable: true }
                        )
                        break;
                    default:
                        alert(`${status}\n${JSON.stringify(json)}`)
                        break;
                }
            })      
    }, [dispatch, phone]);




    return (

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
            <View style={styles.container}>
            <TextInput 
                style={vcode.length > 0 ? styles.goodTextInput : styles.badTextInput} 
                value={vcode}
                keyboardType='number-pad'                
                onChangeText={text => setVcode(text)}
                maxLength={4}
                placeholder="Введите код подтверждения"
            />
                <View style={styles.acceptButton}>
                    <AcceptButton title="Подтвердить" onPress={authorize} />
                </View>      
                <View style={{height: spaceHeight}} /> 

                <View style={styles.cancelButton}>
                    <CancelButton title="Отправить код подтверждения повторно" onPress={getVerificationCode} />
                </View>   
            </View>  
        </View>
    );
};


export default VerificationCodeScreen;
