import React from 'react';
import { View, Image } from 'react-native';

const Logo = (props) => {
    return (
        <View style={{width: '90%'}}>
            <Image
                style={{
                    width: "100%",
                    height: "100%",
                    borderWidth: 1,
                }}
                source={require('../img/logo.png')}
                resizeMode="contain"
                fadeDuration={0}
                resizeMethod='scale'
            />
        </View>
    );
};

export default Logo;
