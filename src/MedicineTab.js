import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Keyboard } from 'react-native';

import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSize } from './redux/Methods';

import HomeSolid from '../svg/home-solid';
import ListUlSolid from '../svg/list-ul-solid';
import ShoppingBasketSolid from '../svg/shopping-basket-solid';
import MapMarketAltSolid from '../svg/map-market-alt-solid';
import BarsSolid from '../svg/bars-solid';


const bottomStyles = StyleSheet.create({
  bottomContainer: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,1.0)',
    flexDirection: 'row',
    alignItems: "flex-end",

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 20,
    shadowRadius: 5,
    elevation: 16,
  },
  buttonContainer: {
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


const activeColor = "rgba(226,94,18,1.0)";
const color = "rgba(106,106,106,1.0)";

const ProductIcon = ({count}) => {
  if (count<1) return null;
  const size = 18;
  return (
    <View style={{
      flex: 1,
      elevation: 1, 
      zIndex: 1, 
      position: 'absolute',
    }}>
      <View style={{flex: 1, justifyContent: 'flex-start', left: '110%', top: "-32%"}}>

        <View style={{ borderRadius: size / 2, backgroundColor: "rgb(92,158,36)", width: size, height: size }}>
          <Text style={{ color: "white", textAlign: 'center', textAlignVertical: 'center' }}>{count}</Text>
        </View>

      </View>
    </View>
  );
}


function MedicineTab({ state, descriptors, navigation }) {

  const appStore = useSelector((state) => state.appStore);

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
              style={bottomStyles.buttonContainer}
            >
              <View style={bottomStyles.button}>
                <View style={{flex: 0.9}}>
                  {icons[route.name]}
                </View>

                {
                  route.name === 'Basket' ?
                    <ProductIcon count={getSize(appStore.products)} /> :
                    undefined
                }
              </ View>
              <Text style={{
                color: isFocused ? activeColor : color,
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
