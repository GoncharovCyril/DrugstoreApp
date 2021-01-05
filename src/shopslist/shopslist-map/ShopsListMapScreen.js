import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { useFocusEffect } from '@react-navigation/native';
import { getPharmacies } from '../../requests/ShopsRequests';
// import PlusSolid from '../../../svg/rounds/plus-solid-round';
import BottomSheet from 'reanimated-bottom-sheet';



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
    const sheetRef = React.useRef(null);


    // const shopsData = route.params.hasOwnProperty('data') ? route.params.data : [];
    // const shopsData = [];


    // setSelectedShop(
    //         route.params.hasOwnProperty('selectedShop') ?
    //         route.params.selectedShop : undefined
    //     );
    // useFocusEffect(
    //     React.useCallback(() => {
    //         return () => {setSelectedShop(undefined)}
    //     }, [])
    // );

    useFocusEffect(
        React.useCallback(()=> {
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
        },[])
    );


    const renderBottom = () => (
        <View style={{
            backgroundColor: 'white',
            padding: 16,
            height: '100%',
        }}>
            <Text>Swipe</Text>

        </View>
    )

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            {
                isLoading ? <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="rgb(236,111,39)" />
                    <Text style={{ textAlign: 'center', fontSize: 18 }}>Загружаем список аптек</Text>
                </View>
                    : 
                    <View style={{flex: 1, width: '100%', justifyContent: 'flex-start'}}>
                        <View style={{ flex: 4 }}>
                        {<MapView
                            style={{ flex: 1 }}
                            provider={PROVIDER_GOOGLE}
                            initialRegion={{
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
                                            onPress={() => {
                                                setSelectedShop(item);
                                                sheetRef.current.snapTo(1)

                                            }}
                                        >
                                            <View style={{ width: 23, height: 23, justifyContent: "center", alignSelf: "center" }}>
                                                {/* {<PlusSolid color="white" colorBack="rgb(236,111,39)"/>} */}
                                                <Image
                                                    style={{
                                                        width: "100%",
                                                        height: "100%"
                                                    }}
                                                    source={require('../../../assets/plus-marker.png')}
                                                    resizeMode="stretch" 
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
                        <BottomSheet
                                    ref={sheetRef}
                                    snapPoints={["0%",'30%']}
                                    borderRadius={10}
                                    renderContent={renderBottom} 
                                />
                    </View>
                    
            }



        </View>
    )
};

export default ShopsListMapScreen;
