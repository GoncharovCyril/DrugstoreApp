import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button} from 'react-native';
import { useSelector } from 'react-redux';
import {useFocusEffect} from '@react-navigation/native'; 
// import { colorLightGrey, colorDarkGrey } from '../Colors';



export const MedicineItemScreen = ({route, navigation}) => {
//   const search = useSelector(state => state.appStore.search.history);

//   const [id, setId] = React.useState(undefined);
//   const [name, setName] = React.useState(undefined);


//   useFocusEffect(React.useCallback(()=> {
//     if(route['params'] != undefined){
//       console.log('yes1')
//       setId(route.params['id'])
//       setName(route.params['name'])
//       console.log(id)
//       console.log(name)

//     } 
//   },[id, name]))

  return (
    <View style={{ flex: 1 }}>
      {/* <Text>{JSON.stringify(search)}</Text> */}
      {/* <Text>{JSON.stringify(search.length)}</Text> */}
    </View>

  )
};

export default MedicineItemScreen;