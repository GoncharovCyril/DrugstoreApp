import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
        flex: 115,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonsContainer: {
        flex: 583,
    },
    menuButton: {
        flex: 115,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    menuSpace: {
        flex: 2
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
            <View style={{flex: 36}}>
                <MapMarketAltSolid color="rgba(236,111,39,1.0)" />
            </ View>
            <View style={{flex: 23}} />

            <View style={{flex: 680}}>
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



const MenuButtons = () => {
    return (
        <View style={menuStyles.buttonsContainer}>
            <MenuButton
                text="Личный кабинет"
                onPress={()=>{
                    alert(1);
                }}
            />
            <View style={menuStyles.menuSpace} />
            <MenuButton
                text="Заказы"
                onPress={()=>{
                    alert(1);
                }}
            />
            <View style={menuStyles.menuSpace} />
            <MenuButton
                text="Акции"
                onPress={()=>{
                    alert(1);
                }}
            />
            <View style={menuStyles.menuSpace} />
            <MenuButton
                text="Оставьте отзыв"
                onPress={()=>{
                    alert(1);
                }}
            />
            <View style={menuStyles.menuSpace} />
            <MenuButtonConnect
                text="Обратная связь"
                onPress={()=>{
                    alert(5);
                }}
            />
        </View>
    );
};

const RoundButtons = () => {
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


const Menu = ({navigation}) => {
    return (
        <View style={{
            justifyContent: 'flex-start',
            width: '100%',
            flex:1,
        }}>
            <Header />
            <View style={{flex:1390, backgroundColor: 'rgb(240,240,240)'}}>
                <CityPicker />
                <View style={{flex: 46}} />
                <MenuButtons />
                <View style={{flex: 39}} />
                <RoundButtons />
                <View style={{flex:586}} />
            </ View>
        </View>
    );
};

export default Menu;
