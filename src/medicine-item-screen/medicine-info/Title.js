import React from 'react';
import { Text, View } from 'react-native';
import { colorDarkGrey } from '../../Colors';



const Title = ({ name_rus, name_eng }) => {
    return (
        <View style={{ height: 70, backgroundColor: 'white'}}>
            <Text
                style={{
                    marginLeft: '5%',
                    marginTop: '2%',
                    marginRight: '1%',
                    fontSize: 16,
                    fontWeight: '700'
                }}
                numberOfLines={2}
            >{name_rus.trim()}</Text>
            <Text
                style={{
                    marginLeft: '5%',
                    marginRight: '1%',
                    fontSize: 14,
                    color: colorDarkGrey
                }}
                numberOfLines={1}
            >{name_eng.trim()}</Text>
        </View>
    )
};
export default Title;