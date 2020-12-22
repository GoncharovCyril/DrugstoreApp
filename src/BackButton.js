import React from 'react';
import { TouchableOpacity } from 'react-native';

import ShevronLeftSolid from '../svg/chevron-left-solid';

const BackButton = ({action, color}) => {
    return(
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={action}>
            <ShevronLeftSolid color="white" />
        </ TouchableOpacity>
    );
};

export default BackButton;