import Constants from 'expo-constants';
import {colorOrange} from './Colors';


export const smallHeight = 70;
export const searchHeigt = 55;
export const shopHeight = 50;
export const bigHeight = smallHeight+searchHeigt+shopHeight;
export const backgroundColor = colorOrange;
export const statusBarHeight = 0;


export const headerStyles = {
    mainHeader: {
        height: bigHeight,
        backgroundColor: backgroundColor,
        marginTop: statusBarHeight,
    },
    catalogHeader: {
        height: bigHeight,
        backgroundColor: backgroundColor,
        marginTop: statusBarHeight,
    },
    menuHeader: {
        height: smallHeight,
        backgroundColor: backgroundColor,
        marginTop: statusBarHeight,
    },
    basketHeader: {
        height: smallHeight,
        backgroundColor: backgroundColor,
        marginTop: statusBarHeight,
    },
    basketSelectedShopHeader: {
        height: smallHeight+shopHeight,
        backgroundColor: backgroundColor,
        marginTop: statusBarHeight,
    },
    searchInputHeader: {
        height: smallHeight+searchHeigt,
        backgroundColor: backgroundColor,
        marginTop: statusBarHeight,
    },
    medicineItemHeader: {
        height: smallHeight+shopHeight,
        backgroundColor: backgroundColor,
        marginTop: statusBarHeight,
    },
    medicineItemSubHeader: {
        height: smallHeight,
        backgroundColor: backgroundColor,
        marginTop: statusBarHeight,
    },
    searchResultHeader: {
        height: smallHeight+searchHeigt+shopHeight,
        backgroundColor: backgroundColor,
        marginTop: statusBarHeight,
    },
    statusBarStyle: {
        backgroundColor: colorOrange,
        barStyle: 'light-content'
    }
};

