import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import PlusSolid from '../../svg/plus-solid';
import BarcodeSolid from '../../svg/barcode-solid';
import SearchSolid from '../../svg/search-solid';
import ShevronRightSolid from '../../svg/chevron-right-solid';


const headerStyles = StyleSheet.create({
    headContainer: {
        flex: 3,
        justifyContent: 'center',
        backgroundColor: 'rgba(96,165,38,1.0)',
    },
    logoContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 4,
    },
    middleContainer: {
        flexDirection:'row',
        backgroundColor:'rgba(96,165,38,1.0)',
        flex:3,
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

const Logo = () => {
    return (
        <View style={headerStyles.logoContainer}>
        <Text style={{fontSize: 30}}>
        LOGO
        </Text>
        </View>
    );
};

const Space = (props) => {
    return (
        <View style={{width: props.width, height: props.height}} />
    );
};

const color="rgba(236,111,39,1.0)";

const Header = () => {
    return (
        <View style={headerStyles.headContainer}>
            <Logo />
            <View style={headerStyles.middleContainer}>
                <View style={headerStyles.searchContainer}>
                    <View style={headerStyles.searchInput}>
                        <Space width="2%" />
                        <View>
                            <View style={{flex: 25}} />
                            <View style={{flex: 50, justifyContent: "center", alignSelf: "center"}}>
                                <SearchSolid color={color} />
                            </ View>
                            <View style={{flex: 25}} />
                        </View>
                        <Space width="2%" />
                        <TextInput
                        placeholder='Поиск лекарства...'
                        />
                    </View>
                    <Space width="2%" />
                    <View>
                        <View style={{flex: 15}} />
                        <View style={{flex: 70, justifyContent: "center", alignSelf: "center"}}>
                            <BarcodeSolid color={color} />
                        </ View>
                        <View style={{flex: 15}} />
                    </View>
                </View>
            </View>
            <Space height="5%" />
            <View style={headerStyles.drugstorePickerContainer}>
                <View style={headerStyles.drugstorePicker}>
                    <Space width="1%" />
                    <View style={{height: '50%', justifyContent: "center", alignSelf: "center"}}>
                        <PlusSolid color="white" />
                    </ View>
                    <Space width="5%" />
                    <Text style={{flex:8, alignSelf: 'center', justifyContent: 'center'}}>Выберите аптеку, чтобы искать товары только в ней</Text>
                    <View style={{height: '50%', justifyContent: "center", alignSelf: 'center',}}>
                        <ShevronRightSolid color={color} />
                    </ View>
                    <Space width="1%" />
                </View>
            </View>
        </View>
    );
};

export default Header;
