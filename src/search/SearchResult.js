import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import {searchMedicine} from '../requests/ProductsRequests';
import MedicineList from '../medicine-list/list/MedicineList';
import { colorOrange } from '../Colors';

const SearchResultScreen = ({route, navigation}) => {


    // const [searchValue, setSearchValue] = React.useState(route.params['searchValue'])
    const searchValue = useSelector(state => state.appStore.search.value);

    const [isLoading, setLoading] = React.useState(true);
    const [resultData, setResultdata] = React.useState([]);
    const [message, setMessage] = React.useState('')

    useFocusEffect(
        React.useCallback(()=>{
            setLoading(true);
            setResultdata([]);
            if(searchValue.length > 0){
                // setLoading(true);
                searchMedicine(searchValue, "")
                    .then(([status, text]) => {
                        switch (status) {
                            case 200:
                                setResultdata(JSON.parse(text));
                                setMessage(resultData.length == 0 ? 'Ничего не найдено' : '')
                                break;
                            default:
                                alert(status);
                                alert(text);
                                break;
                        }
                    })
                    .finally(() => {
                        setLoading(false);
                    })
            } else {
                setMessage('Введен пустой запрос')
            }
            
            return () => {setLoading(true);}
        }, [])
    );


    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
            {
                isLoading ?
                <ActivityIndicator size='large' color={colorOrange} />
                :
                resultData.length > 0 ? 
                <MedicineList navigation={navigation} setLoading={setLoading} sourceData={resultData} />
                : <Text
                style={{
                    fontSize: 20,
                    textAlign: 'center'
                }}
                >{message}</Text>
            }
        </View>
    );
};

export default SearchResultScreen;
