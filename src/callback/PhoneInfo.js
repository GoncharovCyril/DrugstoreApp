import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import {colorDarkGrey, colorGreen, colorOrange} from '../Colors';

const styles = StyleSheet.create({

    phoneInfoContainer: {
        flex: 1,
        marginTop: '2%',
        marginLeft: '3%',
        marginRight: '3%'
    },
    topContainer: {
        flex: 3,
        justifyContent: 'center'
    },
    middleCintainer: {
        flex: 3,
        justifyContent: 'space-evenly'
    },
    bottomContainer: {
        flex: 2,
        justifyContent: 'center'
    },
    phoneText: {
        color: colorGreen,
        fontSize: 16
    },
    infoText: {
        color: colorDarkGrey,
        fontSize: 16
    },
    headerText: {
        color: colorDarkGrey,
        fontSize: 20
    },  
});

const phone1 = `+38 062 203-03-45`;
const phone2 = `+38 071 378-68-00`;
const phone3 = `+38 095 280-49-82`;

const PhoneInfo = ({ navigation }) => {
    return (
        <View style={styles.phoneInfoContainer}>
            <View style={styles.topContainer}>
                <Text numberOfLines={1} style={styles.headerText}>КАК ЗАКАЗАТЬ?</Text>
                <Text numberOfLines={3} style={styles.infoText}>{`Вы можете оформить заказ с понедельника по пятницу с 8 до 17 часов по телефонам:`}</Text>
            </View>

            <View style={styles.middleCintainer}>
                <Text numberOfLines={1} style={styles.phoneText}>{phone1}</Text>
                <Text numberOfLines={1} style={styles.phoneText}>{phone2}</Text>
                <Text numberOfLines={1} style={styles.phoneText}>{phone3}</Text>
            </View>

            <View style={styles.bottomContainer}>
                <Text numberOfLines={3} style={styles.infoText}>{`Наш оператор предоставит Вам всю необходимую информацию.`}</Text>
            </View>

            

        </View>
    );
};

export default PhoneInfo;