import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { colorOrange } from '../../Colors';
import ShevronRightSolid from '../../../svg/chevron-right-solid';




const AdditionalProperty = ({ propertyName, propertyValue, navigation }) => {
    return (
        propertyValue != '' ?
            <View>
                <TouchableOpacity
                    style={{
                        height: 50,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}
                    onPress={() => {
                        navigation.navigate('MedicineItemSubScreen', { name: propertyName, data: propertyValue })
                    }}

                >
                    <View style={{ flex: 26 + 48 + 17 + 682 }}>
                        <Text
                            style={{
                                marginLeft: '5%',
                                marginTop: '0%',
                                fontSize: 15,
                            }}
                            numberOfLines={1}
                        >{propertyName.trim()}</Text>
                    </View>
                    <View style={{ flex: 30 }}>
                        <ShevronRightSolid color={colorOrange} />
                    </ View>
                    <View style={{ flex: 25 }} />
                </TouchableOpacity>
                <View style={{ height: 2 }} />
            </View>

            : <View />
    )
};
export default AdditionalProperty;