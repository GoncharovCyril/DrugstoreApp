import React from 'react';
import { View, SafeAreaView, Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'

import AcceptButton from '../../AcceptButton';
import CancelButton from '../../CancelButton';
import { colorDarkGrey, colorGreen, colorOrange } from '../../Colors';
import ChevronBottomSolid from '../../../svg/chevron-bottom-solid';
import ChevronUpSolid from '../../../svg/chevron-up-solid';


const FilterScreen = ({ navigation, route }) => {
    // const a = route.params['activeFilters'];
    // const p = route.params['possibleFilters'];
    // const i = route.params['initFilters'];
    const [sectionsData, setSectionsData] = React.useState([])
    const [shownData, setShownData] = React.useState([]);
    const [chosenFilters, setChosenFilters] = React.useState([]);
    const [selectStates, setSelectStates] = React.useState([]);


    const renderItem = ({ item, index, section }) => {
        return (
            chosenFilters.find((element) => element['title'] == section.title).data.indexOf(item) == -1
                ? <TouchableOpacity
                    style={styles.chooseContainer} 
                    onPress={() => {
                        const tArr = chosenFilters.slice();
                        tArr.find((element) => element.title == section.title).data.push(item)// = [item]
                        setChosenFilters(tArr);
                    }}>
                    <View style={styles.chooseBox} />
                    <Text style={styles.chooseText}>{item.trim()}</Text>
                </TouchableOpacity>
                : <TouchableOpacity
                    style={styles.chooseContainer}
                    onPress={() => {
                        const tArr = chosenFilters.slice();
                        const itemId = tArr.find((element) => element.title == section.title).data.indexOf(item);
                        tArr.find((element) => element.title == section.title).data.splice(itemId, 1)// = [item]
                        setChosenFilters(tArr);
                    }}>
                    <View style={styles.unchooseBox} />
                    <Text style={styles.chooseText}>{item.trim()}</Text>
                </TouchableOpacity>
            // <Text>{item.trim()}</Text>

        )
    };

    const renderSectionHeader = ({ section: { title } }) => {
        return (
            <View>
                <TouchableOpacity
                    style={styles.sectionHeaderContainer}
                    onPress={() => {
                        const tArr = shownData.slice();
                        const possibleData = route.params.possibleFilters[title];

                        const sectionData = tArr.find((element) => element.title == title).data;

                        tArr.find((element) => element.title == title).data =
                            sectionData.length > 0 ?
                                []
                                :
                                possibleData.slice(0, 5);
                        // sectionData = possibleData
                        // .find((element)=>element.title == title).data == [] ? 
                        setShownData(tArr);
                    }}>
                    <Text numberOfLines={1} style={styles.sectionHeaderText}>{titles[title]}</Text>
                    <View style={styles.headerShevronContainer}>
                        {
                            shownData.find((element) => element.title == title).data.length > 0 ?
                                <ChevronUpSolid color={colorDarkGrey} />
                                : <ChevronBottomSolid color={colorDarkGrey} />
                        }
                    </View>
                </TouchableOpacity>
                {
                    shownData.find((element) => element.title == title).data.length > 0 ?
                        <TouchableOpacity 
                            style={styles.selectAllContainer}
                            onPress={()=>{
                                const tArr = chosenFilters.slice();
                                const sArr = selectStates.slice();


                                if (sArr.find((element) => element.title == title).state){
                                    tArr.find((element) => element.title == title).data.splice(0, tArr.find((element) => element.title == title).data.length)
                                } else {
                                    tArr.find((element) => element.title == title).data = route.params.possibleFilters[title].slice();
                                }
                                sArr.find((element) => element.title == title).state = !sArr.find((element) => element.title == title).state; 

                                // tArr.find((element) => element.title == title).data = [];
                                // tArr.find((element) => element.title == title).data.splice(0, tArr.find((element) => element.title == title).data.length)
                                // tArr.find((element) => element.title == title).data = route.params.possibleFilters[title].slice();
                                setChosenFilters(tArr);
                            }}
                        >
                            <Text style={styles.selectAllText}>{selectStates.find((element) => element.title == title).state ? 'Снять все' : 'Выделить все'}</Text>
                        </TouchableOpacity>
                    : <View />
                }
                
            </View>
        )
    };

    const renderSectionFooter = ({ section: { title } }) => {
        return (
            (shownData.find((element) => element.title == title).data.length > 0
                && route.params.possibleFilters[title].length > 5) ?
                <TouchableOpacity 
                style={styles.footerContainer}
                onPress={() => {
                    const tArr = shownData.slice();
                    const possibleData = route.params.possibleFilters[title];

                    // setShownData(tArr);

                    const sectionData = tArr.find((element) => element.title == title).data;

                    tArr.find((element) => element.title == title).data =
                        sectionData.length > 5 ?
                            possibleData.slice(0, 5)
                            :
                            possibleData;
                    // sectionData = possibleData
                    // .find((element)=>element.title == title).data == [] ? 
                    setShownData(tArr);

                }}>
                    <Text style={styles.footerText}>{
                        shownData.find((element) => element.title == title).data.length > 5 ?
                            "Показать 5"
                            : "Показать все"
                    }</Text>
                    <View style={styles.footerShevronContainer}>
                        {
                            shownData.find((element) => element.title == title).data.length > 5 ?
                                <ChevronUpSolid color={colorGreen} />
                                : <ChevronBottomSolid color={colorGreen} />
                        }
                    </View>
                </TouchableOpacity>
                : undefined
        )
    };


    useFocusEffect(
        React.useCallback(() => {

            // route.params['possibleFilters'].forEach(element => {

            // });
            // setSectionsData([])

            const tempArr = [];
            const tempArr2 = [];
            const tempArr3 = [];
            const tempArr4 = [];

            Object.entries(route.params['possibleFilters']).map(([key, value]) => {
                tempArr.push({
                    title: key,
                    data: value
                })
                tempArr2.push({
                    title: key,
                    data: []
                })
                tempArr4.push({
                    title: key,
                    state: false
                })

            })
            Object.entries(route.params['activeFilters']).map(([key, value]) => {
                tempArr3.push({
                    title: key,
                    data: value
                })
            })
            setSectionsData(tempArr);
            setShownData(tempArr2);
            // setChosenFilters(route.params['activeFilters']['manufacturer']);
            setChosenFilters(tempArr3);
            setSelectStates(tempArr4);

        }, [])
    );


    const getChosenFilters = () => {
        const chos = {};
        chosenFilters.forEach((item, index, array) => {
            chos[item.title] = item.data;
        })

        return chos;
    }

    return (
        <View style={{ flex: 1 }}>

            <SafeAreaView style={styles.listContainer}>
                <SectionList
                    sections={shownData}
                    keyExtractor={(item, index) => item + index}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                    renderSectionFooter={renderSectionFooter}
                />
            </SafeAreaView>


            <View style={styles.buttonsContainer}>
                <View style={styles.cancelButton}>
                    <CancelButton title='Сбросить' onPress={() => {
                        navigation.navigate(route.params['baseRouteName'], {
                            activeFilters: route.params['initFilters']
                        })
                    }} />
                </View>
                <View style={styles.acceptButton}>
                    <AcceptButton title='Сохранить' onPress={() => {
                        navigation.navigate(route.params['baseRouteName'], {
                            activeFilters: getChosenFilters()
                        })
                    }} />
                </View>
            </View>

        </View>
    )
}


const titles = {
    manufacturer: 'Производитель',
    country: 'Страна',
    release_form: 'Форма выпуска',

}

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    listContainer: {
        flex: 9,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    cancelButton: {
        flex: 1,
        marginTop: '2%',
        marginBottom: '2%',
        marginLeft: '3%',
        marginRight: '2%',
    },
    acceptButton: {
        flex: 1,
        marginTop: '2%',
        marginBottom: '2%',
        marginLeft: '2%',
        marginRight: '3%',
    },
    sectionHeaderContainer: {
        marginLeft: '2%',
        marginTop: '3%',
        flexDirection: 'row'
    },
    sectionHeaderText: {
        color: colorDarkGrey,
        fontSize: 20,
        fontWeight: 'bold',
        flex: 95
    },
    headerShevronContainer: {
        flex: 5,
        marginRight: '2%',
    },
    selectAllContainer: {
        marginLeft: '2%',
        marginTop: '1%',
        marginBottom: '2%'
    },
    selectAllText: {
        color: colorGreen,
        fontSize: 16
    },
    chooseContainer: {
        flexDirection: 'row',
        marginLeft: '2%',
        marginTop: '2%',
        alignItems: 'center',
        width: '100%'
    },
    chooseBox: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderColor: colorOrange,
    },
    chooseText: {
        marginLeft: '2%',
        fontSize: 16,
        color: colorDarkGrey,
    },
    unchooseBox: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderColor: colorOrange,
        backgroundColor: colorGreen
    },
    footerContainer: {
        marginLeft: '2%',
        marginTop: '2%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    footerText: {
        fontSize: 16,
        color: colorGreen

    },
    footerShevronContainer: {
        height: 15,
        width: 15,
        marginLeft: '1%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
})

export default FilterScreen;