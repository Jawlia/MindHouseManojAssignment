import React from 'react';
import posed from 'react-native-pose';
import LottieView from 'lottie-react-native';
import {StyleSheet, ViewStyle, View} from 'react-native';
import {DEVICE_HEIGHT, DEVICE_WIDTH, loaderJson} from './constants';
import { color } from '../theme';

const LoadingSpinnerWrapper = posed.View({
  connecting: {opacity: 1, delay: 150, transition: {duration: 700}},
});

/**
 * DefaultLoader , component used to render default loader / Progress bar
 */
export const DefaultLoader = () => {
  return (
    <View style={styles.loaderBlockStyle}>
      <LoadingSpinnerWrapper pose={'connecting'} style={[styles.defaultStyle]}>
        <LottieView source={loaderJson} autoPlay loop resizeMode="cover"/>
      </LoadingSpinnerWrapper>
    </View>
  );
};

const styles = StyleSheet.create<{
  defaultStyle: ViewStyle;
  loaderUnBlockStyle: ViewStyle;
  loaderBlockStyle: ViewStyle;
}>({
  defaultStyle: {
    position: 'absolute',
    height: 200,
    width: 200,
    bottom: '15%',
    alignSelf: 'center',
  },

  loaderUnBlockStyle: {
    position: 'absolute',
    zIndex: -1,
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
  },

  loaderBlockStyle: {
    position: 'absolute',
    zIndex: 10,
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    backgroundColor: color.defaultLoaderShadowColor
  },
});
