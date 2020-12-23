import Constants from 'expo-constants';

//orange
const colorO="rgb(236,111,39)";
//green
// const colorG='rgb(96,165,38)';
const colorG='#4db141';

export const smallHeight = 70;
export const searchHeigt = 55;
export const shopHeight = 50;
export const bigHeight = smallHeight+searchHeigt+shopHeight;
export const backgroundColor = colorO;
export const statusBarHeight = -5;


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
    searchHeader: {
        height: smallHeight+searchHeigt,
        backgroundColor: backgroundColor,
        marginTop: statusBarHeight,
    },
    statusBarStyle: {
        backgroundColor: colorO,
        barStyle: 'light-content'
    }
};

