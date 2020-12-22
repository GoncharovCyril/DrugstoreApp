import React from 'react';
import { StyleSheet, View } from 'react-native';

import { headerStyles, smallHeight, searchHeigt, shopHeight } from "../navigationHeadStyles";

import BackButton from "../BackButton";
import BigLogoHead from '../header/BigLogoHead';
import SearchHead from '../header/SearchHead';
import ShopHead from '../header/ShopHead';


//orange
const colorO="rgba(236,111,39,1.0)";
//green
const colorG='#4db141';

const headStyles = StyleSheet.create({
    headContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});


const Header = ({navigation, backButton}) => {
    return (
        <View style={headStyles.headContainer}>
            <BigLogoHead backButton={backButton}/>
            <SearchHead navigation={navigation} />
            <ShopHead navigation={navigation} />
        </View>
    );
};


const mainHeader = {
    headerMode: "screen",
    headerStyle: headerStyles.mainHeader,
    header: ({ scene, previous, navigation }) => {
        const { options } = scene.descriptor;
        const title = options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title
            : scene.route.name;

        return (
            <View style={options.headerStyle} >
                <Header navigation={navigation} backButton={
                    previous ? <BackButton action={navigation.goBack} /> : undefined
                } />  
            </View>
            
        );
    },
};

export default mainHeader;
