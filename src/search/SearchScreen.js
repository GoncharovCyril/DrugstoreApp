import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

import SearchResultHeader from './search-result-header/SearchResultHeader';

import MedicineItemScreen from '../medicine-item-screen/MedicineItemScreen';
import MedicineItemHeader from '../medicine-item-screen/MedicineItemHeader';
import MedicineItemSubScreen from '../medicine-item-screen/MedicineItemSubScreen';
import MedicineItemSubHeader from '../medicine-item-screen/MedicineItemSubHeader';

const SearchStack = createStackNavigator();


const Search = ({navigation}) => {
    return (
        <SearchStack.Navigator initialRouteName="SearchInput" >
            <SearchStack.Screen name="SearchInput" component={SearchInput} options={{headerShown: false}} />
            <SearchStack.Screen name="SearchResult" component={SearchResult} options={SearchResultHeader} />

            <SearchStack.Screen name="MedicineItemScreen" component={MedicineItemScreen} options={MedicineItemHeader} />
            <SearchStack.Screen name="MedicineItemSubScreen" component={MedicineItemSubScreen} options={MedicineItemSubHeader} />
        </SearchStack.Navigator>
    );
};

export default Search;
