import React from 'react';
import { Image } from 'react-native';

const Logo = (props) => {
    return (
        <Image
            style={{
                width: "100%",
                height: "100%"
            }}
            source={require('../assets/logo_1024.png')}
            resizeMode="contain"
            resizeMethod='scale'
            fadeDuration={0}
        />
    );
};

export default Logo;
