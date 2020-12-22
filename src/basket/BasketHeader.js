import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_ALL_PRODUCTS } from '../redux/types';
import { StyleSheet, Text, View, Alert } from 'react-native';

import LittleLogo from '../LittleLogo';

import TrashButton from "./TrashButton";
import BackButton from '../BackButton';
import TitleHead from '../header/TitleHead';

import { headerStyles } from "../navigationHeadStyles";


const headStyles = StyleSheet.create({
    headContainer: {
        flex: 3,
        justifyContent: 'center',
    },
});


const color="rgba(236,111,39,1.0)";

const ConfirmDelete = (dispatch) => {
    // const dispatch = useDispatch();

    
}


const Header = ({navigation, backButton, trashButton}) => {
    return (
        <View style={headStyles.headContainer}>
            <TitleHead backButton={backButton} trashButton={trashButton} title='Корзина'/>
        </View>
    );
};

const mainHeader = {
    headerMode: "screen",
    headerStyle: headerStyles.basketHeader,
    header: ({ scene, previous, navigation }) => {
        const { options } = scene.descriptor;
        const title = options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title
            : scene.route.name;

        const appStore = useSelector(state => state.appStore);
        
        const dispatch = useDispatch();

        return (
            <View style={options.headerStyle} >
                <Header 
                navigation={navigation} 
                backButton={
                    previous ? <BackButton action={navigation.goBack} /> : undefined
                }
                trashButton={
                    appStore.products.size > 0 ? <TrashButton action={() => {
                        return Alert.alert(
                            '',
                            'Вы уверены, что хотите очистить корзину?',
                            [
                                {
                                    text: 'НЕТ',
                                    onPress: () => {},
                                    style: 'cancel'
                                },
                                {
                                    text: 'ДА',
                                    onPress: () => {
                                        console.log("cancel");
                                        dispatch({ type: CLEAR_ALL_PRODUCTS, payload: {} });
                                    }
                                },
                            ],
                            { cancelable: true }
                        );
                    }} /> : undefined
                } />  
            </View>          
        );
    },
};

export default mainHeader;
