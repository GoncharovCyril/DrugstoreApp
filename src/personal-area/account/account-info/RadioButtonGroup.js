import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colorDarkGrey, colorLightGrey, colorGreen, colorOrange } from '../../../Colors';

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    selectedButton: {
        borderWidth: 3,
        width: '50%',
        height: '50%',
        borderRadius: 80,
        borderColor: colorDarkGrey,
        backgroundColor: colorGreen
    },
    unselectedButton: {
        borderWidth: 3,
        borderColor: colorDarkGrey,
        width: '50%',
        height: '50%',
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
        fontSize: 18,
        textAlignVertical: 'center'
    }

});


const RadioButtonGroup = ({ data, selectedId, setSelected }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => {
                        setSelected(1)
                    }}
                >
                    <View
                        style={selectedId == 1 ? styles.selectedButton : styles.unselectedButton}

                    />
                </TouchableOpacity>

                <Text style={styles.label}>
                    {data[0]}
                </Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={() => {
                    setSelected(2)
                }}
                >
                    <View
                        style={selectedId == 2 ? styles.selectedButton : styles.unselectedButton}
                        
                    />
                </TouchableOpacity>
                <Text style={styles.label}>
                    {data[1]}
                </Text>


            </View>
            <View style={styles.row}>
                <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={() => {
                    setSelected(3)
                }}
                >
                    <View
                        style={selectedId == 3 ? styles.selectedButton : styles.unselectedButton}
                        
                    />
                </TouchableOpacity>
                <Text style={styles.label}>
                    {data[2]}
                </Text>

            </View>

        </View>
    )
};

export default RadioButtonGroup;