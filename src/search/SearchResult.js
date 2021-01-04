import React from 'react';
import { View, Text } from 'react-native';


const SearchResult = ({route, navigation}) => {

    const [searchValue, setSearchValue] = React.useState(route.params['searchValue'])

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{searchValue}</Text>
        </View>
    );
};

export default SearchResult;
