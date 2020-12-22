import React from 'react';
import { StyleSheet, View } from 'react-native';

import BackButton from "../BackButton";
import TitleHead from '../header/TitleHead';
import SearchHead from '../header/SearchHead';

import {headerStyles} from "../navigationHeadStyles";


const headStyles = StyleSheet.create({
    headContainer: {
        flex: 3,
        justifyContent: 'center',
    },
});

const Header = ({navigation, backButton}) => {
    return (
        <View style={headStyles.headContainer}>
            <TitleHead backButton={backButton} title='Поиск'/>
            <SearchHead navigation={navigation} />
        </View>
    );
};

const searchHeader = {
    headerMode: "screen",
    headerStyle: headerStyles.searchHeader,
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

export default searchHeader;
