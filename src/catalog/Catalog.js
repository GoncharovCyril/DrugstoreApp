// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import catalogHeader from './CatalogHeader';
import subcatalogHeader from './SubCatalogHeader';
import CatalogItem from './CatalogItem';

import CatalogData from './data/CatalogData';
import SubData from './data/SubData';

import CatalogResultScreen from './CatalogResultsScreen';

import DATA from '../medicine-list/test-data/testMedicineData';

import SearchScreen from '../search/SearchScreen';
import SearchHeader from '../search/SearchInputHeader';

import ShopsListScreen from '../shopslist/ShopsList';
import PersonalAreaScreen from '../personal-area/PersonalArea';

import FilterScreen from '../medicine-list/filter/FilterScreen';
import FilterHeader from '../medicine-list/filter/FilterHeader';

import CallbackScreen from '../callback/Callback';
import CallbackHeader from '../callback/CallbackHeader';

import MedicineItemScreen from '../medicine-item-screen/MedicineItemScreen';
import MedicineItemHeader from '../medicine-item-screen/MedicineItemHeader';
import MedicineItemSubScreen from '../medicine-item-screen/MedicineItemSubScreen';
import MedicineItemSubHeader from '../medicine-item-screen/MedicineItemSubHeader';

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
                title: item.title,
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
                        keyExtractor={item => item.id.toString()}
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
            navigation.navigate("CatalogResultScreen", {
                title: item.title,
                headVisible: true,
                data: DATA,
                request: item.title
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
                        keyExtractor={item => item.id.toString()}
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
                <CatalogStack.Screen name="CatalogResultScreen" component={CatalogResultScreen} options={subcatalogHeader} />
                <CatalogStack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}} />

                <CatalogStack.Screen name="PersonalAreaScreen" component={PersonalAreaScreen} options={{headerShown: false}} />

                <CatalogStack.Screen name="MedicineItemScreen" component={MedicineItemScreen} options={MedicineItemHeader} />
                <CatalogStack.Screen name="CallbackScreen" component={CallbackScreen} options={CallbackHeader} />
                <CatalogStack.Screen name="MedicineItemSubScreen" component={MedicineItemSubScreen} options={MedicineItemSubHeader} />
                <CatalogStack.Screen name="FilterScreen" component={FilterScreen} options={FilterHeader} />

                <CatalogStack.Screen name="ShopsListScreen" component={ShopsListScreen} options={{headerShown: false}} />
                
                
            </CatalogStack.Navigator>
    );
};



export default Catalog;
