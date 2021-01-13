import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { useDispatch } from 'react-redux';
import { SET_SEARCH_VALUE, CLEAR_SEARCH_HISTORY } from '../redux/types';

import {colorOrange, colorGreen} from '../Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        // flex: 5,
        height: 25,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 15,
    },
    clearItem: {
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    clearText: {
        fontSize: 15,
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
        <TouchableHighlight
            style={styles.item}
            underlayColor={colorOrange}
            onPress={touchAction}

        >
            <View style={{ flex: 1 }}>
                <Text style={styles.title} numberOfLines={1}>{title.trim()}</Text>

            </View>
        </TouchableHighlight>
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
                    <Text style={styles.clearText}>Очистить историю</Text>
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