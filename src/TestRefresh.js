import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, RefreshControl, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';

const DATA = [
    {
        id: 0,
        title: 1,
    },
    {
        id: 1,
        title: 2,
    },
    {
        id: 2,
        title: 1,
    },
    {
        id: 3,
        title: 2,
    },
    {
        id: 4,
        title: 1,
    },
    {
        id: 5,
        title: 2,
    },
    {
        id: 6,
        title: 1,
    },
    {
        id: 7,
        title: 2,
    },
    {
        id: 8,
        title: 1,
    },
    {
        id: 9,
        title: 2,
    },
    {
        id: 10,
        title: 1,
    },
    {
        id: 11,
        title: 2,
    },
    {
        id: 12,
        title: 1,
    },
    {
        id: 13,
        title: 2,
    },
    {
        id: 14,
        title: 1,
    },
    {
        id: 15,
        title: 2,
    },
];

const Item = ({title}) => (
    <View style={{borderWidth:1, alignItems: 'center', height: 60}}>
        <Text>{title}</Text>
    </View>
);

const wait= (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const Footer = () => (
    <View style={{backgroundColor: 'red', height: 50}}>
    
    </View>);

const List = () => {

    const [refreshing, setRefreshing] = React.useState(false);
    const [data, setData] = React.useState(DATA)
    const [bottom, setBottom] = React.useState(undefined);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    const handleRefresh = () => {

    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ListHeaderComponent={<View style={{height: 8}} />}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                refreshing={refreshing} 
                onRefresh={onRefresh}
            />
        </SafeAreaView>
    );
}

const ScrollList = () => {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <Text>Pull down to see RefreshControl indicator</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default List;



