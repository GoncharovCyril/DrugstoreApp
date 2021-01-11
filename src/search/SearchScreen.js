import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

import SearchInputHeader from './SearchInputHeader';
import SearchResultHeader from './SearchResultHeader';


const SearchStack = createStackNavigator();


const Search = ({navigation}) => {
    return (
        <SearchStack.Navigator initialRouteName="SearchInput" >
            <SearchStack.Screen name="SearchInput" component={SearchInput} options={SearchInputHeader} />
            <SearchStack.Screen name="SearchResult" component={SearchResult} options={SearchResultHeader} />
        </SearchStack.Navigator>
    );
};

export default Search;
