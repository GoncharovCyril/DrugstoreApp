import React from 'react';
import { View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import MedicineSwipeableRow from '../../basket/basket-list/MedicineSwipeableRow'
import ListItem from '../../medicine-list/MedicineItemView'

import { delCart } from '../../requests/BasketRequests'
import { REMOVE_ALL_THIS_PRODUCT, REMOVE_PRICE_FROM_SUM } from '../../redux/types'

const SwipeableRow = ({ item, navigation }) => {
    const product = useSelector(state => state.appStore.products.get(item.id.toString()));
    const storedToken = useSelector(state => state.appStore.account.token);

    const dispatch = useDispatch();

    const removeAllProduct = async (id) => {
        delCart(id, storedToken);
        dispatch({ type: REMOVE_ALL_THIS_PRODUCT, payload: { id: id } });
        const tempPrice = item.count *
            (
                (item.price != undefined && item.price != null && item.price != '')
                    ? item.price : item.min_price
            )
        dispatch({ type: REMOVE_PRICE_FROM_SUM, payload: { price: tempPrice } });

    };


    return (
        <View>
            {
                product != undefined
                    ?
                    <View>
                        {
                            <MedicineSwipeableRow action={() => { removeAllProduct(item.id.toString()) }}>
                                <ListItem
                                    navigation={navigation}
                                    id={item.id}
                                    name_rus={item.name_rus}
                                    manufacturer={item.manufacturer}
                                    price={item.price}
                                    min_price={item.min_price}
                                    availability={item.availability}
                                    count={item.count}
                                />
                            </MedicineSwipeableRow>
                        }
                    </View>
                    : undefined
            }
        </View>
    )
};

export default SwipeableRow;