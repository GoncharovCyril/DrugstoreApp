import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import productsReducer from './src/redux/AppReducer';
import { LOAD_PRODUCTS, SET_TOKEN, SET_CITY } from './src/redux/types';

import AppLoading from 'expo-app-loading';

import MedicineTab from './src/MedicineTab';

import Main from './src/main/Main';
import MainHeader from "./src/main/MainHeader";

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


const MyAppLoading = ({setReady}) => {

    const dispatch = useDispatch();

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('Products')
            dispatch({ type: LOAD_PRODUCTS, payload: {data: jsonValue}})
            const tokenValue = await AsyncStorage.getItem('Token');
            if (!tokenValue != null) {
                dispatch({ type: SET_TOKEN, payload: {token: tokenValue}});
            }
            const cityValue = await AsyncStorage.getItem('City');
            if (!cityValue != null) {
                dispatch({ type: SET_CITY, payload: {city_name: cityValue}});
            }
            return null;
        } catch (e) {
            return null;
        }
    };

    return (
        <AppLoading 
            startAsync={getData}
            onFinish={() => {
                console.log(true);
                setReady(true);
            }}
            onError={console.warn}
        />
    );
};

const App = () => {

    const [isReady, setReady] = React.useState(false);

    return (
        <Provider store={store}>
            {
                !isReady ?
                    <MyAppLoading setReady={setReady}/>
                    : <NavigationContainer>
                        <Tab.Navigator initialRouteName="Main" tabBarOptions={{ keyboardHidesTabBar: 'true' }} tabBar={props => <MedicineTab {...props} />} onNa>
                            <Tab.Screen name="Main" component={Main} />
                            <Tab.Screen name="Catalog" component={Catalog} />
                            <Tab.Screen name="Basket" component={Basket} />
                            <Tab.Screen name="ShopsList" component={ShopsList} />
                            <Tab.Screen name="Menu" component={Menu} />
                        </Tab.Navigator>
                    </NavigationContainer>

            }
        </Provider>
    );
}
export default App;
