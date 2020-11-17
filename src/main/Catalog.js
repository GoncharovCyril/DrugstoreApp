import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';


const Catalog = ({navigation}) => {
    const label = (2 < 5) ? <Text> drug1 </Text> : <Text> drug2 </Text>;
    return (
        <View>
            {label}
        </View>
    );
};

export default Catalog;
