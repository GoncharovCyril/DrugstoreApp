import React from 'react';
import { Text, View } from 'react-native';
import { colorDarkGrey } from '../../Colors';



const MainProperty = ({ propertyName, propertyValue }) => {
    return (
        propertyValue != '' ?
        <View style={{ height: 50, backgroundColor: 'white'}}>
            <Text
                style={{
                    marginLeft: '5%',
                    marginTop: '0%',
                    fontSize: 15,
                    fontWeight: '700'
                }}
                numberOfLines={1}
            >{propertyName.trim()}</Text>
            <Text
                style={{
                    marginLeft: '5%',
                    fontSize: 15,
                    color: 'black'
                }}
                numberOfLines={1}
            >{propertyValue.trim()}</Text>
        </View>
        : <View />
    )
};
export default MainProperty;