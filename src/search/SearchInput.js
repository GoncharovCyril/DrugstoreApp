import React from 'react';
import { View, Text } from 'react-native';

import SearchInputHeader from './SearchInputHeader';


const SearchInput = ({route, navigation}) => {

    const [searchValue, setSearchvalue] = React.useState('');

    

    return (
        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'flex-start'}}>
            <SearchInputHeader navigation={navigation} searchValue={searchValue} setSearchvalue={setSearchvalue} />

            <View style={{backgroundColor: 'red', flex: 1}}>
                <Text>{searchValue}</Text>
            </View>
        </View>
    );
};

export default SearchInput;
