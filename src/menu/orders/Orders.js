import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { getUser } from '../../requests/AccountRequests';

import OrdersTabScreen from "./OrdersTabScreen";
import ProductsTabScreen from "./ProductsTabScreen";


const styles = StyleSheet.create({

});

const Tab = createMaterialTopTabNavigator();
//orange
const colorO="rgb(236,111,39)";
//green
const colorG='#4db141';
// const activeColor = "rgb(226,94,18)";
const activeColor = colorG;
const inactiveColor = "rgb(106,106,106)";

const Orders = ({ navigation }) => {
    const [isLoading, setLoading] = React.useState(true);
    const [user, setUser] = React.useState({
        state: "Не авторизован",
    });
    const storeToken = useSelector(state => state.appStore.account.token);


    React.useEffect(() => {
        getUser(storeToken)
            .then(([status, json]) => {
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
                : <Tab.Navigator initialRouteName="OrdersTabScreen" tabBarOptions={{
                    activeTintColor: activeColor,
                    inactiveTintColor: inactiveColor,
                    indicatorStyle: {
                        width: "25%",
                        left: "12.5%",
                        backgroundColor: activeColor,
                        height: "10%",
                        borderRadius: 2,
                    },
                    labelStyle: {
                        textTransform: 'none',
                        fontSize: 16,
                        textAlignVertical: 'top',
                        marginTop: 0
                    },
                    tabStyle: {
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    },
                    style: {
                        height: 40,
                        justifyContent: 'flex-start',
                    }
                }}>
                    <Tab.Screen initialParams={user} name="OrdersTabScreen" component={OrdersTabScreen} options={{ tabBarLabel: 'Заказы' }} />
                    <Tab.Screen initialParams={user} name="ProductsTabScreen" component={ProductsTabScreen} options={{ tabBarLabel: 'Товары' }} />
                </Tab.Navigator>
            }
        </View>


    );
};


export default Orders;
