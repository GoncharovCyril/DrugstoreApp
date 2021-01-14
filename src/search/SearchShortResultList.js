import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { SET_SEARCH_VALUE, ADD_SEARCH_VALUE_TO_HISTORY } from '../redux/types';

import {colorOrange} from '../Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '5%',
        marginLeft: '4%',
        marginRight: '3%',
        
    },
    item: {
        // flex: 5,
        height: 26,
        justifyContent: 'center',
        alignItems: 'flex-start',
        
    },
    title: {
        fontSize: 15,
    },
});

const Item = ({ title, navigation }) => {

    const dispatch = useDispatch();

    const touchAction = React.useCallback(()=>{
        dispatch({ type: SET_SEARCH_VALUE, payload: {value: title} });
        dispatch({
            type: ADD_SEARCH_VALUE_TO_HISTORY,
            payload: {
                value: title
            }
        });
        navigation.navigate('SearchResult');
    }, [dispatch]);


    return (
        <TouchableOpacity
            style={styles.item}
            // underlayColor={colorOrange}
            onPress={touchAction}

        >
            <View style={{ flex: 1 }}>
                <Text style={styles.title} numberOfLines={1}>{title.trim()}</Text>

            </View>
        </TouchableOpacity>
    )
}

const ResultList = ({navigation, data}) => {
    // const [value, setValue] = React.useState(searchValue);

    const renderItem = ({item}) => (
        <Item title={item.name} navigation={navigation}/>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ height: '100%' }}
            />
        </SafeAreaView>
    )

};

export default ResultList;