import React from 'react';
import { Text, View, Image} from 'react-native';
import { colorDarkGrey } from '../../Colors';



const Poster = ({ uri }) => {
    return (
        uri !== '' ?
            <View style={{ height: 180, backgroundColor: 'white' }}>
                <View style={{flex: 90}}>
                    <Image
                        style={{
                            height: '100%',
                            width: '100%',
                        }}
                        source={{ uri: uri }}
                        resizeMode='contain'
                    />
                </View>
                <View style={{flex: 10}}>
                    <Text style={{
                        color: colorDarkGrey,
                        textAlign: 'center',
                        fontSize: 10,
                    }}>Внешний вид товара может отличаться от данного изображения</Text>
                </View>
            </View>
            : <View />
    )
};

export default Poster;