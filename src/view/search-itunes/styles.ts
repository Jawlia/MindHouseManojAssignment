import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';
import {color, spacing, FontSize, FontWeight} from '../../theme';
import {DEVICE_WIDTH, isAndroid} from '../../utils';

export const Styles = StyleSheet.create<{
  rootContainerStyle: ViewStyle;
  listItemContainerStyle: ViewStyle;
  listImageStyle: ImageStyle;
  listTextStyle: TextStyle;
  noDataImageContainerStyle: ViewStyle;
  noDataImageStyle: ImageStyle;
  searchBarStyle: ViewStyle;
}>({
  rootContainerStyle: {
    backgroundColor: color.appBackground,
    flex: 1,
  },

  listItemContainerStyle: {
    backgroundColor: color.defaultShadeBackgroundColor,
    marginHorizontal: spacing[2],
    padding: spacing[3],
    borderRadius: 5,
    alignItems: 'center',
  },

  listImageStyle: {
    height: 100,
    width: 100,
  },

  listTextStyle: {
    color: color.defaultTextColor,
    fontWeight: FontWeight.fwBold,
    fontSize: FontSize.small,
    marginTop: spacing[2],
  },

  noDataImageContainerStyle: {
    justifyContent: 'center',
    flex: 1,
  },

  noDataImageStyle: {
    alignSelf: 'center',
    width: DEVICE_WIDTH * 0.8,
    height: DEVICE_WIDTH * 0.8 * 1.29,
  },

  searchBarStyle: {
    marginHorizontal: isAndroid ? spacing[5] : spacing[0],
    height: 50,
  },
});
