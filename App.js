import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button } from 'react-native';

import MedicineTab from './src/main/MedicineTab';
import Main from './src/main/Main';
import Header from './src/main/Header';
import Drug from './src/main/Drug';
import Catalog from './src/main/Catalog';
import Basket from './src/main/Basket';
import ShopsList from './src/main/ShopsList';
import Menu from './src/main/Menu';


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


const Home = () => {
    return (
        <MainStack.Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>
            <MainStack.Screen name="Main" component={Main} />
            <MainStack.Screen name="Drug" component={Drug} />
        </MainStack.Navigator>
    )
};

// const App = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Home">
//                 <Stack.Screen name="Main" component={Main} />
//                 <Stack.Screen name="Drug" component={Drug} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home" tabBar={props => <MedicineTab {...props} />}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Catalog" component={Catalog} />
                <Tab.Screen name="Basket" component={Basket} />
                <Tab.Screen name="ShopsList" component={ShopsList} />
                <Tab.Screen name="Menu" component={Menu} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
