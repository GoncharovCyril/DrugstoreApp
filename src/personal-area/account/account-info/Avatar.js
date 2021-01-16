import React from 'react';
import { View, Image } from 'react-native';



const Avatar = ({ avatar_uri }) => {
    return (
        <Image
            style={{
                height: '100%',
                width: '100%',
            }}
            source={{uri: avatar_uri}}
            resizeMode='contain'
        />
    )
};

export default Avatar;