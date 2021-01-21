import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { colorGreen} from '../Colors';

import { ADD_PRODUCT, REMOVE_PRODUCT } from '../redux/types';

const styles = StyleSheet.create({
    button1: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: colorGreen,
        borderRadius: 15,
        height: "100%",
        width: "100%"
    },
    button2: {
        alignItems: "center",
        justifyContent: 'center',
        borderColor: colorGreen,
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 15,
        flex: 1,
        flexDirection: 'row',
        height: "100%",
        width: "100%"
    }
});



const BuyButton = ({ navigation, id, products, dispatch, addProduct, removeProduct}) => {

    // const productSelector = createSelector(
    //     state => {
    //         return state.appStore.products.entries()
    //     },
    //     mapArray => {
    //         console.log('ping2');
    //         return new Map(mapArray)}
    // )

    const [count, setCount] = React.useState(products.get(id));

    console.log(id);


    // const productsCounter = useSelector(productSelector);
        // // const productsCounter = useSelector(state => {
    // //     console.log('ping', id)
    // //     return state.appStore.products;
    // // });

    // const dispatch = useDispatch();

    // const addProduct = React.useCallback(() => {
    //     dispatch({ type: ADD_PRODUCT, payload: {id: id} });
    // }, [dispatch]);

    // const removeProduct = React.useCallback(()=>{
    //     dispatch({ type: REMOVE_PRODUCT, payload: {id: id} });
    // }, [dispatch]);

    const Button1 = ({ navigation}) => (
        <TouchableOpacity
            style={styles.button1}
            onPress={()=>{
                addProduct(id)
                setCount(1)
            }}
        >
            <Text style={{
                color: "white",
                alignSelf: "center",
                textAlignVertical: 'center',
                fontSize: 15
            }}>Купить</Text>
        </TouchableOpacity>
    );

    const Button2 = ({ navigation}) => (
        <View
            style={styles.button2}
            onPress={() => {
                
            }}
        >
            <TouchableOpacity 
                style={{ flex: 30, flexDirection: 'row' }}
                onPress={() => {
                    removeProduct(id);
                    setCount(count-1)
                }}
            >
                <View style={{ flex: 15 }} />
                <Text style={{
                    flex: 85,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontSize: 32,
                    color: colorGreen
                    
                }}>
                    ‒
                </Text>
            </TouchableOpacity>
            <View style={{ flex: 40}}>
                <Text style={{
                    color: "black",
                    alignSelf: "center",
                    textAlignVertical: 'center',
                    fontSize: 15,
                    flex: 1
                }}>{products.get(id)}</Text>
            </View>
            <TouchableOpacity 
                style={{ flex: 30, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}
                onPress={() => {
                    addProduct(id);
                    setCount(count+1)
                }}
            >
                <Text style={{
                    flex: 85,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontSize: 32,
                    color: colorGreen
                }}>
                    +
                </Text>
                <View style={{ flex: 15 }} />
            </TouchableOpacity>
        </View>
    );


    return (
        products.get(id) == undefined ? <Button1 navigation={navigation} id={id} /> : <Button2 navigation={navigation} id={id} />
    );
};


export default BuyButton;
