import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1
    },
    item: {
        height: 24,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 16,
    },
});

const Item = ({ title, key }) => (
    <View style={styles.item} >
        <Text style={styles.title}>{title}</Text>
    </View>
);

const ResultList = ({navigation, data}) => {
    // const [value, setValue] = React.useState(searchValue);

    const renderItem = ({item}) => (
        <Item title={item.name}/>
    );


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}

            />
        </SafeAreaView>
    )

};

export default ResultList;