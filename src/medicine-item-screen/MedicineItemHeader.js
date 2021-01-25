import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_ALL_PRODUCTS } from '../redux/types';
import { StyleSheet, View, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import BackButton from '../BackButton';
import TitleHead from '../header/TitleNoLogoHead';
import ShopHead from '../header/ShopHead';

import { headerStyles, smallHeight, shopHeigt } from "../navigationHeadStyles";
import { colorOrange } from '../Colors';



const headStyles = StyleSheet.create({
    headContainer: {
        flex: 3,
        justifyContent: 'center',
    },
});

const Header = ({navigation, backButton, title, route}) => {
    return (
        <View style={headStyles.headContainer}>
            <LinearGradient
                colors={[colorOrange, 'white']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: smallHeight,
                }}
            />
            <TitleHead backButton={backButton} title={title}/>
            <ShopHead navigation={navigation} route={route} />
        </View>
    );
};

const medicineHeader = {
    headerMode: "screen",
    headerStyle: headerStyles.medicineItemHeader,
    header: ({ scene, previous, navigation }) => {
        const { options } = scene.descriptor;

        const selectedProductName = useSelector(state => state.appStore.selectedProduct.name)

        // const title = scene.route['params'] === undefined 
        //     ? 'Medicine'
        //     : scene.route.params['name'] === undefined
        //     ? 'Medicine'
        //     : scene.route.params['name']


        return (
            <View style={options.headerStyle} >
                <Header 
                navigation={navigation} 
                route={scene.route}
                backButton={
                    previous ? <BackButton action={navigation.goBack} /> : undefined
                }
                title={selectedProductName} />

            </View>          
        );
    },
};

export default medicineHeader;
