import React, {useRef, useEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Animated, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { sendVerificationCode } from '../../requests/AccountRequests';
import { createStackNavigator } from '@react-navigation/stack';

import PhoneNumberScreen from './PhoneNumberScreen';
import VerificationCodeScreen from './VerificationCodeScreen';
import AccountScreen from './AccountScreen';

const styles = StyleSheet.create({
   
});

const PersonalAreaStack = createStackNavigator();

const PersonalAreaScreen = ({route, navigation}) => {
    return(
            <PersonalAreaStack.Navigator initialRouteName="AccountScreen">
                <PersonalAreaStack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen}/>
                <PersonalAreaStack.Screen name="VerificationCodeScreen" component={VerificationCodeScreen}/>
                <PersonalAreaStack.Screen name="AccountScreen" component={AccountScreen}/>

            </PersonalAreaStack.Navigator>
    );
};

export default PersonalAreaScreen;
