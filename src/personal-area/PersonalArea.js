import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {useFocusEffect} from '@react-navigation/native';

import PhoneNumberScreen from './PhoneNumberScreen';
import PhoneNumberHeader from './PhoneNumberHeader';

import VerificationCodeScreen from './VerificationCodeScreen';
import VerificationCodeHeader from './VerificationCodeHeader';

import AccountScreen from './AccountScreen';
import AccountHeader from './AccountHeader';

import LoadingScreen from './LoadingScreen';

const styles = StyleSheet.create({
   
});

const PersonalAreaStack = createStackNavigator();

const PersonalAreaScreen = ({route, navigation}) => {

    return(
            <PersonalAreaStack.Navigator initialRouteName='AccountScreen'>
                <PersonalAreaStack.Screen 
                    initialParams={{baseRouteName: route.params['baseRouteName']}} 
                    name="PhoneNumberScreen" 
                    component={PhoneNumberScreen}
                    options={PhoneNumberHeader}
                />
                <PersonalAreaStack.Screen 
                    initialParams={{baseRouteName: route.params['baseRouteName']}} 
                    name="VerificationCodeScreen" 
                    component={VerificationCodeScreen}
                    options={VerificationCodeHeader}
                />
                <PersonalAreaStack.Screen 
                    initialParams={{baseRouteName: route.params['baseRouteName']}} 
                    name="AccountScreen" 
                    component={AccountScreen}
                    options={AccountHeader}
                />
            </PersonalAreaStack.Navigator>
    );
};

export default PersonalAreaScreen;
