import React from 'react';
import { View, SafeAreaView, Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'

import AcceptButton from '../../personal-area/AcceptButton';
import CancelButton from '../../personal-area/CancelButton';


const FilterScreen = ({ navigation, route }) => {
    // const a = route.params['activeFilters'];
    // const p = route.params['possibleFilters'];
    // const i = route.params['initFilters'];
    const [sectionsData, setSectionsData] = React.useState([])
    const [shownData, setShownData] = React.useState([]);
    const [chosenFilters, setChosenFilters] = React.useState([]);


    const renderItem = ({ item, index, section }) => {
        // console.log(chosenFilters)

        return (
            chosenFilters.find((element) => element['title'] == section.title).data.indexOf(item) == -1
                ? <TouchableOpacity onPress={() => {
                    const tArr = chosenFilters.slice();
                    tArr.find((element) => element.title == section.title).data.push(item)// = [item]
                    setChosenFilters(tArr);
                    console.log(getChosenFilters());
                }}>
                    <Text>{`Choose ${item.trim()}`}</Text>
                </TouchableOpacity>
                : <TouchableOpacity onPress={() => {
                    const tArr = chosenFilters.slice();
                    const itemId = tArr.find((element) => element.title == section.title).data.indexOf(item);
                    tArr.find((element) => element.title == section.title).data.splice(itemId, 1)// = [item]
                    setChosenFilters(tArr);
                    console.log(getChosenFilters());
                }}>
                    <Text>{`Delete ${item.trim()}`}</Text>
                </TouchableOpacity>
            // <Text>{item.trim()}</Text>

        )
    };

    const renderSectionHeader = ({ section: { title } }) => {
        return (
            <TouchableOpacity onPress={() => {
                const tArr = shownData.slice();
                const possibleData = route.params.possibleFilters[title];

                // console.log(possibleData);
                // setShownData(tArr);

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
                <Text style={{ fontSize: 20 }}>{titles[title]}</Text>
            </TouchableOpacity>
        )
    };

    const renderSectionFooter = ({ section: { title } }) => {
        return (
            (shownData.find((element) => element.title == title).data.length > 0
                && route.params.possibleFilters[title].length > 5) ?
                <TouchableOpacity onPress={() => {
                    const tArr = shownData.slice();
                    const possibleData = route.params.possibleFilters[title];

                    // console.log(possibleData);
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
                    <Text>{
                        shownData.find((element) => element.title == title).data.length > 5 ?
                            "Показать 5"
                            : "Показать все"
                    }</Text>
                </TouchableOpacity>
                : undefined
        )
    };


    useFocusEffect(
        React.useCallback(() => {
            console.log('asd');

            // console.log(route.params['possibleFilters'])
            // route.params['possibleFilters'].forEach(element => {

            // });
            // setSectionsData([])

            const tempArr = [];
            const tempArr2 = [];
            const tempArr3 = [];

            Object.entries(route.params['possibleFilters']).map(([key, value]) => {
                tempArr.push({
                    title: key,
                    data: value
                })
                tempArr2.push({
                    title: key,
                    data: []
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
            console.log(getChosenFilters())
            console.log(route.params['activeFilters'])

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
})

export default FilterScreen;