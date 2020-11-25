import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";


import BarcodeSolid from '../../svg/barcode-solid';
import BarsSolid from '../../svg/bars-solid';
import CapsulesSolid from '../../svg/capsules-solid';
import ShevronRightSolid from '../../svg/chevron-right-solid';
import CommentMedicalSolid from '../../svg/comment-medical-solid';
import HomeSolid from '../../svg/home-solid';
import InstagramBrands from '../../svg/instagram-brands';
import ListUlSolid from '../../svg/list-ul-solid';
import MapMarketAltSolid from '../../svg/map-market-alt-solid';
import OdnoklassnikiBrands from '../../svg/odnoklassniki-brands';
import PlusSolid from '../../svg/plus-solid';
import SearchSolid from '../../svg/search-solid';
import ShoppingBasketSolid from '../../svg/shopping-basket-solid';
import TelegramPlaneBrands from '../../svg/telegram-plane-brands';
import VirusSolid from '../../svg/virus-solid';
import VkBrands from '../../svg/vk-brands';


const ImageList = () => {
    return (
        <View>
            <View style={{width: '20%', justifyContent: "center"}}>
                <BarcodeSolid color="red" />
            </ View>
            <View style={{width: '20%', justifyContent: "center"}}>
                <BarsSolid color="red" />
            </ View>
            <View style={{width: '20%', justifyContent: "center"}}>
                <CapsulesSolid color="red" />
            </ View>
            <View style={{width: '20%', justifyContent: "center"}}>
                <ShevronRightSolid color="red" />
            </ View>
            <View style={{width: '20%', justifyContent: "center"}}>
                <CommentMedicalSolid color="red" />
            </ View>
            <View style={{width: '20%', justifyContent: "center"}}>
                <HomeSolid color="red" />
            </ View>
            <View style={{width: '20%', justifyContent: "center"}}>
                <InstagramBrands color="red" />
            </ View>
            <View style={{width: '20%', justifyContent: "center"}}>
                <ListUlSolid color="red" />
            </ View>
            <View style={{width: '20%', justifyContent: "center"}}>
                <MapMarketAltSolid color="red" />
            </ View>
            <View style={{width: '20%', justifyContent: "center"}}>
                <OdnoklassnikiBrands color="red" />
            </ View>
            <View style={{width: '20%', justifyContent: "center"}}>
                <PlusSolid color="red" />
            </ View>
            <View style={{width: '20%', justifyContent: "center"}}>
                <SearchSolid color="red" />
            </ View>
            <View style={{width: '20%', justifyContent: "center"}}>
                <ShoppingBasketSolid color="red" />
            </ View>
            <View style={{width: '20%', justifyContent: "center"}}>
                <TelegramPlaneBrands color="red" />
            </ View>
            <View style={{width: '20%', justifyContent: "center"}}>
                <VirusSolid color="red" />
            </ View>
            <View style={{width: '20%', justifyContent: "center"}}>
                <VkBrands color="red" />
            </ View>
        </View>
    );
};


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
        <View style={{
            alignItems: "center",
            backgroundColor: "rgb(92,158,36)",
            borderRadius: 18,
        }}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ShopsList');
                }}
            >
                <Text style={{
                    color: "white",
                    alignSelf: "center",
                }}>Купить</Text>
            </TouchableOpacity>
        </View>
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
                    flexDirection: "row",
                    borderRadius: 18,
                    flex: 9,

                    shadowColor: 'rgb(92,158,36)',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 5,
                    shadowRadius: 5,
                    elevation: 5,
                }}>
                    <View style={{flex: 5}} />
                    <View style={{
                        flex: 30,
                        alignItems: "center",
                        justifyContent: "space-around"
                    }}>
                        <View style={{
                            width: "100%",
                            flex: 5
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
                        }}>
                            {props.availability}
                        </Text>
                    </ View>

                    <View style={{flex: 60}}>
                        <View >
                            <Text> {props.description}</Text>
                        </View>
                        <View>
                            <Text style={{color:"rgb(106,106,106)"}}> {props.dealer}</Text>
                        </View>

                        <View style={{flexDirection:"row", borderWidth: 1}}>
                            <View style={{flex:1}} />
                            <View style={{flex:1, borderWidth: 1}}>
                                <View style={{alignItems: "flex-end"}}>
                                    <Text> {props.price}</Text>
                                </View>
                                <BuyButton navigation={props.navigation}/>
                            </View>
                        </View>

                    </View>
                    <View style={{flex: 5}} />
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
                    <View style={{flex: 0.5}} />

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Drug');
                        }}
                        style={scrollStyles.virusPicker}
                    >
                        <View style={{flex:0.2}} />
                        <Text style={{flex:8, alignSelf: 'center', justifyContent: 'center'}}>От простуды и вирусов</Text>
                        <View style={{height: '50%', justifyContent: "center", alignSelf: 'center',}}>
                            <ShevronRightSolid color="rgba(236,111,39,1.0)" />
                        </ View>
                        <View style={{flex:0.2}} />
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
                        <View style={{flex:0.2}} />
                        <Text style={{flex:8, alignSelf: 'center', justifyContent: 'center'}}>Лучшие лекарства</Text>
                        <View style={{height: '50%', justifyContent: "center", alignSelf: 'center',}}>
                            <ShevronRightSolid color="rgba(236,111,39,1.0)" />
                        </ View>
                        <View style={{flex:0.2}} />
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
                            height: 40,
                            backgroundColor: "white",
                            flexDirection: "row",
                        }}
                    >
                        <View style={{flex:0.2}} />
                        <View style={{height: '50%', justifyContent: "center", alignSelf: "center"}}>
                            <PlusSolid color="rgba(236,111,39,1.0)" />
                        </ View>
                        <Text style={{flex:8, alignSelf: 'center', justifyContent: 'center', color:"rgb(106,106,106)"}}>Лучшие лекарства</Text>
                        <View style={{height: '50%', justifyContent: "center", alignSelf: 'center',}}>
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
                            height: 40,
                            backgroundColor: "white",
                            flexDirection: "row",
                        }}
                    >
                        <View style={{flex:0.2}} />
                        <View style={{height: '50%', justifyContent: "center", alignSelf: "center"}}>
                            <VirusSolid color="rgba(236,111,39,1.0)" />
                        </ View>
                        <Text style={{flex:8, alignSelf: 'center', justifyContent: 'center', color:"rgb(106,106,106)"}}>COVID-2019</Text>
                        <View style={{height: '50%', justifyContent: "center", alignSelf: 'center',}}>
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
                            height: 40,
                            backgroundColor: "white",
                            flexDirection: "row",
                        }}
                    >
                        <View style={{flex:0.2}} />
                        <View style={{height: '50%', justifyContent: "center", alignSelf: "center"}}>
                            <CommentMedicalSolid color="rgba(236,111,39,1.0)" />
                        </ View>
                        <Text style={{flex:8, alignSelf: 'center', justifyContent: 'center', color:"rgb(106,106,106)"}}>Обратная связь</Text>
                        <View style={{height: '50%', justifyContent: "center", alignSelf: 'center',}}>
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
