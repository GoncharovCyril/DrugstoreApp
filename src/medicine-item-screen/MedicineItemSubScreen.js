import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { colorOrange } from '../Colors';

export const MedicineItemScreen = ({ route, navigation }) => {

    const [text, setText] = React.useState('');


    useFocusEffect(React.useCallback(() => {
        if (route['params'] !== undefined) {
            setText(route.params['data']
                // .replace(/\\n/g, '\n')
                // .replace(/\\r/g, '\r')
                // .replace(/\\v/g, '\v')
                // .replace(/\\t/g, '\t')
            )
        }
    }, [text]))

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <SafeAreaView>
                <ScrollView>
                    <Text
                        style={{
                            fontSize: 16,
                            marginLeft: '4%',
                            marginRight: '1%',
                            marginTop: '5%'
                        }}
                    >{text.toString()}</Text>
                </ScrollView>
            </SafeAreaView>
            
        </View>
    )
};

export default MedicineItemScreen;
