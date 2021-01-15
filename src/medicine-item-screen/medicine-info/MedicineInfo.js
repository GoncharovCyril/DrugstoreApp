import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Button, SafeAreaView} from 'react-native';
import { useSelector } from 'react-redux';
import {useFocusEffect} from '@react-navigation/native'; 
import { colorLightGrey, colorDarkGrey } from '../../Colors';

import Poster from './Poster'
import Title from './Title'
import MainProperty from './MainProperty';
import ConnectButton from './ConnectButton'
import AdditionalProperty from './AdditionalProperty';
import Footer from './Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeAreaView: {
    flex: 10
  },
  scrollView: {
    flex: 1
  },
  bottom: {
    flex: 2
  }
})


export const MedicineInfo = ({route, navigation, data}) => {

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          <Poster drug_id={data['id']} />
          <Title name_rus={data['name_rus']} name_eng={data['name_eng']}/>

          <MainProperty propertyName='Производитель' propertyValue={data['manufacturer']} />
          <MainProperty propertyName='Страна' propertyValue={data['country']} />
          <MainProperty propertyName='Форма выпуска' propertyValue={data['packaging']} />
          <MainProperty propertyName='Фасовка' propertyValue={data['amount']} />
          <MainProperty propertyName='Срок хранения' propertyValue={data['best_before']} />

          <View style={{height: 4}} />
          <ConnectButton navigation={navigation} />

          <View style={{height: 20}} />

          <AdditionalProperty propertyName='Для детей и беременных' propertyValue={data['during_pregnancy']} navigation={navigation} />
          <AdditionalProperty propertyName='Противопоказания' propertyValue={data['contraindications']} navigation={navigation} />
          <AdditionalProperty propertyName='Дозировка' propertyValue={data['dosing']} navigation={navigation} />
          <AdditionalProperty propertyName='Передозировка' propertyValue={data['overdose']} navigation={navigation} />
          <AdditionalProperty propertyName='Фармакологическое действие' propertyValue={data['pharmacology_action']} navigation={navigation} />
          <AdditionalProperty propertyName='Лекарственное взаимодействие' propertyValue={data['interactions']} navigation={navigation} />
          <AdditionalProperty propertyName='Фармакодинамика' propertyValue={data['pharmacodynamics']} navigation={navigation} />
          <AdditionalProperty propertyName='Фармакокинетика' propertyValue={data['pharmacokinetics']} navigation={navigation} />
          <AdditionalProperty propertyName='Побочные действия' propertyValue={data['side_effects']} navigation={navigation} />
          <AdditionalProperty propertyName='Состав и форма выпуска' propertyValue={data['release_form']} navigation={navigation} />
          <AdditionalProperty propertyName='Показания' propertyValue={data['indications']} navigation={navigation} />
          <AdditionalProperty propertyName='Предостережение' propertyValue={data['cautions']} navigation={navigation} />
          <AdditionalProperty propertyName='Меры предосторожности' propertyValue={data['precautions']} navigation={navigation} />
          <AdditionalProperty propertyName='При нарушении функции почек' propertyValue={data['in_impaired_renal_function']} navigation={navigation} />
          <AdditionalProperty propertyName='Особые случаи' propertyValue={data['special_cases']} navigation={navigation} />
          <AdditionalProperty propertyName='Условия хранения' propertyValue={data['storage_conditions']} navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
      <Footer navigation={navigation} id={data['id']} price={data['min_price']} />
    </View>
  )
};

export default MedicineInfo;