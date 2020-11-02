import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

const headerStyles = StyleSheet.create({
    headContainer: {
        flex: 3,
        justifyContent: 'center',
        backgroundColor: 'rgba(96,165,38,1.0)',
    },
    logoContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 4,
    },
    middleContainer: {
        flexDirection:'row',
        backgroundColor:'rgb(230,230,5)',
        flex:3,
    },
    searchContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        //alignSelf: 'center',
        flex: 1
    },
    searchInput: {
        backgroundColor: 'rgba(240,240,240,1.0)',
        borderRadius: 5,
        flexDirection:'row',
        flex: 0.94
    },
    drugstorePickerContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgb(100,100,255)',
        flex: 3,
    },
    drugstorePicker: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        flex: 1,
        backgroundColor: 'darkgrey',
    },
});

const Logo = () => {
    return (
        <View style={headerStyles.logoContainer}>
        <Text style={{fontSize: 30}}>
         LOGO
        </Text>
        </View>
    );
};

const Header = () => {
    return (
        <View style={headerStyles.headContainer}>
            <Logo />
            <View style={headerStyles.middleContainer}>
                <View style={headerStyles.searchContainer}>
                    <View style={headerStyles.searchInput}>
                        <Text> @ </Text>
                        <TextInput
                        placeholder='Поиск лекарства...'
                        />
                    </View>
                    <Text style={{fontSize: 30}}>|||</Text>
                </View>
            </View>
            <View style={headerStyles.drugstorePickerContainer}>
                <View style={headerStyles.drugstorePicker}>
                    <Text style={{flex:1, alignSelf: 'center', fontSize: 30}}>+</Text>
                    <Text style={{flex:8, backgroundColor: 'lightpink', alignSelf: 'center'}}>Выберите аптеку, чтобы искать товары только в ней</Text>
                    <Text style={{flex:1, alignSelf: 'center', fontSize: 30}}>&gt;</Text>
                </View>
            </View>
        </View>
    );
};

export default Header;
