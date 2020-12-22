import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';

import { headerStyles, smallHeight, searchHeigt, shopHeight } from "../navigationHeadStyles";

import BarcodeSolid from '../../svg/barcode-solid';
import SearchSolid from '../../svg/search-solid';

//orange
const colorO="rgba(236,111,39,1.0)";
//green
const colorG='#4db141';

const headStyles = StyleSheet.create({
    middleContainer: {
        // flex:2,
        height: searchHeigt,
        flexDirection:'row',
        backgroundColor: 'white',
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
        borderColor: colorG,
        borderWidth: 2,
        flexDirection:'row',
        height: "80%",
        flex: 0.94,
    },
});



const Space = (props) => {
    return (
        <View style={{width: props.width, height: props.height}} />
    );
};

const SearchHead = ({navigation}) => {
    return (
        <View style={headStyles.middleContainer}>
                <View style={headStyles.searchContainer}>
                    <View style={headStyles.searchInput}>
                        <Space width="2%" />
                        <View
                            style={{
                                flex:8,
                            }}
                        >
                            <View style={{flex: 25}} />
                            <View style={{flex: 50, justifyContent: "center", alignSelf: "center"}}>
                                <SearchSolid color={colorO} />
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
                    {/* {<View>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Drug');
                            }}
                            style={{flex: 80, justifyContent: "center", alignSelf: "center"}}>
                            <BarcodeSolid color='white' />
                        </ TouchableOpacity>
                    </View>} */}
                </View>
            </View>
    );
};

export default SearchHead;
