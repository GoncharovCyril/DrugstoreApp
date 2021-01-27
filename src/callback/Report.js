import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { getUser } from '../requests/AccountRequests';
import { putContacts } from '../requests/ContactRequests'
import { colorDarkGrey } from '../Colors';

import AcceptButton from '../AcceptButton'


const styles = StyleSheet.create({
    reportContainer: {
        flex: 1,
        marginTop: '2%',
        marginLeft: '3%',
        marginRight: '3%'
    },
    topContainer: {
        flex: 2.5,
    },
    middleContiner: {
        flex: 4.1,
    },
    bottomContainer: {
        flex: 1.4,
    },
    headerText: {
        color: colorDarkGrey,
        fontSize: 20
    },
    infoText: {
        color: colorDarkGrey,
        fontSize: 16
    },
    reportInputContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: colorDarkGrey,
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: '1%',
        marginBottom: '3%',
    },
    reportInput: {
        flex: 1,
        marginTop: '1%',
        marginBottom: '1%',
        marginLeft: '1%',
        marginRight: '1%',
        textAlignVertical: 'top',
        fontSize: 15
    },
    reportInputText: {
        color: colorDarkGrey,
        fontSize: 16
    }

})

const desc = `Хотите задать вопрос, оставить отзыв или поделится проблемой? Напишите нам то, что вам важно сообщить.`

const Report = ({ navigation }) => {

    const storedToken = useSelector(state => state.appStore.account.token);
    const [reportMsg, setReportMsg] = React.useState('');

    const sendMessage = async () => {
        if (reportMsg.length > 0) {
            await getUser(storedToken).then(async([status, json]) => {
                switch (status) {
                    case 200:
                        const name = json['name'] != null ? json['name'] : 'unknown'
                        const phone = json['phone']
                        const email = json['email'] != null ? json['email'] : 'unknown'

                        await putContacts(storedToken, phone, name, email, reportMsg).then((status, text) => {

                            switch(status[0]){
                                case 200:
                                    Alert.alert(
                                        "",
                                        "Сообщение успешно отправлено",
                                        [],
                                        {cancelable: true}
                                    )
                                    setReportMsg('')
                                    break;
                                default:
                                    break;
                            }
                        })

                        break;
                    case 401:
                        Alert.alert(
                            "Не удалось отправить сообщение",
                            "Необходима регистрация",
                            [],
                            {cancelable: true}
                        )
                        break;
                    default:
                        break;
                }
            })
        } else {
            Alert.alert(
                "Внимание",
                "Введите сообщение",
                [],
                {cancelable: true}
            )
        }        
    }

    return (
        <View style={styles.reportContainer}>
            <View style={styles.topContainer}>
                <Text numberOfLines={1} style={styles.headerText}>Оставить отзыв</Text>
                <Text numberOfLines={4} style={styles.infoText}>{desc}</Text>
            </View>
            <View style={styles.middleContiner}>
                <View style={styles.reportInputContainer}>
                    <TextInput
                        multiline={true}
                        style={styles.reportInput}
                        onChangeText={text => {
                            setReportMsg(text);
                        }}
                        value={reportMsg}
                    />

                </View>

            </View>
            <View style={styles.bottomContainer}>
                <AcceptButton
                    title="Отправить"
                    isBig={true}
                    onPress={() => {
                        sendMessage()
                    }}
                />
            </View>
        </View>
    )
}

export default Report