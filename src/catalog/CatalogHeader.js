import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import BackButton from "../BackButton";
import TitleHead from '../header/TitleHead';
import SearchHead from '../header/SearchHead';
import ShopHead from '../header/ShopHead';

import { headerStyles, smallHeight, searchHeigt } from "../navigationHeadStyles";

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
            <LinearGradient
                colors={[colorO, 'white']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: smallHeight + searchHeigt,
                }}
            />
            <TitleHead backButton={backButton} title='Каталог' />
            <SearchHead navigation={navigation} />
            <ShopHead navigation={navigation} />
        </View>
    );
};

const mainHeader = {
    headerMode: "screen",
    headerStyle: headerStyles.catalogHeader,
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
