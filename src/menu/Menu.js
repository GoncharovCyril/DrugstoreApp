import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './MenuHeader';

import MapMarketAltSolid from '../../svg/map-market-alt-solid';
import ShevronRightSolid from '../../svg/chevron-right-solid';
import CommentMedicalSolid from '../../svg/comment-medical-solid';
import VkBrandsRound from '../../svg/rounds/vk-brands-round';
import TelegramPlaneBrandsRound from '../../svg/rounds/telegram-plane-brands-round';
import OdnoklassnikiBrandsRound from '../../svg/rounds/odnoklassniki-brands-round';
import InstagramBrandsRound from '../../svg/rounds/instagram-brands-round';

const menuStyles = StyleSheet.create({
    cityPicker: {
        flex: 167,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
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
    roundButtonsContainer: {
        flex: 81,
        flexDirection: 'row'
    },
});


const CityPicker = () => {
    return (
        <TouchableOpacity style={menuStyles.cityPicker}>
            <View style={{flex: 32}} />
            <View style={{
                flex: 46,
                }}>
                <MapMarketAltSolid color="rgba(236,111,39,1.0)" />
            </ View>
            <View style={{flex: 23}} />

            <View style={{flex: 670}}>
                <Text style={{color: 'rgb(106,106,106)', fontSize: 16}}>Донецк</Text>
            </View>
            <View style={{flex: 30}}>
                <ShevronRightSolid color="rgba(236,111,39,1.0)" />
            </ View>
            <View style={{flex: 25}} />
        </TouchableOpacity>
    );
};

const MenuButton = (props) => {
    return(
        <TouchableOpacity
            style={menuStyles.menuButton}
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
            style={menuStyles.menuButton}
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
    return (
        <View style={menuStyles.buttonsContainer}>
            <MenuButton
                text="Личный кабинет"
                onPress={()=>{
                }}
            />
            <View style={menuStyles.menuSpace} />
            <MenuButton
                text="Заказы"
                onPress={()=>{
                }}
            />
            <View style={menuStyles.menuSpace} />
            <MenuButton
                text="Акции"
                onPress={()=>{
                }}
            />
            <View style={menuStyles.menuSpace} />
            <MenuButton
                text="Оставьте отзыв"
                onPress={()=>{
                }}
            />
            <View style={menuStyles.menuSpace} />
            <MenuButtonConnect
                text="Обратная связь"
                onPress={()=>{
                }}
            />
        </View>
    );
};

const RoundButtons = ({navigation}) => {
    return (
        <View style={menuStyles.roundButtonsContainer}>
            <View style={{flex: 32}} />
            <TouchableOpacity style={{flex: 81}} >
                <VkBrandsRound color="white" roundColor="rgb(226,94,18)" shadowColor="rgb(97,167,38)"/>
            </ TouchableOpacity>
            <View style={{flex: 32}} />
            <TouchableOpacity style={{flex: 81}} >
                <TelegramPlaneBrandsRound color="white"  roundColor="rgb(226,94,18)" shadowColor="rgb(97,167,38)"/>
            </ TouchableOpacity>
            <View style={{flex: 32}} />
            <TouchableOpacity style={{flex: 81}} >
                <OdnoklassnikiBrandsRound color="white"  roundColor="rgb(226,94,18)" shadowColor="rgb(97,167,38)"/>
            </ TouchableOpacity>
            <View style={{flex: 32}} />
            <TouchableOpacity style={{flex: 81}} >
                <InstagramBrandsRound color="white"  roundColor="rgb(226,94,18)" shadowColor="rgb(97,167,38)"/>
            </ TouchableOpacity>
            <View style={{flex: 375}} />
        </View>
    );
};


const MenuScreen = ({navigation}) => {
    return (
        <View style={{
            justifyContent: 'flex-start',
            width: '100%',
            flex:1,
        }}>
            <View style={{flex:1390, backgroundColor: 'rgb(240,240,240)'}}>
                <CityPicker />
                <View style={{flex: 60}} />
                <MenuButtons />
                <View style={{flex: 39}} />
                <RoundButtons />
                <View style={{flex:370}} />
            </ View>
        </View>
    );
};


const MenuStack = createStackNavigator();

const Menu = () => {
    return(
            <MenuStack.Navigator initialRouteName="MenuScreen">
                <MenuStack.Screen name="MenuScreen" component={MenuScreen} options={Header}/>
            </MenuStack.Navigator>
    );
};


export default Menu;
