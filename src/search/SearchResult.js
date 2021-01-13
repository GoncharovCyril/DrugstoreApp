import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import {searchMedicine} from '../requests/ProductsRequests';

const SearchResultScreen = ({route, navigation}) => {


    // const [searchValue, setSearchValue] = React.useState(route.params['searchValue'])
    const searchValue = useSelector(state => state.appStore.search.value);

    const [isLoading, setLoading] = React.useState(true);
    const [resultData, setResultdata] = React.useState([]);

    // useFocusEffect(
    //     React.useCallback(()=>{
    //         setResultdata([]);
    //         setLoading(true);
    //         searchMedicine(searchValue)
    //             .then(([status, json]) => {
    //                 switch (status) {
    //                     case 200:
    //                         setResultdata(json);
    //                         break;
    //                     default:
    //                         break;
    //                 }
    //             })
    //             .finally(() => {
    //                 setLoading(false);
    //             })
    //     }, [])
    // );


    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {
                resultData.map(item => (
                    <View>
                        <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                        <Text>{item.country}</Text>
                        <Text>{item.release_form}</Text>
                        <Text>{item.manufacturer}</Text>
                    </View>
                ))
            }
            <Text>{searchValue}</Text>
        </View>
    );
};

export default SearchResultScreen;
