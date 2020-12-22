import Constants from 'expo-constants';

//orange
const colorO="rgb(236,111,39)";
//green
// const colorG='rgb(96,165,38)';
const colorG='#4db141';

export const smallHeight = 70;
export const searchHeigt = 40;
export const shopHeight = 50;
export const bigHeight = smallHeight+searchHeigt+shopHeight;
export const backgroundColor = colorO;


export const headerStyles = {
    mainHeader: {
        height: bigHeight,
        backgroundColor: backgroundColor,
        marginTop: Constants.statusBarHeight,
    },
    catalogHeader: {
        height: bigHeight,
        backgroundColor: backgroundColor,
        marginTop: Constants.statusBarHeight,
    },
    menuHeader: {
        height: smallHeight,
        backgroundColor: backgroundColor,
        marginTop: Constants.statusBarHeight,
    },
    basketHeader: {
        height: smallHeight,
        backgroundColor: backgroundColor,
        marginTop: Constants.statusBarHeight,
    },
    searchHeader: {
        height: (bigHeight+smallHeight)/2,
        backgroundColor: backgroundColor,
        marginTop: Constants.statusBarHeight,
    }
};

