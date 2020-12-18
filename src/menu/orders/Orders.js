import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import {useSelector} from 'react-redux';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { getUser } from '../../requests/AccountRequests';

import OrdersTabScreen from "./OrdersTabScreen";
import ProductsTabScreen from "./ProductsTabScreen";


const styles = StyleSheet.create({

});

const Tab = createMaterialTopTabNavigator();

const Orders = ({ navigation }) => {
    const [isLoading, setLoading] = React.useState(true);
    const [user, setUser] = React.useState({
        state: "Не авторизован",
    });
    const appStore = useSelector(state => state.appStore);


    React.useEffect(() => {
        getUser(appStore.account.token, navigation)
            .then(([status, json]) => {
                console.log(status, '\t', json);
                switch (status) {
                    case 200:
                        setUser({
                            state: status,
                        });
                        break;
                    default:
                        // alert(`${status}:\n${json}`);
                        break;
                }
                
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            {isLoading
                ? <ActivityIndicator size="large" color="rgb(236,111,39)" />
                : <Tab.Navigator initialRouteName="OrdersTabScreen">
                    <Tab.Screen initialParams={user} name="OrdersTabScreen" component={OrdersTabScreen} options={{ tabBarLabel: 'Заказы' }} />
                    <Tab.Screen initialParams={user} name="ProductsTabScreen" component={ProductsTabScreen} options={{ tabBarLabel: 'Товары' }} />
                </Tab.Navigator>
            }
        </View>


    );
};


export default Orders;
