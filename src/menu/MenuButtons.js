import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import {colorOrange} from '../Colors';


import ShevronRightSolid from '../../svg/chevron-right-solid';
import CommentMedicalSolid from '../../svg/comment-medical-solid';
import { getUser } from '../requests/AccountRequests';

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 768,
    },
    menuButton: {
        flex: 115,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    menuSpace: {
        // flex: 2
        height: 1
    },
});


const MenuButton = (props) => {
    return(
        <TouchableOpacity
            style={styles.menuButton}
            onPress={props.onPress}
        >
            <View style={{flex: 32}} />
            <View style={{flex: 741}}>
                <Text style={{fontSize: 16}}>{props.text}</Text>
            </ View>
            <View style={{flex: 30}}>
                <ShevronRightSolid color={colorOrange} />
            </ View>
            <View style={{flex: 25}} />
        </ TouchableOpacity>
    );
};

const MenuButtonConnect = (props) => {
    return(
        <TouchableOpacity
            style={styles.menuButton}
            onPress={props.onPress}
        >
            <View style={{flex: 26}} />
            <View style={{flex: 48}} >
                <CommentMedicalSolid color={colorOrange} />
            </View>
            <View style={{flex: 17}} />
            <View style={{flex: 682}}>
                <Text style={{fontSize: 16}}>{props.text}</Text>
            </ View>
            <View style={{flex: 30}}>
                <ShevronRightSolid color={colorOrange} />
            </ View>
            <View style={{flex: 25}} />
        </ TouchableOpacity>
    );
};



const MenuButtons = ({navigation}) => {

    const storeToken = useSelector(state => state.appStore.account.token);

    return (
        <View style={styles.buttonsContainer}>
            <MenuButton
                text="Личный кабинет"
                // text={storeToken}
                onPress={()=>{
                    // navigation.navigate("OrdersScreen");
                    // test();

                    // sendVerificationCode("380713344850");
                    // login("380713344850","1249")
                    
                    getUser(storeToken)
                    .then(([status, json]) => {
                        switch (status){
                            case 401:
                                navigation.navigate("PhoneNumberScreen");
                                break; 
                
                            case 200:
                                navigation.navigate("AccountScreen", {
                                    account: json
                                });
                                break;
                            default:
                                alert(`${status}:\n${json}`);
                        }
                    })
                    // navigation.navigate("PersonalAreaScreen");
                }}
            />
            <View style={styles.menuSpace} />
            <MenuButton
                text="Заказы"
                onPress={()=>{
                    navigation.navigate("OrdersScreen");
                    // // test();

                    // // sendVerificationCode("380713344850");
                    // const token = "ms19xnq5fjRfExesDacgPCDqL3fhY2VDp3EpmulZ9gSKK7aRtaJcUPLxFigQPyz6q6YLN8mHMzP7qXXx6BdN9WUOYpxfzDBxTHSyIeMt1IaJPucJymw9uLO0aPpErvu0N66CVgIOWrHY8eo2RZVJ7KMJGtqfnLlSmN0Rwqgv0zYhrBn3GMcBtlgfIAkyuCvj3HEu6hoJVOcIZiSoO0pGuHQV5KZTRk06uwySSw0cJpjtXTkmmjYc10mClqywTZz"
                    // // login("380713344850","1249")
                    // getUser(token);
                    
                }}
            />
            <View style={styles.menuSpace} />
            <MenuButton
                text="Акции"
                onPress={()=>{
                    navigation.navigate("PromotionsScreen");
                }}
            />
            <View style={styles.menuSpace} />
            <MenuButton
                text="Оставьте отзыв"
                onPress={()=>{
                    navigation.navigate("ReviewScreen");
                }}
            />
            <View style={styles.menuSpace} />
            <MenuButtonConnect
                text="Обратная связь"
                onPress={()=>{
                    navigation.navigate("CallbackScreen");
                }}
            />
        </View>
    );
};


export default MenuButtons;