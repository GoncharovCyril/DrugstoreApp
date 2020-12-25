import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useFocusEffect } from '@react-navigation/native';


const ShopsListMapScreen = ({ route, navigation }) => {

    const [selectedShop, setSelectedShop] = React.useState(undefined);

    const [regLatit, regLongit] = selectedShop == undefined
        ? [47.993331, 37.853775]
        : selectedShop.coordinates.split(', ').map(item => parseFloat(item));

    const shopsData = route.params.hasOwnProperty('data') ? route.params.data : [];



    useFocusEffect(
        React.useCallback(() => {
            route.params.hasOwnProperty('selectedShop');
            setSelectedShop(
                route.params.hasOwnProperty('selectedShop') ?
                route.params.selectedShop : undefined
            );
        }, [])
    );

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ flex: 4 }}>
                <MapView
                    style={{ flex: 1 }}
                    region={{
                        latitude: regLatit,
                        longitude: regLongit,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    showsUserLocation={true}
                >
                    {
                        shopsData.map(item => {
                            const [latit, longit] = item.coordinates.split(', ');
                            return (
                                <Marker
                                    key={item.system_id}
                                    coordinate={{ latitude: parseFloat(latit), longitude: parseFloat(longit) }}
                                    title={item.name}
                                    image={require('../../../img/plus-marker.png')}
                                    onPress={() => {
                                        setSelectedShop(item);

                                    }}
                                />
                            )
                        })
                    }
                </ MapView>
            </View>
            {
                selectedShop != undefined ?
                    <View style={{ flex: 6 }}>

                    </View>
                    : undefined
            }


        </View>
    )
};

export default ShopsListMapScreen;
