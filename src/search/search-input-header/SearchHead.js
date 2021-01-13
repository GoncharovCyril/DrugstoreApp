import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity, Keyboard } from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { SET_SEARCH_VALUE } from '../../redux/types';

import {searchMedicine} from '../../requests/ProductsRequests';

import { headerStyles, smallHeight, searchHeigt, shopHeight } from "../../navigationHeadStyles";
import { colorOrange, colorGreen, colorLightGrey } from '../../Colors';


import BarcodeSolid from '../../../svg/barcode-solid';
import SearchSolid from '../../../svg/search-solid';
import { PROVIDER_GOOGLE } from 'react-native-maps';


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

const SearchHead = ({navigation, setDataAction}) => {

    // const [searchValue, setSearchvalue] = React.useState('');

    const dispatch = useDispatch();


    const searchValue = useSelector(state => state.appStore.search.value);
    
    const setStoredSearchValue = React.useCallback((text)=> {
        dispatch({
            type: SET_SEARCH_VALUE,
            payload: {
                value: text
            }
        });
        navigation.navigate('SearchResult');
    }, [dispatch])




    const setSearchValue = React.useCallback((textValue)=> {
        // setDataAction(textValue);
        if (textValue.length == 0){
            setDataAction(null);
        } else {
            searchMedicine(textValue).then(([status, text]) => {
                console.log(JSON.parse(text).length);
                switch (status) {
                    case 200:
                        // setResult(json);
                        setDataAction(JSON.parse(text));
                        break;
                    default:
    
                        break;
                }
            })
        }
        


    }, [])

    const tRef = React.createRef(null);

    useFocusEffect(
        React.useCallback(()=> {
            if(tRef.current != null) {
                console.log('focus')
                tRef.current.focus();
                // tRef.current.clear();
            }
            else {
                alert("porno")
            }
        }, [tRef])
    );




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
                            // autoFocus={true}
                            placeholder='Поиск лекарства...'
                            defaultValue={searchValue}
                            ref={tRef}
                            onLayout={()=>{
                                console.log('lay')
                                tRef.current.focus();
                            }}
                            
                            // onFocus={()=>{
                            //     navigation.navigate('SearchScreen');
                            // }}
                            // onTouchStart={()=>{
                            //     navigation.navigate('SearchScreen');
                            // }}
                            onChangeText={setSearchValue}
                            onSubmitEditing={({nativeEvent: {text, eventCount, target}}) => {
                                setStoredSearchValue(text);
                            }}
                        />
                    </View>
                </View>
            </View>
    );
};

export default SearchHead;
