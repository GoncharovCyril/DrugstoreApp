import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, I18nManager } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import TrashAltSolid from '../../../svg/trash-alt-solid';
import Icon from 'react-native-vector-icons/MaterialIcons';

// const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export default class MedicineSwipeableRow extends Component {
  
  renderRightActions = (progress, dragX) => {
    // const scale = dragX.interpolate({
    //   inputRange: [-80, 0],
    //   outputRange: [1, 0],
    //   extrapolate: 'clamp',
    // });
    return (
      <RectButton style={styles.rightAction} onPress={this.close}>
        {/* {<AnimatedIcon
          name="delete-forever"
          size={30}
          color="#fff"
          style={[styles.actionIcon, { transform: [{ scale }] }]}
        />} */}
        <View style={{height: 20, width: 20, marginRight: '15%'}}>
          <TrashAltSolid color='red' />
        </View>

      </RectButton>
    );
  };
  updateRef = ref => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };
  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={80}
        enableTrackpadTwoFingerGesture
        rightThreshold={80}
        renderRightActions={this.renderRightActions}
        onSwipeableOpen={this.props.action}
        >
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
  },
  rightAction: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    width: 100,
    height: '100%'
  },
});