import React from 'react';
import { StyleSheet, View } from 'react-native';


import { headerStyles } from "../navigationHeadStyles";

import subcatalogNames from "./SubCatalogDict";

import BackButton from "../BackButton";
import TitleHead from '../header/TitleHead';
import SearchHead from '../header/SearchHead';
import ShopHead from '../header/ShopHead';


const headStyles = StyleSheet.create({
    headContainer: {
        flex: 3,
        justifyContent: 'center',
    },
});

const Header = ({navigation, backButton, title}) => {
    return (
        <View style={headStyles.headContainer}>
            <TitleHead backButton={backButton} title={title}/>
            <SearchHead navigation={navigation} />
            <ShopHead navigation={navigation} />
        </View>
    );
};

const subHeader = {
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
                <Header 
                    navigation={navigation} 
                    // title={subcatalogNames[scene.route.params.id]}
                    title={scene.route.params.title}
                    backButton={
                        previous ? <BackButton action={navigation.goBack} /> : undefined
                } />  
            </View>          
        );
    },
};

export default subHeader;
