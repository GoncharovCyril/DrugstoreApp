import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colorDarkGrey, colorLightGrey, colorGreen, colorOrange } from '../../Colors';
import {Sorters} from './Sorters';


const styles = StyleSheet.create({
    buttonContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    selectedButton: {
        borderWidth: 2,
        width: 15,
        height: 15,
        borderRadius: 80,
        borderColor: colorDarkGrey,
        backgroundColor: colorGreen
    },
    unselectedButton: {
        borderWidth: 2,
        borderColor: colorDarkGrey,
        width: 15,
        height: 15,
        borderRadius: 80,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        flex: 35,
        color: colorDarkGrey,
        fontSize: 16,
        textAlignVertical: 'center'
    }

});


const SortersView = ({ selectedId, sortData, sortersData }) => {
    return (
        <View style={{ flex: 1 }}>
            {
                sortersData.map( (sorter)=> (
                    <View style={styles.row} key={sorter.id.toString()}>
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => {
                                sortData(sorter.id, sorter.compareFunction)
                            }}
                        >
                            <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
                                <View
                                    style={selectedId == sorter.id ? styles.selectedButton : styles.unselectedButton}
                                />
                            </View>
                            
                            <Text style={styles.label}>
                                {sorter.title}
                            </Text>
                        </TouchableOpacity>
                        
                    </View>
                ))
            }
        </View>
    )
};

export default SortersView;