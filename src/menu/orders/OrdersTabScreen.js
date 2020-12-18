import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({

});

const OrdersTabScreen = ({route, navigation}) => {
    return (
        <View>
            <Text>{route.params.state}</Text>
        </View>
    );
};


export default OrdersTabScreen;
