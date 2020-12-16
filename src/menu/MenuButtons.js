import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';


import ShevronRightSolid from '../../svg/chevron-right-solid';
import CommentMedicalSolid from '../../svg/comment-medical-solid';
import { SET_TOCKEN } from '../redux/types';

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
                <ShevronRightSolid color="rgba(236,111,39,1.0)" />
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
                <CommentMedicalSolid color="rgba(236,111,39,1.0)" />
            </View>
            <View style={{flex: 17}} />
            <View style={{flex: 682}}>
                <Text style={{fontSize: 16}}>{props.text}</Text>
            </ View>
            <View style={{flex: 30}}>
                <ShevronRightSolid color="rgba(236,111,39,1.0)" />
            </ View>
            <View style={{flex: 25}} />
        </ TouchableOpacity>
    );
};



const MenuButtons = ({navigation}) => {

    const appStore = useSelector(state => state.appStore);
    const dispatch = useDispatch();

    return (
        <View style={styles.buttonsContainer}>
            <MenuButton
                // text="Личный кабинет"
                text={appStore.account.tocken}
                onPress={()=>{
                    dispatch({ type: SET_TOCKEN, payload: {tocken: "tocken"} });
                    // navigation.navigate("PersonalAreaScreen");
                }}
            />
            <View style={styles.menuSpace} />
            <MenuButton
                text="Заказы"
                onPress={()=>{
                    navigation.navigate("OrdersScreen");
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