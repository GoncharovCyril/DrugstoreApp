import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { useDispatch } from 'react-redux';
import { SET_SEARCH_VALUE } from '../redux/types';

import {colorOrange} from '../Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1
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
            onPress={() => { }
            }

        >
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{title}</Text>

            </View>
        </TouchableHighlight>
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