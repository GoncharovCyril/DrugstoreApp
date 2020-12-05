import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


import HomeSolid from '../svg/home-solid';
import ListUlSolid from '../svg/list-ul-solid';
import ShoppingBasketSolid from '../svg/shopping-basket-solid';
import MapMarketAltSolid from '../svg/map-market-alt-solid';
import BarsSolid from '../svg/bars-solid';


const bottomStyles = StyleSheet.create({
    bottomContainer: {
        height: "8%",
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
        height: '55%',
        justifyContent: "center",
    },
    text: {
        justifyContent: 'flex-end',
    }
});


const activeColor="rgba(226,94,18,1.0)";
const color="rgba(106,106,106,1.0)";


function MedicineTab({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={bottomStyles.bottomContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

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
            Home: (<HomeSolid color={isFocused ? activeColor : color} />),
            Catalog: (<ListUlSolid color={isFocused ? activeColor : color} />),
            Basket: (<ShoppingBasketSolid color={isFocused ? activeColor : color} />),
            ShopsList: (<MapMarketAltSolid color={isFocused ? activeColor : color} />),
            Menu: (<BarsSolid color={isFocused ? activeColor : color} />),
        };
        const labels = {
            Home: "Главная",
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
                    {icons[label]}
                </ View>
                <Text style={{
                    color: isFocused ? activeColor : color,
                }}>
                    {labels[label]}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MedicineTab;
