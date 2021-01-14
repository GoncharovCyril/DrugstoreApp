import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { SET_SEARCH_VALUE, CLEAR_SEARCH_HISTORY } from '../redux/types';

import {colorOrange, colorGreen} from '../Colors';

import HistorySolid from '../../svg/history-solid';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '5%'
    },
    item: {
        // flex: 5,
        height: 30,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 16,
    },
    clearItem: {
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    clearText: {
        fontSize: 18,
        color: colorGreen,
        textAlign: 'center'
    }
});

const Item = ({ title, navigation }) => {

    const dispatch = useDispatch();

    const touchAction = React.useCallback(()=>{
        dispatch({ type: SET_SEARCH_VALUE, payload: {value: title} });
        navigation.navigate('SearchResult');
    }, [dispatch]);


    return (
        <TouchableOpacity
            style={styles.item}
            // underlayColor={colorOrange}
            onPress={touchAction}

        >
            <View style={{flexDirection: 'row', flex: 1, marginLeft: '5%', marginRight: '4%'}}>
                <View style ={{flex: 5}}>
                    <HistorySolid color={colorOrange} />
                </View>
                <View style={{ flex: 95, marginLeft: '3%', marginRight: '0%' }}>
                    <Text style={styles.title} numberOfLines={1}>{title.trim()}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}



const HistoryList = ({navigation, data, shownSetter}) => {

    const [listData, setData] = React.useState(data);

    const renderItem = ({item}) => (
        <Item title={item} navigation={navigation}/>
    );

    const Footer = ({ title, navigation }) => {

        const dispatch = useDispatch();
    
        const touchAction = React.useCallback(()=>{
            setData([]);
            shownSetter(false);
            dispatch({ type: CLEAR_SEARCH_HISTORY, payload: {} });
        }, [dispatch]);
    
        return (
            <TouchableHighlight
                style={styles.clearItem}
                underlayColor={colorOrange}
                onPress={touchAction}
            >
                <View style={{ flex: 1 }}>
                    <Text style={styles.clearText}>Очистить историю поиска</Text>
                </View>
            </TouchableHighlight>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={listData}
                renderItem={renderItem}
                keyExtractor={item => item}
                contentContainerStyle={{ height: '100%' }}
                ListFooterComponent={Footer}
                
            />
        </SafeAreaView>
    )

};

export default HistoryList;