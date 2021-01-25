import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_ALL_PRODUCTS } from '../redux/types';
import { StyleSheet, View, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import TrashButton from "./TrashButton";
import BackButton from '../BackButton';
import TitleHead from '../header/TitleHead';
import ShopHead from '../header/ShopHead';

import { headerStyles, smallHeight, shopHeigt } from "../navigationHeadStyles";
import { colorOrange } from '../Colors';
import { delAllCart } from '../requests/BasketRequests';


const headStyles = StyleSheet.create({
    headContainer: {
        flex: 3,
        justifyContent: 'center',
    },
});

const Header = ({navigation, backButton, trashButton, storedShop, route}) => {
    return (
        <View style={headStyles.headContainer}>
            <LinearGradient
                colors={[colorOrange, 'white']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: storedShop == null ? smallHeight : smallHeight,
                }}
            />
            <TitleHead backButton={backButton} trashButton={trashButton} title='Корзина' />
            {storedShop != null ?
                <ShopHead navigation={navigation} route={route} />
                : undefined
                }
        </View>
    );
};

const mainHeader = {
    headerMode: "screen",
    // headerStyle: headerStyles.basketHeader,
    header: ({ scene, previous, navigation }) => {

        const productsCounter = useSelector(state => state.appStore.products.size);
        const storedToken = useSelector(state => state.appStore.account.token)
        const storedShop = useSelector(state => state.appStore.shop.id)

        const dispatch = useDispatch();

        const removeAllProduct = React.useCallback(async ()=>{
            await delAllCart(storedToken)
            dispatch({ type: CLEAR_ALL_PRODUCTS, payload: {} });
        }, [dispatch])


        return (
            <View style={storedShop == null ? headerStyles.basketHeader : headerStyles.basketSelectedShopHeader} >
                <Header 
                storedShop={storedShop}
                navigation={navigation} 
                route={scene.route}
                backButton={
                    previous ? <BackButton action={navigation.goBack} /> : undefined
                }
                trashButton={
                    productsCounter > 0 ? <TrashButton action={() => {
                        return Alert.alert(
                            '',
                            'Вы уверены, что хотите очистить корзину?',
                            [
                                {
                                    text: 'НЕТ',
                                    onPress: () => {},
                                    style: 'cancel'
                                },
                                {
                                    text: 'ДА',
                                    onPress: removeAllProduct
                                },
                            ],
                            { cancelable: true }
                        );
                    }} /> : undefined
                } />

            </View>          
        );
    },
};

export default mainHeader;
