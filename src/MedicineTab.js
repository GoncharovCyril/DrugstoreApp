import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Keyboard } from 'react-native';

import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { getSize } from './redux/Methods';

import HomeSolid from '../svg/home-solid';
import ListUlSolid from '../svg/list-ul-solid';
import ShoppingBasketSolid from '../svg/shopping-basket-solid2';
import MapMarketAltSolid from '../svg/map-market-alt-solid';
import BarsSolid from '../svg/bars-solid';


// const activeColor = "rgba(226,94,18,1.0)";
// const color = "rgba(106,106,106,1.0)";
// const backColor = "rgba(255,255,255,1.0)";

const colorO="rgb(236,111,39)";
const colorOldGreen = '#4db141';
const colorNewGreen = '#65cc59';
const colorG=colorNewGreen;
const activeColor = "rgba(226,94,18,1.0)";
const color = colorOldGreen;
const backColor = "white";

const productIconSize = 18;

const bottomStyles = StyleSheet.create({
  bottomContainer: {
    // height: 54,
    height: '7.5%',
    justifyContent: 'center',
    backgroundColor: backColor,
    borderTopColor: colorG,
    borderTopWidth: 2,
    flexDirection: 'row',
    alignItems: "flex-end",

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 20,
    shadowRadius: 5,
    elevation: 16,
  },
  activeButtonContainer: {
    flex: 2,
    height: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  activeProductIcon: {
    borderRadius: productIconSize / 2,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: colorO,
    width: productIconSize,
    height: productIconSize
  },
  unactiveProductIcon: {
    borderRadius: productIconSize / 2,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: colorO,
    width: productIconSize,
    height: productIconSize
  },
  unactiveButtonContainer: {
    flex: 2,
    height: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    // height: '55%',
    flex: 55,
    justifyContent: "center",
  },
  text: {
    flex: 45,
    justifyContent: 'flex-end',
  }
});

const ProductIcon = ({count, isFocused}) => {
  if (count<1) return null;
  return (
    <View style={{
      flex: 1,
      elevation: 1, 
      zIndex: 1, 
      position: 'absolute',
    }}>
      <View style={{flex: 1, justifyContent: 'flex-start', left: '150%', top: "-50%"}}>
        <View style={isFocused ? bottomStyles.activeProductIcon : bottomStyles.unactiveProductIcon}>
          <Text style={{ 
            // color: isFocused ? colorO : colorO, 
            color: 'white',
            textAlign: 'center', 
            textAlignVertical: 'center' ,
            fontSize: 12,
            }}>{count}</Text>
        </View>

      </View>
    </View>
  );
}


function MedicineTab({ state, descriptors, navigation }) {

  const selectNumOfProducts = createSelector(
    state => getSize(state.appStore.products),
    products => {
      // console.log(products.size);
      // return getSize(products);
      return products
    }
  );
  const productsCounter = useSelector(selectNumOfProducts);

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const [isVisible, setVisible] = React.useState(true);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const show = event => {
    setVisible(false);
  }

  const hide = event => {
    setVisible(true);
  }

  Keyboard.addListener("keyboardDidShow", show);
  Keyboard.addListener("keyboardDidHide", hide);


  return (
    isVisible ?
      <View style={bottomStyles.bottomContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const icons = {
            Main: (<HomeSolid color={isFocused ? activeColor : color} />),
            Catalog: (<ListUlSolid color={isFocused ? activeColor : color} />),
            Basket: (<ShoppingBasketSolid color={isFocused ? activeColor : color} />),
            ShopsList: (<MapMarketAltSolid color={isFocused ? activeColor : color} />),
            Menu: (<BarsSolid color={isFocused ? activeColor : color} />),
            // Main: (<HomeSolid color={color} />),
            // Catalog: (<ListUlSolid color={color} />),
            // Basket: (<ShoppingBasketSolid color={color} />),
            // ShopsList: (<MapMarketAltSolid color={color} />),
            // Menu: (<BarsSolid color={color} />),
          };
          const labels = {
            Main: "Главная",
            Catalog: "Каталог",
            Basket: "Корзина",
            ShopsList: "Аптеки",
            Menu: "Меню",
          }

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={isFocused ? bottomStyles.activeButtonContainer : bottomStyles.unactiveButtonContainer}
              key={route.name}
            >
              <View style={bottomStyles.button}>
                <View style={{flex: 0.8}}>
                  {icons[route.name]}
                </View>

                {
                  route.name === 'Basket' ?
                    <ProductIcon 
                    count={
                      // getSize(appStore.products)
                      productsCounter
                    } 
                    isFocused={isFocused} /> :
                    undefined
                }
              </ View>
              <Text style={{
                color: isFocused ? activeColor : color,
                // color: color,
              }}>
                {labels[route.name]}</Text>              
            </TouchableOpacity>
          );
        })}
      </View>
      :
      null
  );
}

export default MedicineTab;
