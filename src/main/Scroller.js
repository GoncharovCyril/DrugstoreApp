import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";


import ShevronRightSolid from '../../svg/chevron-right-solid';
import CommentMedicalSolid from '../../svg/comment-medical-solid';
import PlusSolid from '../../svg/plus-solid';
import VirusSolid from '../../svg/virus-solid';


const scrollStyles = StyleSheet.create({
    scrollContainer: {
        flex: 6,
        backgroundColor: 'rgba(240,240,240,1.0)'
    },
    adSlider: {
        height: 180,
        backgroundColor: "pink",
    },
    virusPicker: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    bottomMenuText: {
        flex:8,
        alignSelf: 'center',
        justifyContent: 'center',
        color:"rgb(106,106,106)",
        fontSize: 16
    },
});

const images = [
    require('./img/drug1.jpg'),
    require('./img/drug2.jpg'),
];

const AdSlider = ({ navigation }) => {
    return (
        <View style={scrollStyles.adSlider}>
            <SliderBox
                images={images}
                dotColor="rgb(226,94,18)"
                inactiveDotColor="rgb(92,158,36)"
                resizeMode="stretch"

                onCurrentImagePressed={ index => {
                    // alert(index);
                    navigation.navigate("Drug");

                }}
            />
        </View>
    );
};


const BuyButton = ({ navigation }) => {
    return (
            <TouchableOpacity
                style={{
                    alignItems: "center",
                    justifyContent: 'center',
                    backgroundColor: "rgb(92,158,36)",
                    borderRadius: 18,
                    flex: 1
                }}
                onPress={() => {
                    navigation.navigate('ShopsList');
                }}
            >
                <Text style={{
                    color: "white",
                    alignSelf: "center",
                    textAlignVertical: 'center',
                    fontSize: 16
                }}>Купить</Text>
            </TouchableOpacity>
    );
};

const DrugView = (props) => {
    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate('Drug');
            }}
            style={{
                height: 180,
                flex: 1,
                flexDirection: "row",
            }}
        >
            <View style={{flex:0.3}} />
            <View style={{flex:9}} >
                <View style={{flex:0.5}} />
                <View style={{
                    backgroundColor: "white",
                    flexDirection: "column",
                    borderRadius: 18,
                    flex: 9,

                    shadowColor: 'rgb(92,158,36)',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 5,
                    shadowRadius: 5,
                    elevation: 5,
                }}>
                    <View style={{flex:6}} />
                    <View style={{
                        flex:88,
                        flexDirection: "row",
                    }}>
                        <View style={{flex: 3}} />
                        <View style={{
                            flex: 24,
                            alignItems: "center",
                            justifyContent: "space-around"
                        }}>
                            <View style={{
                                width: "100%",
                                flex: 5,
                                borderWidth: 1
                            }}>
                                <Image
                                    style={{
                                        width: "100%",
                                        height: "100%"
                                    }}
                                    source = {require('./img/drug1.jpg')}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={{
                                flex:5,
                                color: "rgb(106,106,106)",
                                borderWidth: 1,
                                textAlign: 'center',
                                fontSize: 12
                            }}>
                                {props.availability}
                            </Text>
                        </ View>
                        <View style={{flex: 2}} />
                        <View style={{flex: 68}}>
                            <View style={{flex: 160, borderWidth: 1}}>
                                <Text style={{fontSize: 13}}>{props.description}</Text>
                                <Text style={{color:"rgb(106,106,106)", fontSize: 13}}>{props.dealer}</Text>
                            </View>


                            <View style={{flexDirection:"row", flex: 63+73}}>
                                <View style={{flex:7}} />
                                <View style={{flex:5, borderWidth: 1, flexDirection: 'column'}}>
                                        <Text style={{
                                            alignSelf: "flex-end",
                                            borderWidth: 1,
                                            flex:1,
                                            textAlignVertical: 'center',
                                            borderWidth: 1,
                                            fontWeight: 'bold',
                                        }}>
                                            {props.price}
                                            </Text>
                                    <BuyButton navigation={props.navigation}/>
                                </View>
                            </View>

                        </View>
                        <View style={{flex: 3}} />
                    </View>
                    <View style={{flex:6}} />
                </View>
                <View style={{flex:0.5}} />
            </ View>
            <View style={{flex:0.3}} />


        </TouchableOpacity>
    );
};

