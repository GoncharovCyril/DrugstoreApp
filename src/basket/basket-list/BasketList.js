// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, SafeAreaView, FlatList, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';

import ListItem from './MedicineItemView';

const medicineListStyles=StyleSheet.create({

});

const wait= (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const Footer = () => (
    <ActivityIndicator size="large" color="rgb(236,111,39)" />);

const Header = () => (
    <View style={{
        flexDirection: 'row',
        height: 25,
        justifyContent: 'space-around',
        marginTop: 5
    }}>
        <TouchableOpacity>
            <Text>По популярности</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Фильтр</Text>
        </TouchableOpacity>
    </View>
);

const MedicineList = ({navigation, data}) => {

    // const [refreshing, setRefreshing] = React.useState(false);
    //// const [data, setData] = React.useState(DATA)
    // const [bottom, setBottom] = React.useState(undefined);
    
    // const headVisible = route.params.headVisible===undefined ? true : route.params.headVisible;

    // const [count, setCount] = React.useState(3);

    const onRefresh = React.useCallback(() => {
            setRefreshing(true);
            setBottom(<Footer />)
            //setData(data.concat(data));
            wait(2000).then(() => {setRefreshing(false); setBottom(undefined)});
    }, []);

    const renderItem = ({ item }) => {
        console.log(item.id);
        return (
            <ListItem 
                navigation={navigation} 
                index={item.id} 
                description={item.description} 
                dealer={item.description} 
                price={item.price} 
                availability={item.availability} 
            />
        )
    };

    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <View style={{flex: 6}} >
                <SafeAreaView style={{flex: 1}}>
                    <FlatList 
                        data={data}
                        // ListFooterComponent={bottom}
                        // ListHeaderComponent={
                        //     headVisible ? Header : undefined
                        // }
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        // refreshing={refreshing} 
                        // onEndReached={onRefresh}
                        // onEndReachedThreshold={1}
                    />
                </SafeAreaView>
            </ View>
        </View>
    );
};


export default MedicineList;