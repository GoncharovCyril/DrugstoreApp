import React from 'react';
import { View, Text } from 'react-native';
import {WebView} from 'react-native-webview';
import MapView, {Marker} from 'react-native-maps';

const ShopsListMapScreen = ({route, navigation}) => {

    const shopName = "NAME";

    

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <MapView
                style={{ flex: 1 }}
                region={{
                    latitude: 47.993331,
                    longitude: 37.853775,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                showsUserLocation={true} 
            >
                <Marker 
                    key={0}
                    coordinate={{ latitude : 47.993331 , longitude : 37.853775 }}
                    title="APTEKA 1"
                />
                

            </ MapView>
        </View>
    )
};

export default ShopsListMapScreen;
