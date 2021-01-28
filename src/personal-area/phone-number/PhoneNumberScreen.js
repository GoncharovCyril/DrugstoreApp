import React from 'react';
import { StyleSheet, View, Alert, Keyboard } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { SET_PHONE } from '../../redux/types';

import {colorDarkGrey} from '../../Colors'
import { sendVerificationCode } from '../../requests/AccountRequests';

import AcceptButton from '../../AcceptButton';
import CancelButton from '../../CancelButton';

const labelHeight = 45;
const textInputHeight = 50;

const styles = StyleSheet.create({
    container: {
        height: labelHeight + textInputHeight,
        marginLeft: '5%',
        marginRight: '5%'
    },
    buttonsContainer: {
        height: labelHeight,
        flexDirection: 'row'
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
        flex: 1,
        marginLeft: '2%'
    },
    cancelButton: {
        flex: 1,
        marginRight: '2%'
    },
});

const PhoneNumberScreen = ({route, navigation}) => {
    const [phone, setPhone] = React.useState("380713344850")

    const dispatch = useDispatch();

    const getVerificationCode = React.useCallback(() => {
        if(phone.length>0){
            sendVerificationCode(phone)
            .then(([status, json]) => {
                switch (status) {
                    case 202:
                        dispatch({ type: SET_PHONE, payload: { phone: phone } });
                        Keyboard.dismiss();
                        navigation.navigate('VerificationCodeScreen');
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
        } else {
            Alert.alert(
                "Внимание",
                "Для получения кода введите номер телефона",
                [],
                {cancelable: true}
            )
        }
        
        
    }, [dispatch, phone]);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
            <View style={styles.container}>
            <TextInput 
                style={phone.length > 0 ? styles.goodTextInput : styles.badTextInput} 
                value={phone}
                keyboardType='phone-pad'
                onChangeText={text => setPhone(text)}
                maxLength={12}
                placeholder="Введите номер телефона"
            />
            <View style={styles.buttonsContainer}>
                {/* <View style={styles.cancelButton}>
                    <CancelButton title="Отмена" onPress={()=>{
                        navigation.navigate(route.params['baseRouteName'])
                    }} />
                </View> */}
                <View style={styles.acceptButton}>
                    <AcceptButton title="Подтвердить" onPress={getVerificationCode} />
                </View>   
            </View>
            
            </View>
            
        </View>
    );
};


export default PhoneNumberScreen;