const Scroller = ({ navigation }) => {
    return (
        <View style={scrollStyles.scrollContainer}>
            <ScrollView>
                <View style={{flex:1}}>
                    <AdSlider navigation={navigation} />
                    <View style={{height: 10}} />

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Drug');
                        }}
                        style={scrollStyles.virusPicker}
                    >
                        <View style={{flex:0.4}} />
                        <Text style={{flex:9, alignSelf: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 22}}>От простуды и вирусов</Text>
                        <View style={{height: '50%', justifyContent: "center", alignSelf: 'center',}}>
                            <ShevronRightSolid color="rgba(236,111,39,1.0)" />
                        </ View>
                        <View style={{flex:0.3}} />
                    </TouchableOpacity>

                    <DrugView
                        description="Терафлю от гриппа и простуды, порошок, со вкусом лимона, 10 пакетиков"
                        dealer="ГлаксоСмитКляйн Трейдинг ЗАО (США)"
                        price="329,00 руб."
                        availability="Есть в наличии"
                        navigation={navigation}
                    />
                    <DrugView
                        description=""
                        dealer=""
                        price=""
                        availability=""
                        navigation={navigation}
                    />
                    <DrugView
                        description="ОписаниеОписаниеОписаниеОписаниеОписаниеОписание"
                        dealer="ПроизводствоПроизводствоПроизводство"
                        price="666666"
                        availability="Есть в наличии"
                        navigation={navigation}
                    />

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Drug');
                        }}
                        style={scrollStyles.virusPicker}
                    >
                        <View style={{flex:0.4}} />
                        <Text style={{flex:9, alignSelf: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 22}}>Лучшие лекарства</Text>
                        <View style={{height: '50%', justifyContent: "center", alignSelf: 'center',}}>
                            <ShevronRightSolid color="rgba(236,111,39,1.0)" />
                        </ View>
                        <View style={{flex:0.3}} />
                    </TouchableOpacity>

                    <DrugView
                        description="Терафлю от гриппа и простуды, порошок, со вкусом лимона, 10 пакетиков"
                        dealer="ГлаксоСмитКляйн Трейдинг ЗАО (США)"
                        price="329,00 руб."
                        availability="Есть в наличии"
                        navigation={navigation}
                    />
                    <DrugView
                        description="ОписаниеОписаниеОписаниеОписаниеОписаниеОписание"
                        dealer="ПроизводствоПроизводствоПроизводство"
                        price="666666"
                        availability="Есть в наличии"
                        navigation={navigation}
                    />



                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Drug');
                        }}
                        style={{
                            height: 50,
                            backgroundColor: "white",
                            flexDirection: "row",
                        }}
                    >
                        <View style={{flex:0.3}} />
                        <View style={{height: '50%', justifyContent: "center", alignSelf: "center"}}>
                            <PlusSolid color="rgba(236,111,39,1.0)" />
                        </ View>
                        <View style={{flex:0.2}} />
                        <Text style={scrollStyles.bottomMenuText}>Лучшие лекарства</Text>
                        <View style={{height: '30%', justifyContent: "center", alignSelf: 'center',}}>
                            <ShevronRightSolid color="rgba(236,111,39,1.0)" />
                        </ View>
                        <View style={{flex:0.2}} />
                    </TouchableOpacity>

                    <View style={{height: 5}} />

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Drug');
                        }}
                        style={{
                            height: 50,
                            backgroundColor: "white",
                            flexDirection: "row",
                        }}
                    >
                        <View style={{flex:0.3}} />
                        <View style={{height: '50%', justifyContent: "center", alignSelf: "center"}}>
                            <VirusSolid color="rgba(236,111,39,1.0)" />
                        </ View>
                        <View style={{flex:0.2}} />
                        <Text style={scrollStyles.bottomMenuText}>COVID-2019</Text>
                        <View style={{height: '30%', justifyContent: "center", alignSelf: 'center',}}>
                            <ShevronRightSolid color="rgba(236,111,39,1.0)" />
                        </ View>
                        <View style={{flex:0.2}} />
                    </TouchableOpacity>

                    <View style={{height: 5}} />

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Drug');
                        }}
                        style={{
                            height: 50,
                            backgroundColor: "white",
                            flexDirection: "row",
                        }}
                    >
                        <View style={{flex:0.3}} />
                        <View style={{height: '50%', justifyContent: "center", alignSelf: "center"}}>
                            <CommentMedicalSolid color="rgba(236,111,39,1.0)" />
                        </ View>
                        <View style={{flex:0.2}} />
                        <Text style={scrollStyles.bottomMenuText}>Обратная связь</Text>
                        <View style={{height: '30%', justifyContent: "center", alignSelf: 'center',}}>
                            <ShevronRightSolid color="rgba(236,111,39,1.0)" />
                        </ View>
                        <View style={{flex:0.2}} />
                    </TouchableOpacity>



                </View>
            </ScrollView>
        </View>
    );
};

export default Scroller;
