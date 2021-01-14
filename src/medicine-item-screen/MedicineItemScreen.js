import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, ActivityIndicator} from 'react-native';
import { useSelector } from 'react-redux';
import {useFocusEffect} from '@react-navigation/native'; 

import {colorOrange} from '../Colors';

import {getMedicineItem} from '../requests/ProductsRequests';


export const MedicineItemScreen = ({route, navigation}) => {
  
    const [id, setId] = React.useState(undefined);
    const [name, setName] = React.useState(undefined);
    const [isLoading, setLoading] = React.useState(true);
    const [medicineData, setMedicineData] = React.useState([])
  
  
    useFocusEffect(React.useCallback(()=> {
      // if(route['params'] != undefined){
      //   console.log('yes1')
      //   setId(route.params['id'])
      //   setName(route.params['name'])
  
      // }

      getMedicineItem(route.params['id'])
            .then(([status, json]) => {
                switch (status) {
                    case 200:
                        setMedicineData(json)
                        break;
                    default:
                        // alert(`${status}:\n${json}`);
                        break;
                }

            })
            .finally(() => {
                setLoading(false);
            })
      

      
    },[id, name]))
  
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        {
          isLoading ?
          <View style={{justifyContent: 'center', alignItems: 'center'}}> 
            <ActivityIndicator size="large" color={colorOrange} />
          </View>
          : 
          <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
            <Text>{JSON.stringify(medicineData)}</Text>
          </View>
        }
        
      </View>
  
    )
  };


export default MedicineItemScreen;
