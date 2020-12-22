import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

import Logo from '../Logo';

import LittleLogo from '../LittleLogo';

import BackButton from "../BackButton";
import TitleHead from '../header/TitleHead';
import SearchHead from '../header/SearchHead';
import ShopHead from '../header/ShopHead';

import { headerStyles, smallHeight, searchHeigt, shopHeight } from "../navigationHeadStyles";


import PlusSolid from '../../svg/rounds/plus-solid-round';
import BarcodeSolid from '../../svg/barcode-solid';
import SearchSolid from '../../svg/search-solid';
import ShevronRightSolid from '../../svg/chevron-right-solid';


//orange
const colorO="rgba(236,111,39,1.0)";
//green
const colorG='#4db141';

const headStyles = StyleSheet.create({
    headContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});



const Space = (props) => {
    return (
        <View style={{width: props.width, height: props.height}} />
    );
};





const Header = ({navigation, backButton}) => {
    return (
        <View style={headStyles.headContainer}>
            <TitleHead backButton={backButton} title='Каталог'/>
            <SearchHead navigation={navigation} />
            <ShopHead navigation={navigation} />
        </View>
    );
};


const mainHeader = {
    headerMode: "screen",
    headerStyle: headerStyles.catalogHeader,
    header: ({ scene, previous, navigation }) => {
        const { options } = scene.descriptor;
        const title = options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title
            : scene.route.name;

        return (
            <View style={options.headerStyle} >
                <Header navigation={navigation} backButton={
                    previous ? <BackButton action={navigation.goBack} /> : undefined
                } />  
            </View>          
        );
    },
};

export default mainHeader;
