import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import { SET_SEARCH_VALUE } from '../../redux/types';

import { headerStyles, smallHeight, searchHeigt, shopHeight } from "../../navigationHeadStyles";
import { colorOrange, colorGreen, colorLightGrey } from '../../Colors';

import BarcodeSolid from '../../../svg/barcode-solid';
import SearchSolid from '../../../svg/search-solid';


const headStyles = StyleSheet.create({
    middleContainer: {
        // flex:2,
        height: searchHeigt,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
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
                value: ''
            }
        });
        navigation.navigate('SearchInput');
    }, [dispatch])
    const inputRef = React.useRef(null);

    return (
        <View style={headStyles.middleContainer}>
                <TouchableWithoutFeedback 
                    style={headStyles.searchContainer}
                    onPress={setSearchValue}
                >
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
                            ref={inputRef}
                            onFocus={()=>{
                                inputRef.current.blur();
                            }}
                            onTouchStart={()=>{
                                // inputRef.current.blur();
                                alert('touch')

                            }}
                            editable={false}
                            onBlur={()=>{
                                navigation.navigate('SearchInput');
                            }}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
    );
};

export default SearchHead;
