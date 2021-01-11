import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import {searchMedicine} from '../requests/ProductsRequests';


import SearchInputHeader from './search-input-header/SearchInputHeader';

import SearchShortResultList from './SearchShortResultList';




const SearchInput = ({route, navigation}) => {

    // const [searchValue, setSearchvalue] = React.useState('');
    const [resultData, setResult] = React.useState([]);

    const searchAction = (text) => {
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
        setResult(text);
    }

    return (
        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'flex-start', borderWidth: 1}}>
            <SearchInputHeader navigation={navigation} setDataAction={setResult} />
                {
                    // <Text>{resultData}</Text>
                    }
                {
                resultData == null ?
                    //здесь потом вставится список истории
                    undefined
                    :

                    <SearchShortResultList
                        navigation={navigation}
                        data={resultData}
                    />
                }
        </View>
    );
};

export default SearchInput;
