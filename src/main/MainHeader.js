import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

import Logo from '../Logo';

import { headerStyles, smallHeight, searchHeigt, shopHeight } from "../navigationHeadStyles";

import BackButton from "../BackButton";
import BigLogoHead from '../header/BigLogoHead';
import SearchHead from '../header/SearchHead';
import ShopHead from '../header/ShopHead';

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
    topContainer: {
        // flex: 4, 
        height: smallHeight,
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'},
    logoContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 4,
    },
    middleContainer: {
        // flex:2,
        height: searchHeigt,
        flexDirection:'row',
        backgroundColor: colorG,
    },
    searchContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        //alignSelf: 'center',
        flex: 1,
    },
    searchInput: {
        backgroundColor: 'rgba(240,240,240,1.0)',
        borderRadius: 20,
        flexDirection:'row',
        height: "80%",
        flex: 0.90,
    },
    drugstorePickerContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,1.0)',
        // flex: 3,
        height: shopHeight,
    },
    drugstorePicker: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        flex: 1,
    },
});


const Header = ({navigation, backButton}) => {
    return (
        <View style={headStyles.headContainer}>
            <BigLogoHead backButton={backButton}/>
            <SearchHead navigation={navigation} />
            <ShopHead navigation={navigation} />
        </View>
    );
};


const mainHeader = {
    headerMode: "screen",
    headerStyle: headerStyles.mainHeader,
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
