import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { SET_SEARCH_VALUE } from '../redux/types';

import { headerStyles, smallHeight, searchHeigt, shopHeight } from "../navigationHeadStyles";
import { colorOrange, colorGreen, colorLightGrey } from '../Colors';

import BarcodeSolid from '../../svg/barcode-solid';
import SearchSolid from '../../svg/search-solid';


const headStyles = StyleSheet.create({
    middleContainer: {
        // flex:2,
        height: searchHeigt,
        flexDirection:'row',
        // backgroundColor: 'white',
    },
    searchContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        //alignSelf: 'center',
        flex: 1,
    },
    searchInput: {
        backgroundColor: colorLightGrey,
        borderRadius: 15,
        borderColor: colorGreen,
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

    // const [searchValue, setSearchvalue] = React.useState('');

    const dispatch = useDispatch();
    
    const setSearchValue = React.useCallback((text)=> {
        dispatch({
            type: SET_SEARCH_VALUE,
            payload: {
                value: text
            }
        });

    }, [dispatch])

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
                                <SearchSolid color={colorOrange} />
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
                            // onFocus={()=>{
                            //     navigation.navigate('SearchScreen');
                            // }}
                            onTouchStart={()=>{
                                navigation.navigate('SearchScreen');
                            }}
                            onChangeText={text => setSearchValue(text)}
                            onSubmitEditing={()=>{
                                navigation.navigate('SearchResult', {
                                    searchValue: searchValue
                                });
                            }}
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
