import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import BackButton from "../../BackButton";
import TitleHead from './TitleHead';
import SearchHead from './SearchHead';

import { headerStyles, smallHeight, searchHeigt } from "../../navigationHeadStyles";

import {colorOrange} from '../../Colors';

const headStyles = StyleSheet.create({
    headContainer: {
        // flex: 3,
        justifyContent: 'center',
        height: smallHeight + searchHeigt,
    },
});



const Header = ({ route, navigation, setDataAction }) => {
    return (
        <View style={headerStyles.searchInputHeader} >
            <View style={headStyles.headContainer}>
                <LinearGradient
                    colors={[colorOrange, 'white']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: smallHeight + searchHeigt,
                    }}
                />
                <TitleHead
                    backButton={(<BackButton action={navigation.goBack} />)}
                    title='Поиск'
                />
                <SearchHead navigation={navigation} setDataAction={setDataAction}/>
            </View>
        </View>
    );
};

const searchHeader = {
    headerMode: "screen",
    headerStyle: headerStyles.searchInputHeader,
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



export default Header;