import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import {TabActions } from '@react-navigation/native'


import MainButton from './MainButton';
import { colorLightGrey, colorOrange } from '../Colors';

import CatalogIcon from '../../svg/list-ul-solid';
import PlusSolid from '../../svg/plus-solid';
import CommentMedicalSolid from '../../svg/comment-medical-solid';
import VirusSolid from '../../svg/virus-solid';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'stretch',
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: '40%',
        marginBottom: '50%',
    },
});


const MainScreen = ({ navigation }) => {
    const jumpToCatalog = TabActions.jumpTo('Catalog', {});
    return (
        <View style={{flex: 1,
        backgroundColor: colorLightGrey,
        alignItems: 'center',
        justifyContent: 'center'}}>
        <View style={styles.container}>
            <MainButton 
                title="Как сделать заказ"
                icon={<PlusSolid color={colorOrange} />}
                onPress={()=> {
                    navigation.navigate('OrderHelpScreen')       
                }} 
            />
            <MainButton 
                title="Каталог"
                icon={<CatalogIcon color={colorOrange} />}
                onPress={()=>{
                    navigation.dispatch(jumpToCatalog);
                }}
            />
            <MainButton 
                title="Обратная связь" 
                icon={<CommentMedicalSolid color={colorOrange} />}
                onPress={()=>{
                    navigation.navigate('CallbackScreen')
                }}
            />
            {
            //     <MainButton 
            //     title="Акции" 
            // />
            
            //     <MainButton 
            //     title="Новинки" 
            // />
            }
            <MainButton 
                title="COVID-2019" 
                icon={<VirusSolid color={colorOrange} />}
            />

        </ View>
        </View>
    );
};

export default MainScreen;
