import React from 'react';
import { Text, View } from 'react-native';
import { colorDarkGrey } from '../../Colors';



const Title = ({ name_rus, name_eng }) => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            {/* <View style={{ height: 60 }}> */}
                <Text
                    style={{
                        marginLeft: '5%',
                        marginTop: '2%',
                        marginRight: '1%',
                        fontSize: 18,
                        fontWeight: '700',
                        textAlignVertical: 'center'
                    }}
                    numberOfLines={2}
                >{name_rus.trim()}</Text>
            {/* </View> */}
            {
                (name_eng !== '' && name_eng !== null) ?
                    // <View style={{ height: 30 }}>
                        <Text
                            style={{
                                marginLeft: '5%',
                                marginRight: '1%',
                                fontSize: 16,
                                color: colorDarkGrey
                            }}
                            numberOfLines={1}
                        >{name_eng.trim()}</Text>
                    // </View>
                    : undefined
            }
            <View style={{height: 12}} />


        </View>
    )
};
export default Title;