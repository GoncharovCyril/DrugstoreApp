import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, ActivityIndicator} from 'react-native';
import { useSelector } from 'react-redux';
import {useFocusEffect} from '@react-navigation/native'; 

import {colorOrange} from '../Colors';

import {getMedicineItem} from '../requests/ProductsRequests';
import MedicineInfo from './medicine-info/MedicineInfo';


export const MedicineItemScreen = ({route, navigation}) => {
  
    const [id, setId] = React.useState(undefined);
    const [name, setName] = React.useState(undefined);
    const [isLoading, setLoading] = React.useState(true);
    const [medicineData, setMedicineData] = React.useState([])
    const selectedShop = useSelector(state => state.appStore.shop.id);
  
  
    useFocusEffect(React.useCallback(()=> {
      // if(route['params'] != undefined){
      //   setId(route.params['id'])
      //   setName(route.params['name'])
  
      // }

      console.log(selectedShop)

      getMedicineItem(route.params['id'], selectedShop)
            .then(([status, json]) => {
              console.log(selectedShop)
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
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {
          isLoading ?
          <View style={{justifyContent: 'center', alignItems: 'center'}}> 
            <ActivityIndicator size="large" color={colorOrange} />
          </View>
          : 
            <MedicineInfo navigation={navigation} data={medicineData[0]} />
        }
        
      </View>
  
    )
  };


export default MedicineItemScreen;
