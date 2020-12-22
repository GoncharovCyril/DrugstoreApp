import React from 'react';
import { StyleSheet, View } from 'react-native';

import BackButton from "../BackButton";
import TitleHead from '../header/TitleHead';


import { headerStyles } from "../navigationHeadStyles";

const headStyles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const Header = ({navigation, backButton, title}) => {
    return (
        <View style={{ flex: 1 }}>
            <TitleHead navigation={navigation} backButton={backButton} title={title} />
        </View>
    );
};

const titles={
    MenuScreen: "Меню",
    PersonalAreaScreen: "Личный кабинет",
    OrdersScreen: "Заказы",
    PromotionsScreen: "Акции",
    ReviewScreen: "Оставьте отзыв",
    CallbackScreen: "Обратная связь",
};

const shopslistHeader = {
    headerMode: "screen",
    headerStyle: headerStyles.menuHeader,
    header: ({ scene, previous, navigation }) => {
        const { options } = scene.descriptor;

        const title=titles[scene.route.name];

        return (
            <View style={options.headerStyle} >
                <Header title="Аптеки" navigation={navigation} backButton={
                    previous ? <BackButton action={navigation.goBack} /> : undefined
                } />  
            </View>
            
        );
    },
};

export default shopslistHeader;