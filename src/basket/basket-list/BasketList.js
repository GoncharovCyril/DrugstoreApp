// import 'react-native-gesture-handler';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import {REMOVE_ALL_THIS_PRODUCT} from '../../redux/types';

import ListItem from './MedicineItemView';
import MedicineSwipeableRow from './MedicineSwipeableRow';

const medicineListStyles=StyleSheet.create({

});

const wait= (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const Footer = () => (
    <View style={{justifyContent:'center', alignItems: 'center'}}>
        <TouchableOpacity
            style={{
                height: 45,
                width: "70%",
                borderWidth: 2,
                borderColor: "rgb(236,111,39)",
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "rgb(236,111,39)"
            }}

            onPress={() => {
                navigation.dispatch(jumpToCatalog);
            }}

        >
            <Text style={{ fontSize: 18, color: 'white' }}>Перейти в каталог</Text>
        </TouchableOpacity>
    </View>
)

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


    const appStore = useSelector(state => state.appStore);
    const dispatch = useDispatch();

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

    const SwipeableRow = ({ item }) => {
        return (
            appStore.products.has(item.id) 
            ?
                <View>
                    {
                        <MedicineSwipeableRow action={() => {
                            dispatch({ type: REMOVE_ALL_THIS_PRODUCT, payload: { id: item.id } });
                        }}>
                            <ListItem
                                navigation={navigation}
                                index={item.id}
                                description={item.description}
                                dealer={item.description}
                                price={item.price}
                                availability={item.availability}
                            />
                        </MedicineSwipeableRow>
                    }
                </View>      
            : undefined
        )
    };

    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <View style={{flex: 6}} >
                <SafeAreaView style={{flex: 1}}>
                    <FlatList 
                        data={data}
                        // ListFooterComponent={Footer}
                        // ListHeaderComponent={
                        //     headVisible ? Header : undefined
                        // }
                        renderItem={SwipeableRow}
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