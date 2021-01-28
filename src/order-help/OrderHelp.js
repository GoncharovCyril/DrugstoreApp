import { TabActions } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Animated, SafeAreaView, ScrollView } from 'react-native';

import { colorDarkGrey, colorGreen } from '../Colors';

const styles = StyleSheet.create({
    orderhelpContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'white'
    },
    safeAreaView: {
        flex: 1,
        marginTop: '3%',
        marginLeft: '3%',
        marginRight: '3%',
    },
    titleContainer: {
        marginTop: '3%'
    },
    titleText: {
        fontSize: 20,
        color: colorGreen
    },
    infoContainer: {

    },
    buttonContainer: {
        borderRadius: 15,
        height: 50,
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '1%',
        marginBottom: '1%',
        backgroundColor: colorGreen,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    infoText: {
        fontSize: 16,
        color: colorDarkGrey
    }
});

const attention=`Реализация товара происходит только посредством самовывоза.`;
const step1=`Для работы с корзиной необходимо пройти регистрацию, или авторизоваться, если вы уже зарегистрированы.

В открывшемся окне введите ваш номер телефона Феникс.

После успешного ввода телефона вам будет отправлен четырехзначный код подтверждения по SMS. 

Если код подтверждения указан верно, вас перенаправит в личный кабинет.`;
const step2=`Для удобства выбора аптеки рекомендуем выбрать город заказа. Сделать это можно из личного кабинета, или нажав на эту кнопку`;
const step3=`Добавьте в корзину необходимые вам товары. Найти их можно в Каталоге или с помощью Поиска.`;
const step4=`В случае если вы еще не выбрали аптеку оформления заказа, можно будет перейти к выбору аптеки из корзины.`;
const step5=`Перейдите в Корзину. Если там присутствует хотя-бы один товар, произведена авторизация и выбрана аптека заказа появится возможность оформить заказ, нажав на соответствующую кнопку в нижней части корзины.

После откроется экран окно оформления заказа. Если не была проведена регистрация/авторизация вас перенаправит на окно регистрации. В окне оформления заказа можно сменить выбранную аптеку, изменить количество товаров в корзине, увидеть итоговую стоимость.

При нажатии на кнопку “Подтвердить заказ” заказ будет обработан, а ваша корзина очищена.`;

const OrderHelpScreen = ({ route, navigation }) => {
    const [accountState, setAccountState] = React.useState('Регистрация')
    const jumpToCatalog = TabActions.jumpTo('Catalog', {});
    const jumpToBasket = TabActions.jumpTo('Basket', {});
    const jumpToShops = TabActions.jumpTo('ShopsList');
    return (
        <View style={styles.orderhelpContainer} >
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>ВНИМАНИЕ</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>{attention}</Text>

                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>ШАГ 1. РЕГИСТРАЦИЯ/АВТОРИЗАЦИЯ</Text>
                        <Text style={styles.infoText}>{step1}</Text>

                        <View style={{marginLeft: '25%', marginRight: '25%', marginTop: '3%'}}>
                            <TouchableOpacity style={styles.buttonContainer} onPress={()=>{navigation.navigate('PersonalAreaScreen', {baseRouteName: route.name})}}>
                                <Text style={styles.buttonText}>{accountState}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>ШАГ 2. ВЫБОР ГОРОДА</Text>
                        <Text style={styles.infoText}>{step2}</Text>

                        <View style={{marginLeft: '25%', marginRight: '25%', marginTop: '3%'}}>
                            <TouchableOpacity style={styles.buttonContainer} onPress={()=>{navigation.navigate('ChooseCityScreen')}}>
                                <Text style={styles.buttonText}>Выбрать город</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>ШАГ 3. ЗАПОЛНЕНИЕ КОРЗИНЫ</Text>
                        <Text style={styles.infoText}>{step3}</Text>
                        <View style={{marginLeft: '3%', marginRight: '3%', marginTop: '3%', flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                            <TouchableOpacity style={styles.buttonContainer} onPress={()=>{navigation.dispatch(jumpToCatalog);}}>
                                <Text style={styles.buttonText}>Каталог</Text>
                            </TouchableOpacity>
                            </View>
                            <View style={{flex: 1}}>
                            <TouchableOpacity style={styles.buttonContainer} onPress={()=>{navigation.navigate('SearchScreen')}}>
                                <Text style={styles.buttonText}>Поиск</Text>
                            </TouchableOpacity>
                            </View>            
                        </View>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>ШАГ 4. ВЫБОР АПТЕКИ</Text>
                        <Text style={styles.infoText}>{step4}</Text>
                        <View style={{marginLeft: '25%', marginRight: '25%', marginTop: '3%'}}>
                            <TouchableOpacity style={styles.buttonContainer} onPress={()=>{navigation.dispatch(jumpToShops)}}>
                                <Text style={styles.buttonText}>Выбрать аптеку</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>ШАГ 5. ОФОРМЛЕНИЕ ЗАКАЗА</Text>
                        <Text style={styles.infoText}>{step5}</Text>

                        <View style={{marginLeft: '25%', marginRight: '25%', marginTop: '3%', marginBottom: '3%'}}>
                            <TouchableOpacity style={styles.buttonContainer} onPress={()=>{navigation.dispatch(jumpToBasket)}}>
                                <Text style={styles.buttonText}>Перейти в корзину</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};


export default OrderHelpScreen;
