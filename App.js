import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button } from 'react-native';

import productsReducer from './src/redux/ProductsReducer';

import MedicineTab from './src/MedicineTab';

import Main from './src/main/Main';
import mainHeader from './src/main/MainHeader';

import Drug from './src/drug/Drug';

import Catalog from './src/catalog/Catalog';
import catalogHeader from './src/catalog/CatalogHeader';

import Basket from './src/basket/Basket';
import ShopsList from './src/shopslist/ShopsList';
import Menu from './src/menu/Menu';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// <View style={styles.container}>
//    <Main />
//    <StatusBar style="auto" />
// </View>

const Stack = createStackNavigator();
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

import MainHeader from "./src/main/MainHeader";


const options = {
    headerMode: "screen",
    headerStyle: {height: 155,},
    header: ({ scene, previous, navigation }) => {
        const { options } = scene.descriptor;
        const title = options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title
            : scene.route.name;

        return (
            <View style={options.headerStyle} >
                <MainHeader navigation={navigation} backButton={
                    previous ? < Button title="back" onPress={navigation.goBack} /> : undefined
                } />  
            </View>
            
        );
    },
};

// tabBar={props => <MedicineTab {...props} />} 


const store = createStore(productsReducer);

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Main" tabBarOptions={{ keyboardHidesTabBar: 'true' }} tabBar={props => <MedicineTab {...props} />} onNa>
                    <Tab.Screen name="Main" component={Main} />
                    <Tab.Screen name="Catalog" component={Catalog} />
                    <Tab.Screen name="Basket" component={Basket} />
                    <Tab.Screen name="ShopsList" component={ShopsList} />
                    <Tab.Screen name="Menu" component={Menu} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
