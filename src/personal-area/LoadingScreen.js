import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ActivityIndicator, Button } from 'react-native';
import { useFocus } from '@react-navigation/native';
import {useSelector} from 'react-redux'

import {colorOrange} from '../Colors';
const styles = StyleSheet.create({

});

const LoadingScreen = ({ navigation, route }) => {
    // const [phone, setPhone] = React.useState(route.params.phone)
    const storedToken = useSelector(state => state.appStore.account.token);

    // useFocus(
    //     React.useCallback(()=>{

    //     }, [])
    // )

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color={colorOrange} size='large' />
            <Text>{route.params['baseRouteName']}</Text>
            <Button
                title="back"
                onPress={()=>{
                    navigation.navigate(route.params['baseRouteName'])
                }} 
            />
        </View>
    );
};


export default LoadingScreen;
