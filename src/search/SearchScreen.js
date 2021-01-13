import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

import SearchResultHeader from './search-result-header/SearchResultHeader';


const SearchStack = createStackNavigator();


const Search = ({navigation}) => {
    return (
        <SearchStack.Navigator initialRouteName="SearchInput" >
            <SearchStack.Screen name="SearchInput" component={SearchInput} options={{headerShown: false}} />
            <SearchStack.Screen name="SearchResult" component={SearchResult} options={SearchResultHeader} />
        </SearchStack.Navigator>
    );
};

export default Search;
