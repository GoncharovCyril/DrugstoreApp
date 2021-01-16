import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Alert, ScrollView, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { colorDarkGrey, colorLightGrey } from '../../../Colors';
import {CLEAR_ALL_PRODUCTS, SET_TOKEN} from '../../../redux/types'

import Avatar from './Avatar';
import RadioButtonGroup from './RadioButtonGroup';
import AcceptButton from '../../AcceptButton';
import CancelButton from '../../CancelButton';


const labelHeight = 50;
const textInputHeight = 50;

const styles = StyleSheet.create({
    avatarContainer: {
        flex: 3,
    },
    avatar: {
        flex: 2.5,
    },
    nameContainer: {
        height: labelHeight + textInputHeight,
    },
    genderContainer: {
        height: labelHeight + textInputHeight * 3,
    },
    birthdayContainer: {
        height: labelHeight + textInputHeight,
    },
    emailContainer: {
        height: labelHeight + textInputHeight,
    },
    phoneContainer: {
        height: labelHeight + textInputHeight,
    },
    buttonsContainer: {
        height: labelHeight+5,
        flexDirection: 'row'
    },
    saveButton: {
        flex: 1,
        marginLeft: '2%'

    },
    logoutButton: {
        flex: 1,
        marginRight: '2%'
    },
    label: {
        flex: 1,
        color: colorDarkGrey,
        marginRight: '5%',
        fontSize: 20,
        textAlignVertical: 'center'

    },
    changebleTextInput: {
        flex: 1,
        marginTop: '2%',
        // marginRight: '5%',
        marginBottom: '2%',
        // marginLeft: '5%',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: colorDarkGrey,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 18,
        color: colorDarkGrey,


    },
    unchangableTextInput: {
        flex: 1,
        marginTop: '2%',
        // marginRight: '5%',
        marginBottom: '2%',
        // marginLeft: '5%',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: colorDarkGrey,
        backgroundColor: colorLightGrey,
        color: colorDarkGrey,
        textAlign: 'center',
        fontSize: 18,


    }

});

const AccountInfo = ({ navigation, accountData }) => {
    // const [phone, setPhone] = React.useState(route.params.phone)

    // const account = route.params.account;


    const [gender, setGender] = React.useState(accountData['gender_id']);
    const [name, setName] = React.useState(accountData['name']);
    const [birthday, setBirthday] = React.useState(accountData['birthday']);
    const [email, setEmail] = React.useState(accountData['email']);


    const genders = [
        'Предпочитаю не указывать',
        'Мужской',
        'Женский'
    ]

    const dispatch = useDispatch();
    //Выход с аккаунта
    const logout = React.useCallback(()=>{
        
        dispatch({ type: CLEAR_ALL_PRODUCTS, payload: {} });
        dispatch({ type: SET_TOKEN, payload: {token: ''} });
    }, [dispatch])



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
            <ScrollView
                contentContainerStyle={{
                    alignItems: 'stretch',
                    backgroundColor: 'white',
                    marginTop: '2%',
                    marginLeft: '5%',
                    marginRight: '5%',
                }}
            >


                {/* <View style={styles.avatarContainer}>
                <Avatar avatar_uri={accountData['avatar']} />
            </View> */}
                <View style={styles.nameContainer}>
                    <Text style={styles.label}>Ваше имя</Text>
                    <TextInput
                        style={styles.changebleTextInput}
                        defaultValue={name}
                        onChangeText={(text) => {
                            setName(text);
                        }}
                    />

                </View>
                <View style={styles.genderContainer}>
                    <Text style={styles.label}>Ваш пол</Text>
                    <View style={{ flex: 3 }}>
                        <RadioButtonGroup data={genders} selectedId={gender} setSelected={setGender} />
                    </View>
                </View>
                <View style={styles.birthdayContainer}>
                    <Text style={styles.label}>Ваша дата рождения</Text>
                    <TextInput
                        style={styles.changebleTextInput}
                        defaultValue={birthday}
                        onChangeText={(text) => {
                            setBirthday(text);
                        }}
                    />
                </View>
                <View style={styles.emailContainer}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.changebleTextInput} keyboardType='email-address'
                        defaultValue={email}
                        onChangeText={(text) => {
                            setEmail(text);
                        }}
                    />
                </View>
                <View style={styles.phoneContainer}>
                    <Text style={styles.label}>Номер телефона</Text>
                    <TextInput
                        style={styles.unchangableTextInput}
                        value={`+${accountData['phone'].slice(0, 2)}(${accountData['phone'].slice(2, 5)})${accountData['phone'].slice(5, 8)}-${accountData['phone'].slice(8, 10)}-${accountData['phone'].slice(10, 12)}`}
                        editable={false}
                    />
                </View>
                <View style={{height: 15}} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.logoutButton}>
                        <CancelButton 
                            title="Выйти с аккаунта"
                            onPress={() => {
                                
                                    return Alert.alert(
                                        '',
                                        'Вы уверены, что хотите выйти с аккаунта?',
                                        [
                                            {
                                                text: 'НЕТ',
                                                onPress: () => {},
                                                style: 'cancel'
                                            },
                                            {
                                                text: 'ДА',
                                                onPress: logout
                                                // !!! кнопка сохранения настроек аккаунта  
                                            },
                                        ],
                                        { cancelable: true }
                                    );
                            }} 
                        />
                    </View>
                    <View style={styles.saveButton}>
                        <AcceptButton 
                            title="Сохранить"
                            onPress={() => { 
                                // !!! кнопка сохранения настроек аккаунта 
                            }} 
                        />
                    </View>


                </View>


            </ScrollView>
        </SafeAreaView>
    );
};


export default AccountInfo;
