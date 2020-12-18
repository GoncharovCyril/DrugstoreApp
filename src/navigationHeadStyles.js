import Constants from 'expo-constants';


const mainHeight = 170;
const menuHeight = 90;
const backgroundColor = 'rgb(96,165,38)';

const styles = {
    mainHeader: {
        height: mainHeight,
        backgroundColor: backgroundColor,
        marginTop: Constants.statusBarHeight,
    },
    catalogHeader: {
        height: mainHeight,
        backgroundColor: backgroundColor,
        marginTop: Constants.statusBarHeight,
    },
    menuHeader: {
        height: menuHeight,
        backgroundColor: backgroundColor,
        marginTop: Constants.statusBarHeight,
    },
    basketHeader: {
        height: menuHeight,
        backgroundColor: backgroundColor,
        marginTop: Constants.statusBarHeight,
    },
};

export default styles;