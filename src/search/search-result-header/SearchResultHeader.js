import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import BackButton from "../../BackButton";
import TitleHead from '../../header/TitleHead';
import SearchHead from './SearchHead';
import ShopHead from '../../header/ShopHead';

import { headerStyles, smallHeight, searchHeigt } from "../../navigationHeadStyles";
import { colorOrange } from '../../Colors';

const headStyles = StyleSheet.create({
    headContainer: {
        flex: 3,
        justifyContent: 'center',
    },
});



const Header = ({navigation, backButton, route}) => {
    return (
        <View style={headStyles.headContainer}>
            <LinearGradient
                colors={[colorOrange, 'white']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: smallHeight+searchHeigt,
                }}
            />
            <TitleHead backButton={backButton} title='Поиск'/>
            <SearchHead navigation={navigation} />
            <ShopHead navigation={navigation} route={route} />
        </View>
    );
};

const searchHeader = {
    headerMode: "screen",
    headerStyle: headerStyles.searchResultHeader,
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
                route = {scene.route}
                navigation={navigation} 
                backButton={
                    previous ? <BackButton action={navigation.goBack} /> : undefined
                } />  
            </View>          
        );
    },
};

export default searchHeader;
