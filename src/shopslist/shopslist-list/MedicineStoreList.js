// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import ListItem from './MedicineStoreItem';

// import DATA from "./testMedicineData";

// import FilterSolid from '../../svg/filter-solid';
// import ChevronBottomSolid from '../../svg/chevron-bottom-solid'


const medicineListStyles=StyleSheet.create({

});

// const wait= (timeout) => {
//     return new Promise(resolve => {
//         setTimeout(resolve, timeout);
//     });
// }

// const Footer = () => (
//     <ActivityIndicator size="large" color="rgb(236,111,39)" />);

// const Header = () => (
//     <View style={{
//         flexDirection: 'row',
//         height: 25,
//         justifyContent: 'space-around',
//         marginTop: 5
//     }}>
//         <TouchableOpacity style={{flexDirection: 'row'}}>
//             <Text style={{fontSize: 15}}>По популярности  </Text>
//             <View style={{height: 12, alignSelf: 'center'}}>
//                 <ChevronBottomSolid color="black" />
//             </View>
//         </TouchableOpacity>
//         <TouchableOpacity style={{flexDirection: 'row'}}>
//             <Text style={{fontSize: 15}}>Фильтр  </Text>
//             <View style={{height: 12, alignSelf: 'center'}}>
//                 <FilterSolid color="black" />
//             </View>
//         </TouchableOpacity>
//     </View>
// );

const MedicineList = ({route, navigation, data}) => {

    const [refreshing, setRefreshing] = React.useState(false);
    // const [data, setData] = React.useState(DATA)
    const [bottom, setBottom] = React.useState(undefined);
    

    const listData = data;


    // const headVisible = route.params.headVisible===undefined ? true : route.params.headVisible;
    

    const [count, setCount] = React.useState(3);

    const onRefresh = React.useCallback(() => {
            // setRefreshing(true);
            // setBottom(<Footer />)
            // //setData(data.concat(data));
            // wait(2000).then(() => {setRefreshing(false); setBottom(undefined)});
    }, []);

    const renderItem = ({ item }) => (
        <ListItem 
            navigation={navigation} 
            id={item.id} 
            system_id={item.system_id}
            name={item.name}
            city={item.city}
            address={item.address}
            coordinates={item.coordinates}
            photo={item.photo}
            phone={item.phone}
            working_time={item.working_time}
        />
    );

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={listData}
                    // ListFooterComponent={bottom}
                    // ListHeaderComponent={
                    //     headVisible ? Header : undefined
                    // }
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    // refreshing={refreshing}
                    // onEndReached={onRefresh}
                    // onEndReachedThreshold={1}
                />
            </SafeAreaView>
        </View>
    );
};


export default MedicineList;