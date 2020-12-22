import React from 'react';
import { StyleSheet } from 'react-native';
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
