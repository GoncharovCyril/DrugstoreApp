import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

import { BoxShadow } from 'react-native-shadow';

import { colorGreen, colorDarkGrey } from '../../Colors';
import Poster from './Poster';

import BuyButton from './BuyButton';


const styles = StyleSheet.create({

});

const viewH = 180;
const viewW = 345;

const DrugView = ({ navigation, id, name_rus, manufacturer, price, min_price, availability, products, token, count }) => {

    const [viewWidth, setWidth] = React.useState(Dimensions.get('window').width*0.94);


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
                color: colorGreen,
                border: 4,
                radius: 15,
                opacity: 0.4,
                x: 0,
                y: 0,
                style: {}
            }}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        navigation.navigate('MedicineItemScreen', {id: id, name: name_rus});
                    }}
                    style={{ flex: 1 }}
                >
                    <View style={{
                        flex: 1,
                        backgroundColor: "white",
                        flexDirection: "column",
                        borderRadius: 18,
                        height: viewH,
                        width: viewWidth,
                    }}>
                        <View style={{ flex: 10 }} />
                        <View style={{
                            flex: 84,
                            flexDirection: "row",
                        }}>
                            <View style={{ flex: 5 }} />
                            <View style={{
                                flex: 22,
                                alignItems: "center",
                                justifyContent: "space-around",
                            }}>
                                <View style={{
                                    width: "100%",
                                    flex: 5,
                                }}>
                                    <Poster drug_id={id} />
                                </View>
                                <View style={{ flex: 0.5 }} />
                                <Text style={{
                                    flex: 4.5,
                                    color: colorDarkGrey,
                                    textAlign: 'center',
                                    fontSize: 11
                                }}>
                                    {count > 0 ? 'В наличии':'Отсутствует'}
                                </Text>
                            </ View>
                            <View style={{ flex: 2 }} />
                            <View style={{ flex: 67 }}>
                                <View style={{ flex: 160 }}>
                                    <View style={{ flex: 6., flexDirection: 'row' }}>
                                        <View style={{ width: 2 }} />
                                        <Text style={{ 
                                            fontSize: 12.5,
                                            color: 'black' 
                                            }}>{name_rus}</Text>
                                    </View>
                                    <View style={{ flex: 4 }}>
                                        <Text style={{ color: colorDarkGrey, fontSize: 12 }}>{manufacturer}</Text>
                                    </View>
                                </View>


                                <View style={{ flexDirection: "row", flex: 63 + 73 }}>
                                    <View style={{ flex: 7 }} />
                                    <View style={{ flex: 5, flexDirection: 'column' }}>
                                        <Text style={{
                                            alignSelf: "flex-end",
                                            flex: 1,
                                            textAlignVertical: 'center',
                                            fontWeight: 'bold',
                                            color: 'black'
                                        }}>{(price != undefined && price != null && price != '') ? `${price} руб.` : `от ${min_price} руб.`}</Text>
                                        <View style={{ flex: 1 }}>
                                            <BuyButton navigation={navigation} id={id} products={products} token={token} />
                                        </View>
                                    </View>
                                </View>

                            </View>
                            <View style={{ flex: 4 }} />
                        </View>
                        <View style={{ flex: 6 }} />
                    </View>

                </TouchableWithoutFeedback>
            </BoxShadow>

        </View>
    );
};




export default DrugView;