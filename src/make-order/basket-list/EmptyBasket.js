import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TabActions } from '@react-navigation/native';

import { colorOrange } from '../../Colors';

const bRadius = 15;

const EmptyBasket = ({ route, navigation }) => {
    const jumpToCatalog = TabActions.jumpTo('Catalog', {});

    return (
        <View style={{ height: 200, justifyContent: 'center', alignItems: 'stretch' }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, textAlign: 'center', textAlignVertical: 'center' }}>В вашей корзине пока ничего нет</Text>
            </View>
            <View style={{ flex: 2 }}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        marginTop: '0%',
                        marginRight: '16%',
                        marginLeft: '16%',
                        marginBottom: '1%',
                        borderWidth: 2,
                        borderColor: colorOrange,
                        borderRadius: bRadius,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colorOrange
                    }}

                    onPress={() => {
                        navigation.dispatch(jumpToCatalog);
                    }}

                >
                    <Text style={{ fontSize: 18, color: 'white' }}>Перейти в каталог</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        // width: "70%",
                        marginTop: '1%',
                        marginRight: '16%',
                        marginLeft: '16%',
                        marginBottom: '0%',
                        borderWidth: 2,
                        borderColor: colorOrange,
                        borderRadius: bRadius,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => {
                        navigation.navigate('SearchScreen')
                    }}
                >
                    <Text style={{ fontSize: 18, color: colorOrange }}>Найти лекарство</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default EmptyBasket;
