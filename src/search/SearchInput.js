import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import {searchMedicine} from '../requests/ProductsRequests';


import SearchInputHeader from './search-input-header/SearchInputHeader';

import SearchShortResultList from './SearchShortResultList';
import SearchHistoryList from './SearchHistoryList';




const SearchInput = ({route, navigation}) => {

    const search = useSelector(state => state.appStore.search);

    const [resultData, setResult] = React.useState(null);
    const [isHistoryShowed, setHistoryShowed] = React.useState(false);

    useFocusEffect(
        React.useCallback(()=> {
            if(search.value.length == 0) {
                setResult(null);
                if(search.history.length > 0){
                    setHistoryShowed(true)
                }
                    
            } else {

                // обновление листа шорт резалт
                searchMedicine(search.value).then(([status, text]) => {
                    // console.log(JSON.parse(text).length);
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
            
        }, [])
    );



    return (
        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'flex-start'}}>
            <SearchInputHeader navigation={navigation} setDataAction={setResult} />
                {
                    // <Text>{resultData}</Text>
                    }
                {
                resultData != null ?
                    //здесь потом вставится список истории
                    // undefined
                    <SearchShortResultList
                        navigation={navigation}
                        data={resultData}
                    />
                    :
                    isHistoryShowed ?                    
                        <SearchHistoryList
                            navigation={navigation}
                            data={search.history}
                            shownSetter={setHistoryShowed}
                        />
                        :
                        undefined
                }
        </View>
    );
};

export default SearchInput;
