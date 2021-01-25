// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import ListItem from './MedicineStoreItem';

// import DATA from "./testMedicineData";

// import FilterSolid from '../../svg/filter-solid';
// import ChevronBottomSolid from '../../svg/chevron-bottom-solid'


const medicineListStyles=StyleSheet.create({

});


const MedicineList = ({route, navigation, data}) => {
    
    const listData = data;

    
    const renderItem = ({ item }) => (
        <ListItem 
            navigation={navigation} 
            id={item.id} 
            system_id={item.system_id}
            name={item.name}
            city={item.city}
            address={item.address}
            coordinates={item.coordinates}
            photo={item.photo}
            phone={item.phone}
            working_time={item.working_time}
            distance={item['distance']}
            route={route}
        />
    );

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', width: '100%'}}>
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={listData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
        </View>
    );
};


export default MedicineList;