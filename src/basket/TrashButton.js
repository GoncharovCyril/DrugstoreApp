import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import TrashAltSolid from '../../svg/trash-alt-solid';

const BackButton = ({action}) => {
    return(
        <TouchableOpacity style={{height: 25}} onPress={action}>
            <TrashAltSolid color='white' />
        </TouchableOpacity> 
    );
};

export default BackButton;