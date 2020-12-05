import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

import LittleLogo from '../LittleLogo';

import navigationHeadStyle from "../navigationHeadStyles";

import subcatalogNames from "./SubCatalogDict";

import BackButton from "../BackButton";


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

const Header = ({navigation, backButton, title}) => {
    return (
        <View style={headerStyles.headContainer}>
            <View style={headerStyles.topContainer}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: 'center' }}>
                        <View style={{ flex: 20 }}>
                            {backButton}
                        </View>
                        <View style={{ flex: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            
                            <Text style={{
                                color: 'white',
                                fontSize: 22,
                            }}> {title}</Text>
                        </View>
                        <View style={{ flex: 20 }} />
                    </View>
                </View>
            </View>
            <View style={headerStyles.middleContainer}>
                <View style={headerStyles.searchContainer}>
                    <View style={headerStyles.searchInput}>
                        <Space width="2%" />
                        <View
                            style={{
                                flex: 8,
                            }}
                        >
                            <View style={{flex: 25}} />
                            <View style={{flex: 50, justifyContent: "center", alignSelf: "center"}}>
                                <SearchSolid color={color} />
                            </ View>
                            <View style={{flex: 25}} />
                        </View>
                        <Space width="2%" />
                        <TextInput
                            style={{
                                alignSelf: "stretch",
                                flex: 92,
                                fontSize: 18
                            }}
                            placeholder='Поиск лекарства...'
                        />
                    </View>
                    <Space width="2%" />
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Drug');
                            }}
                            style={{flex: 70, justifyContent: "center", alignSelf: "center"}}>
                            <BarcodeSolid color={color} />
                        </ TouchableOpacity>
                    </View>
                </View>
            </View>
            <Space height="10%" />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Drug');
                }}
                style={headerStyles.drugstorePickerContainer}>
                <View style={headerStyles.drugstorePicker}>
                    <Space width="3%" />
                    <View style={{height: '45%', justifyContent: "center", alignSelf: "center"}}>
                        <PlusSolid color="white" />
                    </ View>
                    <Space width="3%" />
                    <Text style={{flex:8, alignSelf: 'center', justifyContent: 'center', color: "rgb(106,106,106)", fontSize: 16}}>Выберите аптеку, чтобы искать товары только в ней</Text>
                    <View style={{height: '30%', justifyContent: "center", alignSelf: 'center',}}>
                        <ShevronRightSolid color={color} />
                    </ View>
                    <Space width="3%" />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const subHeader = {
    headerMode: "screen",
    headerStyle: navigationHeadStyle.catalogHeader,
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
                    title={subcatalogNames[scene.route.params.id]}
                    backButton={
                        previous ? <BackButton action={navigation.goBack} /> : undefined
                } />  
            </View>          
        );
    },
};

export default subHeader;
