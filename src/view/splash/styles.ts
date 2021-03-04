import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';
import {color, spacing, FontSize, FontWeight, LineHeight} from '../../theme';
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../../utils';

export const Styles = StyleSheet.create<{
  headerStyle: ViewStyle;
  rootContainerStyle: ViewStyle;
  topImageContainerStyle: ViewStyle;
  headerTextStyle: TextStyle;
  descriptionTextStyle: TextStyle;
  headphoneImageStyle: ImageStyle;
  bottomDescriptionContainerStyle: ViewStyle;
  developerDetailsTextStyle: TextStyle;
  termsTextStyle: TextStyle;
}>({
  headerStyle: {
    height: spacing[0],
  },
  rootContainerStyle: {
    height: DEVICE_HEIGHT,
  },
  topImageContainerStyle: {
    width: DEVICE_WIDTH,
    height: DEVICE_WIDTH * 1.16, //calculated as per image aspect ratio (1 / 1.16)
    paddingTop: DEVICE_HEIGHT * 0.05,
    paddingHorizontal: DEVICE_WIDTH * 0.03,
  },

  headerTextStyle: {
    color: color.defaultTextColor,
    fontWeight: FontWeight.fwBold,
    fontSize: FontSize.xxLarge,
    letterSpacing: 2,
  },

  descriptionTextStyle: {
    color: color.defaultTextColor,
    fontSize: FontSize.medium,
    fontWeight: FontWeight.fwXXLight,
    lineHeight: LineHeight.xLarge,
  },

  headphoneImageStyle: {
    width: DEVICE_WIDTH,
    height: DEVICE_WIDTH * 0.83, //calculated as per image aspect ratio (1 / 0.83)
    opacity: 0.25,
    justifyContent: 'flex-end',
    marginTop: -DEVICE_HEIGHT * 0.2,
  },

  bottomDescriptionContainerStyle: {
    position: 'absolute',
    bottom: DEVICE_HEIGHT * 0.02,
    right: spacing[4],
  },

  developerDetailsTextStyle: {
    color: color.secondaryTextColor,
    fontSize: FontSize.small,
    fontWeight: FontWeight.fwLight,
    lineHeight: LineHeight.large,
    marginBottom: DEVICE_HEIGHT * 0.05,
    textAlign: 'right',
  },

  termsTextStyle: {
    color: color.secondaryTextColor,
    fontSize: FontSize.xSmall,
    fontWeight: FontWeight.fwLight,
    width: DEVICE_WIDTH,
    textAlign: 'center',
  },
});
