import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

import LittleLogo from '../LittleLogo';

import BackButton from "../BackButton";

import navigationHeadStyle from "../navigationHeadStyles";

import PlusSolid from '../../svg/rounds/plus-solid-round';
import BarcodeSolid from '../../svg/barcode-solid';
import SearchSolid from '../../svg/search-solid';
import ShevronRightSolid from '../../svg/chevron-right-solid';


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



const Space = (props) => {
    return (
        <View style={{width: props.width, height: props.height}} />
    );
};

const color="rgba(236,111,39,1.0)";

const Header = ({navigation, backButton}) => {
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
                        <View style={{ flex: 20 }} />
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
