import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

import LittleLogo from '../LittleLogo';

import { headerStyles } from "../navigationHeadStyles";

import subcatalogNames from "./SubCatalogDict";

import BackButton from "../BackButton";
import TitleHead from '../header/TitleHead';
import SearchHead from '../header/SearchHead';
import ShopHead from '../header/ShopHead';


import PlusSolid from '../../svg/rounds/plus-solid-round';
import BarcodeSolid from '../../svg/barcode-solid';
import SearchSolid from '../../svg/search-solid';
import ShevronRightSolid from '../../svg/chevron-right-solid';


const headStyles = StyleSheet.create({
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
        backgroundColor:'#4db141',
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



const Space = (props) => {
    return (
        <View style={{width: props.width, height: props.height}} />
    );
};

const color="rgba(236,111,39,1.0)";

const Header = ({navigation, backButton, title}) => {
    return (
        <View style={headStyles.headContainer}>
            <TitleHead backButton={backButton} title={title}/>
            <SearchHead navigation={navigation} />
            <ShopHead navigation={navigation} />
        </View>
    );
};

const subHeader = {
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
                <Header 
                    navigation={navigation} 
                    // title={subcatalogNames[scene.route.params.id]}
                    title={scene.route.params.title}
                    backButton={
                        previous ? <BackButton action={navigation.goBack} /> : undefined
                } />  
            </View>          
        );
    },
};

export default subHeader;
