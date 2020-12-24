import React from 'react';
import { View, Text } from 'react-native';


const ShopsListMapScreen = ({route, navigation}) => {

    const shopName = route.params.name

    return (
        <View style={{flex:1, justifyContent: 'center'}}>
            <Text>{shopName}</Text>
        </View>
    )
};

export default ShopsListMapScreen;
