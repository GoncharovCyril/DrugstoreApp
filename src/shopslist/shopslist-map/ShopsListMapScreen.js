import React from 'react';
import { 
    View, 
    Text, 
    ActivityIndicator, 
    Image, 
    TouchableOpacity, 
    StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { SET_SHOP, SET_SELECTED_SHOP } from '../../redux/types';

import { useFocusEffect } from '@react-navigation/native';

import { colorGreen, colorDarkGrey, colorOrange } from '../../Colors';

import { getPharmacies } from '../../requests/ShopsRequests';
// import PlusSolid from '../../../svg/rounds/plus-solid-round';
import BottomSheet from 'reanimated-bottom-sheet';

import * as Location from 'expo-location';


const styles = StyleSheet.create({
    buttonSetStoredShop: {
        alignItems: "center",
        justifyContent: 'center',
        // borderWidth: 2,
        borderColor: colorGreen,
        backgroundColor: colorGreen,
        borderRadius: 15,
        height: "100%",
        width: "100%"
    },
    buttonSetNoStoredShop: {
        alignItems: "center",
        justifyContent: 'center',
        // borderWidth: 2,
        borderColor: colorGreen,
        backgroundColor: colorGreen,
        borderRadius: 15,
        height: "100%",
        width: "100%"
    },
    buttonSetStoredShopText: {
        color: 'white',
        alignSelf: "center",
        textAlignVertical: 'center',
        fontSize: 17
    },
    buttonSetStoredShopNoText: {
        color: 'white',
        alignSelf: "center",
        textAlignVertical: 'center',
        fontSize: 17
    },

});

const ShopsListMapScreen = ({ route, navigation }) => {
    const [isLoading, setLoading] = React.useState(true);
    const [location, setLocation] = React.useState(null);

    // const [selectedShop, setSelectedShop] = React.useState(
    //     // route.params.hasOwnProperty('selectedShop') ? route.params['selectedShop'] : undefined
    //     undefined
    // );
    const [snapPoints, setSnappoints] = React.useState(["0%",'20%']);
    const [initialSnap, setInitialsnap] = React.useState(0);

    const [regLatit, regLongit] = selectedShop == undefined
        ? [47.993331, 37.853775]
        : selectedShop.coordinates.split(', ').map(item => parseFloat(item));

    // const [shopsData, setShopsdata] = React.useState(route.params['data']);
    const [shopsData, setShopsData] = React.useState([]);
    const sheetRef = React.useRef(null);

    const storedShopId = useSelector(state => {
        return state.appStore.shop.id
    });
    // const selectedShopId = useSelector(state => {
    //     return state.appStore.selectedShop.id
    // });
    const storedSelectedShop = useSelector(state => state.appStore.selectedShop);
    const [selectedShop, setSelectedShop] = React.useState({})

    

    const dispatch = useDispatch();

    const setStoredShop = React.useCallback(()=> {
        dispatch({ type: SET_SHOP, payload: {id: selectedShop['system_id'], address: selectedShop['address'] } });
        
    }, [dispatch, selectedShop]);
    const setNoStoredShop = React.useCallback(()=>{
        dispatch({ type: SET_SHOP, payload: {id: null, address: null } });
        
    }, [dispatch]);
    const setNoSelectedShop = React.useCallback(() => {
        // console.log('blur2')
        dispatch({ type: SET_SELECTED_SHOP, payload: {
            id: null,
            system_id: null,
            name: null,
            city: null,
            address: null,
            coordinates: null,
            photo: null,
            phone: null,
            working_time: null,
        } });
    }, [dispatch]);

    const ButtonSetStoredShop = () => (
        <TouchableOpacity
            style={styles.buttonSetStoredShop}
            onPress={setStoredShop}
        >
            <Text style={styles.buttonSetStoredShopText}>Выбрать</Text>
        </TouchableOpacity>
    );

    const ButtonSetNoStoredShop = () => (
        <TouchableOpacity
            style={styles.buttonSetNoStoredShop}
            onPress={setNoStoredShop}
        >
            <Text style={styles.buttonSetStoredShopNoText}>Отменить</Text>
        </TouchableOpacity>
    );

    const renderBottom = () => (
        <View style={{
            backgroundColor: 'white',
            padding: '1%',
            height: '100%',
        }}>
            <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{backgroundColor: colorGreen, height: '50%', width: '10%', borderRadius: 15}} />

            </View>
            {
                selectedShop.id == null ?
                    undefined :
                    <View style={{flex: 97, flexDirection: 'row'}}>
                        <View style={{ flex: 70, marginLeft: "5%", marginTop: '0%' }}>
                            <Text style={{ fontSize: 14, color: colorDarkGrey }}>{selectedShop['city']}</Text>
                            <Text style={{ fontSize: 18, color: colorGreen }}>{selectedShop['name']}</Text>
                            <Text style={{ fontSize: 16, color: colorDarkGrey }}>{selectedShop['address']}</Text>
                            <View style={{ height: 10, color: colorDarkGrey }} />
                            <Text style={{ fontSize: 16, color: colorDarkGrey }}>{selectedShop['phone']}</Text>
                            <Text style={{ fontSize: 16, color: colorDarkGrey }}>{selectedShop['working_time']}</Text>
                        </View>
                        <View style={{ flex: 30, justifyContent: 'flex-start' }}>
                            <View style={{height: '25%', justifyContent: 'center'}}>
                                {
                                    storedShopId !== selectedShop['system_id'] ? <ButtonSetStoredShop /> : <ButtonSetNoStoredShop />
                                }
                            </View>
                            
                            {
                                // selectedShop.photo != null ?
                                // <TouchableWithoutFeedback>
                                //     <Text>Фото</Text>
                                // </ TouchableWithoutFeedback>
                                // : undefined
                            }
                        </View>
                    </View>
            }
            

        </View>
    )


    useFocusEffect(
        React.useCallback(()=> {
            const load = async () => {
                setShopsData([]);
                // setInitialsnap(route['params'] == undefined ? 0 : route.params['selectedShop'] == undefined ? 0 : 1);
                setLoading(true);

                let {status} = await Location.requestPermissionsAsync();
                let location = null;
                if (status === 'granted') {
                    location = await Location.getCurrentPositionAsync({});
                }
                setLocation(location);
                console.log(location)

                setSelectedShop(storedSelectedShop);
                // console.log(selectedShop);
                setInitialsnap(storedSelectedShop.id != null ? 1 : 0);
                // console.log(storedSelectedShop.id);
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
                
                return () => setNoSelectedShop();
            }
            load();
        },[])
    );

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            {
                isLoading ? <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color={colorOrange} />
                    <Text style={{ textAlign: 'center', fontSize: 18 }}>Загружаем список аптек</Text>
                </View>
                    : 
                    <View style={{flex: 1, width: '100%', justifyContent: 'flex-start'}}>
                        <View style={{ flex: 4 }}>
                        <MapView
                            style={{ flex: 1 }}
                            provider={PROVIDER_GOOGLE}
                            initialRegion={{
                                latitude: selectedShop.coordinates != null 
                                    ? parseFloat(selectedShop.coordinates.split(', ')[0]) : 
                                    location != null ? location['coords']['latitude'] : 47.993331,
                                longitude: selectedShop.coordinates != null 
                                    ? parseFloat(selectedShop.coordinates.split(', ')[1]) :
                                    location != null ? location['coords']['longitude'] : 37.853775,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421
                            }}
                            // showsUserLocation={true}
                        >
                            {
                                location != null ?
                                <Marker
                                    key = {location['timestamp']}
                                    coordinate={{
                                        latitude: location['coords']['latitude'],
                                        longitude: location['coords']['longitude']
                                    }}
                                    title="Вы находитесь здесь"
                                ></Marker>
                                : undefined
                            }
                            {
                                shopsData.map(item => {
                                    const [latit, longit] = item.coordinates.split(', ');
                                    return (
                                        <Marker
                                            key={item.system_id}
                                            coordinate={{ latitude: parseFloat(latit), longitude: parseFloat(longit) }}
                                            title={item.name}
                                            // icon={require('./plus-marker.png')}
                                            onPress={() => {
                                                setSelectedShop(item);
                                                // setSnappoints(item['photo'] == undefined ? ['0%', '20%'] : ['0%', '20%'])
                                                sheetRef.current.snapTo(1);                                                
                                            }}
                                        >
                                            {
                                                <View style={{ width: 23, height: 23, justifyContent: "center", alignSelf: "center" }}>
                                                    {/* {<PlusSolid color="white" colorDarkGreyack=colorOrange/>} */}
                                                    <Image
                                                        style={{
                                                            width: "100%",
                                                            height: "100%"
                                                        }}
                                                        source={require('../../../assets/plus-marker.png')}
                                                        resizeMode="stretch"
                                                    />
                                                </ View>
                                            }
                                        </Marker>
                                    )
                                })
                            }
                            </ MapView>
                        </View>
                        <BottomSheet
                            ref={sheetRef}
                            snapPoints={snapPoints}
                            borderRadius={15}
                            initialSnap={initialSnap}
                            enabledBottomInitialAnimation={true}
                            renderContent={renderBottom}
                            enabledContentTapInteraction={false}
                        />
                    </View>     
            }
        </View>
    )
};

export default ShopsListMapScreen;
