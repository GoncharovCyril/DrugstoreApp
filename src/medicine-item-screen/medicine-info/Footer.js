import React from 'react';
import { Text, View } from 'react-native';
import { colorDarkGrey, colorLightGrey, colorGreen } from '../../Colors';
import BuyButton from './BuyButton';



const Footer = ({navigation, id, price}) => {
    return (
        <View style={{ 
            flex: 1, 
            backgroundColor: colorLightGrey, 
            flexDirection: 'row',
            borderTopColor: colorDarkGrey,
            borderTopWidth: 0
            }}
        >
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text
                    style={{
                        fontSize: 20,
                        color: colorGreen
                    }}
                >{price}</Text>
            </View>
            <View style={{
                flex: 1,
                marginTop: "2%",
                marginLeft: "2%",
                marginRight: "2%",
                marginBottom: '2%'
            }}>
                <BuyButton navigation={navigation} id={id} />
            </View>
        </View>
    )
};
export default Footer;