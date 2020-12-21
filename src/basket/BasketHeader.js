import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_ALL_PRODUCTS } from '../redux/types';
import { StyleSheet, Text, View, Alert } from 'react-native';

import LittleLogo from '../LittleLogo';

import TrashButton from "./TrashButton";
import BackButton from '../BackButton';

import navigationHeadStyle from "../navigationHeadStyles";


const headerStyles = StyleSheet.create({
    headContainer: {
        flex: 3,
        justifyContent: 'center',
    },
    topContainer: {
        flex: 4, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'},
    logoContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 4,
    },
    middleContainer: {
        flex:2,
        flexDirection:'row',
        backgroundColor:'rgba(96,165,38,1.0)',
    },
    searchContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        //alignSelf: 'center',
        flex: 9
    },
    searchInput: {
        backgroundColor: 'rgba(240,240,240,1.0)',
        borderRadius: 20,
        flexDirection:'row',
        flex: 0.94,
    },
    drugstorePickerContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,1.0)',
        flex: 3,
    },
    drugstorePicker: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        flex: 1,
    },
});


const color="rgba(236,111,39,1.0)";

const ConfirmDelete = (dispatch) => {
    // const dispatch = useDispatch();

    
}


const Header = ({navigation, backButton, trashButton}) => {
    return (
        <View style={headerStyles.headContainer}>
            <View style={headerStyles.topContainer}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: 'center' }}>
                        <View style={{ flex: 20 }}>
                            {backButton}
                        </View>
                        <View style={{ flex: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <View style={{ height: 40, width: 40 }}>
                                <LittleLogo />
                            </View>
                            <Text style={{
                                color: 'white',
                                fontSize: 22,
                            }}> Корзина</Text>
                        </View>
                        <View style={{flex:8}} />
                        <View style={{ flex: 7, alignItems: 'center' }} >
                            {trashButton} 
                        </ View>
                        <View style={{flex:5}} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const mainHeader = {
    headerMode: "screen",
    headerStyle: navigationHeadStyle.basketHeader,
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
