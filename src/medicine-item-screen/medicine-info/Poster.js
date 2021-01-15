import React from 'react';
import { Text, View, Image } from 'react-native';
import { colorDarkGrey } from '../../Colors';



const Poster = ({ drug_id }) => {
    const [imgPath, setPath] = React.useState({ uri: `http://195.133.145.14/storage/drugs/${drug_id}.jpg` });
    return (
        <View style={{ height: 180, backgroundColor: 'white' }}>
            <View style={{ flex: 90 }}>
                <Image
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                    source={imgPath}
                    defaultSource={require("../../../img/default-medicine.jpg")}
                    resizeMode='contain'
                    onError={({ nativeEvent: { error } }) => {
                        setPath(require("../../../img/default-medicine.jpg"))
                    }}
                />
            </View>
            <View style={{ flex: 10 }}>
                <Text style={{
                    color: colorDarkGrey,
                    textAlign: 'center',
                    fontSize: 10,
                }}>Внешний вид товара может отличаться от данного изображения</Text>
            </View>
        </View>
    )
};

export default Poster;