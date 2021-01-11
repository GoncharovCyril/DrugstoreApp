import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import {searchMedicine} from '../requests/ProductsRequests';


import SearchInputHeader from './SearchInputHeader';

import SearchShortResultList from './SearchShortResultList';




const SearchInput = ({route, navigation}) => {

    // const [searchValue, setSearchvalue] = React.useState('');
    const [resultData, setResult] = React.useState([]);

    const searchValueSelector = createSelector(
        state => state.appStore.search.value,
        value => {
            console.log('ping')
            if (value.length > 0){
                searchMedicine(value).then(([status, text]) => {
                    console.log(JSON.parse(text).length);
                    switch (status) {
                        case 200:
                            // setResult(json);
                            setResult(JSON.parse(text));
                            break;
                        default:
    
                            break;
                    }
                })
            }
            else {
                // setResult([]);
            }
        }
    )
    const searchValue = useSelector(searchValueSelector);

    return (
        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'flex-start', borderWidth: 1}}>
                {/* <Text>{JSON.stringify(JSON.parse(resultData))}</Text> */}
                <SearchShortResultList
                    navigation={navigation}
                    data={resultData} 
                />
        </View>
    );
};

export default SearchInput;
