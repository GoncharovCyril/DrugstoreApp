import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_ALL_PRODUCTS } from '../redux/types';
import { StyleSheet, View, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import TrashButton from "./TrashButton";
import BackButton from '../BackButton';
import TitleHead from '../header/TitleHead';

import { headerStyles, smallHeight, searchHeigt } from "../navigationHeadStyles";

const headStyles = StyleSheet.create({
    headContainer: {
        flex: 3,
        justifyContent: 'center',
    },
});


//orange
const colorO="rgba(236,111,39,1.0)";
//green
const colorG='#4db141';

const ConfirmDelete = (dispatch) => {
    // const dispatch = useDispatch();

    
}


const Header = ({navigation, backButton, trashButton}) => {
    return (
        <View style={headStyles.headContainer}>
            <LinearGradient
                colors={[colorO, 'white']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: smallHeight,
                }}
            />
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
