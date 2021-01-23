import React from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
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
    const [nonShownData, setNonshownData] = React.useState([]);
    const [message, setMessage] = React.useState('')

    useFocusEffect(
        React.useCallback(()=>{
            setLoading(true);
            setResultdata([]);
            setNonshownData([]);
            if(searchValue.length > 0){
                // setLoading(true);
                searchMedicine(searchValue, "")
                    .then(([status, text]) => {
                        switch (status) {
                            case 200:
                                JSON.parse(text).forEach(element => {
                                    resultData.push(element);
                                });
                                setResultdata(JSON.parse(text));
                                setNonshownData(JSON.parse(text));

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


    // useFocusEffect(
    //     React.useCallback(()=>{

    //         setResultdata(['a'])
            
    //     }, [resultData, setResultdata])
    // );

    // React.useEffect(() => {
    //     navigation.addListener('focus', ()=> {
    //         setResultdata(['a'])

    //     });
    // }, [navigation])


    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
            {
                isLoading ?
                <ActivityIndicator size='large' color={colorOrange} />
                :
                resultData.length > 0 ? 
                <MedicineList 
                    route={route} 
                    navigation={navigation} 
                    setLoading={setLoading} 
                    sourceData={resultData} 
                    nonShownData={nonShownData} />
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
