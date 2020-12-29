import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { useFocusEffect } from '@react-navigation/native';
import { getPharmacies } from '../../requests/ShopsRequests';
import PlusSolid from '../../../svg/rounds/plus-solid-round';



const ShopsListMapScreen = ({ route, navigation }) => {
    const [isLoading, setLoading] = React.useState(true);
    const [selectedShop, setSelectedShop] = React.useState(
        // route.params.hasOwnProperty('selectedShop') ? route.params['selectedShop'] : undefined
        undefined
    );

    const [regLatit, regLongit] = selectedShop == undefined
        ? [47.993331, 37.853775]
        : selectedShop.coordinates.split(', ').map(item => parseFloat(item));

    // const [shopsData, setShopsdata] = React.useState(route.params['data']);
    const [shopsData, setShopsData] = React.useState([]);

    // const shopsData = route.params.hasOwnProperty('data') ? route.params.data : [];
    // const shopsData = [];


    // console.log(Object.keys(route.params));
    // setSelectedShop(
    //         route.params.hasOwnProperty('selectedShop') ?
    //         route.params.selectedShop : undefined
    //     );
    // useFocusEffect(
    //     React.useCallback(() => {
    //         return () => {setSelectedShop(undefined)}
    //     }, [])
    // );


    React.useEffect(() => {
        navigation.addListener('focus', () => {
            setShopsData([]);
            setLoading(true);
            getPharmacies()
                .then(([status, json]) => {
                    switch (status) {
                        case 200:
                            // alert(200);
                            setShopsData(json);
                            break;
                        default:
                            alert(`${status}:\n${json}`);
                            break;
                    }
                })
                .finally(() => {
                    setLoading(false);
                })
        });
    })


    // React.useEffect(() => {
    //     navigation.addListener('focus', () => {
    //         // alert('focus');
    //         // console.log(route.params['selectedShop']);
    //         // setSelectedShop(route.params['selectedShop']);
    //     });
    //     navigation.addListener('blur', () => {
    //         // alert('blur');
    //         // route.params['selectedShop'] = undefined;
    //     });

    //     // console.log(route.params['selectedShop']);
    //     // setSelectedShop(route.params['selectedShop']);
    // })

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            {
                isLoading ? <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="rgb(236,111,39)" />
                    <Text style={{ textAlign: 'center', fontSize: 18 }}>Загружаем список аптек</Text>
                </View>
                    : <View style={{ flex: 4 }}>
                        {<MapView
                            style={{ flex: 1 }}
                            provider={PROVIDER_GOOGLE}
                            region={{
                                latitude: 47.993331,
                                longitude: 37.853775,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421
                            }}
                            // showsUserLocation={true}
                        >
                            {
                                shopsData.map(item => {
                                    const [latit, longit] = item.coordinates.split(', ');
                                    return (
                                        <Marker
                                            key={item.system_id}
                                            coordinate={{ latitude: parseFloat(latit), longitude: parseFloat(longit) }}
                                            title={item.name}
                                            // icon={require('../../../assets/plus-marker.png')}
                                            // onPress={() => {
                                            //     setSelectedShop(item);

                                            // }}
                                        >
                                            <View style={{ width: 22, height: 22, justifyContent: "center", alignSelf: "center" }}>
                                                {/* {<PlusSolid color="white" colorBack="rgb(236,111,39)"/>} */}
                                                <Image
                                                    style={{
                                                        width: "100%",
                                                        height: "100%"
                                                    }}
                                                    source={require('../../../assets/plus-marker.png')}
                                                    resizeMode="contain" 
                                                />
                                            </ View>
                                        </Marker>
                                    )
                                })
                            }
                            {/* {<Marker
                                key={666}
                                coordinate={{ latitude: 47.996714, longitude: 37.804700 }}
                                title='Аптека № 5'
                                image={require('../../../img/plus-marker.png')}
                                // onPress={() => {
                                //     // setSelectedShop(item);

                                // }}
                            />} */}
                        </ MapView>}
                    </View>
                // selectedShop != undefined ?
                //     <View style={{ flex: 6 }}>

                //     </View>
                //     : undefined
            }



        </View>
    )
};

export default ShopsListMapScreen;
