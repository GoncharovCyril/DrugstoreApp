// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import catalogHeader from './CatalogHeader';
import subcatalogHeader from './SubCatalogHeader';
import CatalogItem from './CatalogItem';

import CatalogData from './data/CatalogData';
import SubData from './data/SubData';

import MedicineListScreen from '../medicine-list/MedicineList';

const catalogStyles = StyleSheet.create({

});

const wait= (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const MainCatalog = ({navigation, route}) => {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);


    const renderItem = ({ item }) => (
        <CatalogItem title={item.title} action={() =>{
            navigation.navigate("SubCatalog", {
                id: item.id,
                data: SubData[item.id]
            });
        }} />
    );

    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <View style={{flex: 6}} >
                <SafeAreaView style={{flex: 1246}}>
                    <FlatList 
                        ListHeaderComponent={<View style={{height: 8}} />}
                        data={route.params.data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        refreshing={refreshing} 
                        onRefresh={onRefresh}
                    />
                </SafeAreaView>
            </ View>
        </View>
    );
};

const SubCatalog = ({navigation, route}) => {
    
    const renderItem = ({ item }) => (
        <CatalogItem title={item.title} action={() =>{
            navigation.navigate("MedicineListScreen", {
                headVisible: true,
            });
            // navigation.navigate(item.next);
            // alert(route.params);
        }} />
    );

    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <View style={{flex: 6}} >
                <SafeAreaView style={{flex: 1246}}>
                    <FlatList 
                        ListHeaderComponent={<View style={{height: 8}} />}
                        data={route.params.data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </ View>
        </View>
    );
};

const CatalogStack = createStackNavigator();

const Catalog = () => {
    return(
            <CatalogStack.Navigator initialRouteName="MainCatalog">
                <CatalogStack.Screen name="MainCatalog" initialParams={{data: CatalogData}} component={MainCatalog} options={catalogHeader} />
                <CatalogStack.Screen name="SubCatalog" component={SubCatalog} options={subcatalogHeader} />
                <CatalogStack.Screen name="MedicineListScreen" component={MedicineListScreen} options={subcatalogHeader} />
            </CatalogStack.Navigator>
    );
};



export default Catalog;
