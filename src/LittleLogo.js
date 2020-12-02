import React from 'react';
import { View, Image } from 'react-native';

const Logo = (props) => {
    return (
            <Image
                style={{
                    width: "100%",
                    height: "100%"
                }}
                source={require('../img/little-logo.png')}
                resizeMode="contain"
            />
    );
};

export default Logo;
