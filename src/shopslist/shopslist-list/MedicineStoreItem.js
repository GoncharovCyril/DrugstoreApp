import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Text, Image } from 'react-native';
import { add } from 'react-native-reanimated';

import { BoxShadow } from 'react-native-shadow';

import ChooseButton from './ChooseButton';


const styles = StyleSheet.create({

});

const viewH = 180;
const viewW = 345;
const windowW = Dimensions.get('window').width;

const shadowOpt = {
    width: viewW,
    height: viewH,
    color:"#4db141",
    border:4,
    radius:15,
    opacity:0.4,
    x:0,
    y:0,
    style:{}
}

const MedicineStoreItem = ({navigation, id, system_id, name, city, address, coordinates, photo, phone, working_time}) => {

    const [viewWidth, setWidth] = React.useState(windowW*0.94);

    return (
        <View 
        style={{
            height: viewH + 20,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
        }}
        
        >
            <BoxShadow setting={{
                width: viewWidth,
                height: viewH,
                color: "#4db141",
                border: 4,
                radius: 15,
                opacity: 0.4,
                x: 0,
                y: 0,
                style: {}
            }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('MedicineItemScreen');
                    }}
                    style={{

                        backgroundColor: "white",
                        flexDirection: "column",
                        borderRadius: 18,
                        height: viewH,
                        width: viewWidth-4,
                        marginLeft: 2
                    }}>
                        <View>
                            <Text>{id}</Text>
                            <Text>{system_id}</Text>
                            <Text>{name}</Text>
                            <Text>{city}</Text>
                            <Text>{address}</Text>
                            <Text>{coordinates}</Text>
                            <Text>{phone}</Text>
                            <Text>{working_time}</Text>
                            <Text>{photo}</Text>
                        </View>
                        <View>
                            <Image
                                style={{
                                    height: 50,
                                    width: 50,
                                }}
                                source={{
                                    uri: 'http://195.133.145.14/storage/'+photo,
                                }}
                                resizeMode='contain'
                            />
                        </View>
                   
                </TouchableOpacity>
            </BoxShadow>

        </View>
    );
};


export default MedicineStoreItem;