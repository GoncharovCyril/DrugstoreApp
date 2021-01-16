import React from 'react';
import { View, SafeAreaView, SectionList, Text } from 'react-native';

import AcceptButton from '../../personal-area/AcceptButton';
import CancelButton from '../../personal-area/CancelButton';


const FilterScreen = ({ navigation, route }) => {
    const a = route.params['activeFilters'];
    const p = route.params['possibleFilters'];
    const i = route.params['possibleFilters'];
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text>{JSON.stringify(a)}</Text>
                <Text>-------------------</Text>
                <Text>{JSON.stringify(p)}</Text>
            </View>
        
            <View style={{flexDirection: 'row', flex: 1}}>
                <View style={{flex: 1}}>
                    <CancelButton title='Сбросить' onPress={()=>{
                        navigation.navigate(route.params['baseRouteName'], {
                            activeFilters: i
                        })
                    }} />
                </View>
                <View style={{flex: 1}}>
                    <AcceptButton title='Сохранить' onPress={()=>{
                        navigation.navigate(route.params['baseRouteName'], {
                            activeFilters: {
                                lsd: 'a'
                            }
                        })
                    }} />
                </View>
            </View>

        </View>
    )
}

export default FilterScreen;